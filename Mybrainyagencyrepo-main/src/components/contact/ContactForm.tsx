import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import { AppConfig } from '../../config/appConfig';

const Schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Please provide more details'),
  consent: z.boolean().refine((v) => v === true, { message: 'Consent required' }),
  _honeypot: z.string().optional(),
});

type FormData = z.infer<typeof Schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(Schema), defaultValues: { consent: false } as any });

  const onSubmit = async (data: FormData) => {
    setStatus('submitting');
    try {
      const res = await fetch('/api/send-email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-red-500/10">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input id="name" label="Full Name *" aria-invalid={!!errors.name} {...register('name')} error={errors.name?.message} />
          <Input id="email" type="email" label="Email *" aria-invalid={!!errors.email} {...register('email')} error={errors.email?.message} />
        </div>
        <div className="mt-4">
          <Input id="phone" type="tel" label="Phone (optional)" {...register('phone')} />
        </div>
        <div className="mt-4">
          <Textarea id="message" rows={6} label="How can we help? *" aria-invalid={!!errors.message} {...register('message')} error={errors.message?.message} />
        </div>
        {/* Honeypot */}
        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register('_honeypot')} />
        <div className="mt-4">
          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" {...register('consent')} aria-invalid={!!errors.consent} className="mt-1" />
            <span>I agree to be contacted about my inquiry</span>
          </label>
          {errors.consent && <p className="text-red-600 text-sm" role="alert">{errors.consent.message}</p>}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <Button type="submit" disabled={status==='submitting'}>
            {status==='submitting' ? 'Sending…' : 'Send Message'}
          </Button>
          <a href={`mailto:${AppConfig.contactToEmail}?subject=${encodeURIComponent('['+AppConfig.siteName+'] Contact')}`} className="text-red-500 hover:underline">
            or email us directly
          </a>
        </div>
        <div className="mt-3" aria-live="polite">
          {status==='success' && <p className="text-green-700">Thanks! We’ll reply shortly.</p>}
          {status==='error' && <p className="text-red-700">Something went wrong. Try again or email us.</p>}
        </div>
      </form>
    </div>
  );
}
