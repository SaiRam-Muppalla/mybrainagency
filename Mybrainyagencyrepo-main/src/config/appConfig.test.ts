import { describe, it, expect } from 'vitest';
import { z } from 'zod';

describe('appConfig schema', () => {
  it('accepts minimal valid env', () => {
    const Schema = z.object({
      VITE_CONTACT_TO_EMAIL: z.string().email(),
    });
    const parsed = Schema.safeParse({ VITE_CONTACT_TO_EMAIL: 'inbox@example.com' });
    expect(parsed.success).toBe(true);
  });

  it('rejects invalid email', () => {
    const Schema = z.object({ VITE_CONTACT_TO_EMAIL: z.string().email() });
    const parsed = Schema.safeParse({ VITE_CONTACT_TO_EMAIL: 'not-an-email' });
    expect(parsed.success).toBe(false);
  });
});
