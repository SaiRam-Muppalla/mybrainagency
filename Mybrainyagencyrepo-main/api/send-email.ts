import { z } from 'zod';
import { AppConfig } from '../src/config/appConfig';
import { ContactMessageSchema, getMailAdapter } from '../src/lib/mail';

const RequestSchema = ContactMessageSchema.extend({
  consent: z.coerce.boolean().optional(),
});

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 10;
const ipHits = new Map<string, { count: number; resetAt: number }>();

export default async function handler(req: any, res: any) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Basic rate limiting per-IP
  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const bucket = ipHits.get(ip) ?? { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };
  if (now > bucket.resetAt) {
    bucket.count = 0;
    bucket.resetAt = now + RATE_LIMIT_WINDOW_MS;
  }
  bucket.count += 1;
  ipHits.set(ip, bucket);
  if (bucket.count > RATE_LIMIT_MAX) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const parsed = RequestSchema.safeParse(body);
  if (!parsed.success) {
    return res.status(400).json({ error: 'Invalid payload', details: parsed.error.flatten() });
  }
  const { _honeypot, ...payload } = parsed.data;
  if (_honeypot && _honeypot.trim() !== '') {
    return res.status(200).json({ ok: true }); // silently accept spam
  }

  const adapter = getMailAdapter(AppConfig.mailProvider);
  const result = await adapter.sendContactMessage(payload);
  if (!result.ok) {
    return res.status(500).json({ error: result.error });
  }

  return res.status(200).json({ ok: true });
}
