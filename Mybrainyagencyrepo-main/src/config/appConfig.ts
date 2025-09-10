import { z } from 'zod';

const EnvSchema = z.object({
  VITE_SITE_NAME: z.string().default('Brainyagency'),
  VITE_BRAND_PRIMARY: z.string().optional(),
  VITE_CALENDLY_URL: z.string().url().optional(),
  VITE_CONTACT_TO_EMAIL: z.string().email(),
  VITE_MAIL_PROVIDER: z.enum(['smtp', 'sendgrid', 'resend', 'none']).default('none'),
  // SMTP
  VITE_SMTP_HOST: z.string().optional(),
  VITE_SMTP_PORT: z.coerce.number().optional(),
  VITE_SMTP_USER: z.string().optional(),
  VITE_SMTP_PASS: z.string().optional(),
  VITE_MAIL_FROM_NAME: z.string().default('Brainyagency'),
  VITE_MAIL_FROM_EMAIL: z.string().email().optional(),
  // Feature flags
  VITE_FEATURE_CALENDLY: z.coerce.boolean().default(true),
  VITE_FEATURE_CONTACT_FORM: z.coerce.boolean().default(true),
});

// Merge env sources: Vite's import.meta.env (when present) + process.env (Node/tests)
type EnvRecord = Record<string, string | undefined>;
const nodeEnv: EnvRecord = (typeof process !== 'undefined'
  ? ((process as unknown as { env?: EnvRecord }).env ?? {})
  : {});
const viteEnv: EnvRecord = (((import.meta as unknown as { env?: EnvRecord }).env) ?? {});
const parsed = EnvSchema.safeParse({
  ...nodeEnv,
  ...viteEnv,
});
if (!parsed.success) {
  console.error('Invalid environment configuration:', parsed.error.flatten());
  throw new Error('Environment validation failed. See console for details.');
}

export const AppConfig = Object.freeze({
  siteName: parsed.data.VITE_SITE_NAME,
  calendlyUrl: parsed.data.VITE_CALENDLY_URL,
  contactToEmail: parsed.data.VITE_CONTACT_TO_EMAIL,
  mailProvider: parsed.data.VITE_MAIL_PROVIDER,
  smtp: {
    host: parsed.data.VITE_SMTP_HOST,
    port: parsed.data.VITE_SMTP_PORT,
    user: parsed.data.VITE_SMTP_USER,
    pass: parsed.data.VITE_SMTP_PASS,
  },
  mailFrom: {
    name: parsed.data.VITE_MAIL_FROM_NAME,
    email: parsed.data.VITE_MAIL_FROM_EMAIL ?? parsed.data.VITE_CONTACT_TO_EMAIL,
  },
  features: {
    calendly: parsed.data.VITE_FEATURE_CALENDLY,
    contactForm: parsed.data.VITE_FEATURE_CONTACT_FORM,
  },
} as const);
export type AppConfig = typeof AppConfig;
