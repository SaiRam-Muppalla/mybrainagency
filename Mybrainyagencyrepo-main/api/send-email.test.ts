import { describe, it, expect, beforeAll } from 'vitest';

type TestReq = { method?: string; body?: unknown; headers: Record<string, string>; socket: { remoteAddress?: string } };
type TestRes = { setHeader: (k: string, v: string) => void; status: (c: number) => TestRes; json: (d: unknown) => TestRes };
type Handler = (req: TestReq, res: TestRes) => Promise<unknown>;
let handler: Handler;
beforeAll(async () => {
  process.env.VITE_CONTACT_TO_EMAIL = 'inbox@example.com';
  const mod = await import('./send-email');
  handler = mod.default;
});

// Ensure required env for AppConfig in test environment is set via process.env (handled in beforeAll)

function mockReqRes(body: unknown = {}, method = 'POST') {
  const req: TestReq = { method, body, headers: {}, socket: { remoteAddress: '127.0.0.1' } };
  let statusCode = 200; let jsonData: unknown; const headers: Record<string,string> = {};
  const res: TestRes = {
    setHeader: (k: string, v: string) => { headers[k] = v; },
    status: (code: number) => { statusCode = code; return res; },
    json: (d: unknown) => { jsonData = d; return res; },
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
