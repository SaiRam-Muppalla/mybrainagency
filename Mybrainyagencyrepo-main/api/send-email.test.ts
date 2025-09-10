import { describe, it, expect, beforeAll } from 'vitest';

let handler: any;
beforeAll(async () => {
  process.env.VITE_CONTACT_TO_EMAIL = 'inbox@example.com';
  const mod = await import('./send-email');
  handler = mod.default;
});

// Ensure required env for AppConfig in test environment is set via process.env (handled in beforeAll)

function mockReqRes(body: any = {}, method = 'POST') {
  const req: any = { method, body, headers: {}, socket: { remoteAddress: '127.0.0.1' } };
  let statusCode = 200; let jsonData: any; const headers: Record<string,string> = {};
  const res: any = {
    setHeader: (k: string, v: string) => { headers[k] = v; },
    status: (code: number) => { statusCode = code; return res; },
    json: (d: any) => { jsonData = d; return res; },
  };
  return { req, res, get: () => ({ statusCode, jsonData, headers }) };
}

describe('/api/send-email', () => {
  it('validates request payload', async () => {
    const { req, res, get } = mockReqRes({ name: 'A', email: 'bad', message: 'short' });
    await handler(req, res);
    expect(get().statusCode).toBe(400);
  });

  it('accepts valid payload', async () => {
    const { req, res, get } = mockReqRes({ name: 'Alice', email: 'alice@example.com', message: 'Hello there, this is valid' });
    await handler(req, res);
    expect(get().statusCode).toBe(200);
  });
});
