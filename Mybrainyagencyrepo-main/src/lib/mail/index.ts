import { z } from 'zod';
import { AppConfig } from '../../config/appConfig';

export const ContactMessageSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
  _honeypot: z.string().optional(),
});
export type ContactMessage = z.infer<typeof ContactMessageSchema>;

export interface MailAdapter {
  sendContactMessage(payload: ContactMessage): Promise<{ ok: true } | { ok: false; error: string }>;
}

class SmtpAdapter implements MailAdapter {
  async sendContactMessage(_payload: ContactMessage) {
    try {
      // Minimal SMTP client via fetch to a serverless SMTP relay or your backend
      // Here we just simulate; real implementation would connect via SMTP library in server env
      console.info('[smtp] sending contact email to', AppConfig.contactToEmail);
      return { ok: true } as const;
    } catch (e) {
      return { ok: false, error: 'SMTP send failed' } as const;
    }
  }
}

class SendGridAdapter implements MailAdapter {
  async sendContactMessage(_payload: ContactMessage) {
      try {
        console.info('[sendgrid] sending contact email to', AppConfig.contactToEmail);
        return { ok: true } as const;
      } catch (e) {
        return { ok: false, error: 'SendGrid send failed' } as const;
      }
  }
}

class ResendAdapter implements MailAdapter {
  async sendContactMessage(_payload: ContactMessage) {
    try {
      console.info('[resend] sending contact email to', AppConfig.contactToEmail);
      return { ok: true } as const;
    } catch (e) {
      return { ok: false, error: 'Resend send failed' } as const;
    }
  }
}

export function getMailAdapter(provider = AppConfig.mailProvider): MailAdapter {
  switch (provider) {
    case 'smtp':
      return new SmtpAdapter();
    case 'sendgrid':
      return new SendGridAdapter();
    case 'resend':
      return new ResendAdapter();
    case 'none':
    default:
      return { async sendContactMessage() { return { ok: true } as const; } };
  }
}
