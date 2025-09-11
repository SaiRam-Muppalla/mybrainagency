// Basic tracking endpoint. Stores nothing long-term, just logs (placeholder for real storage).
// Vercel style: export default handler(req, res)

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }
  try {
    const body = req.body || {};
    // In a real implementation, write to a queue or analytics store.
    console.log('[track]', Array.isArray(body) ? `${body.length} events` : body.event || 'event');
    res.status(200).json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ ok: false, error: e?.message || 'Invalid payload' });
  }
}
