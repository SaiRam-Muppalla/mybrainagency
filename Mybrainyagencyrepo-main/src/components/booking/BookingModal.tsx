import { useEffect, useRef, useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Select from '../ui/Select';
import { CalendarEmbedCalendly } from './CalendarEmbedCalendly';
import useBookingForm from './useBookingForm';
import { track } from '../../utils/analytics';

export default function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const { formData, errors, handleChange, validate, getCalendlyPrefill, getUtmParams, getMailtoUrl } = useBookingForm();
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select';

  useEffect(() => {
    if (open) {
      setStep(1);
      track('booking.modal.open');
      track('booking.step.view', { step: 1 });
  setTimeout(() => firstFieldRef.current?.focus(), 30);
    }
  }, [open]);

  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL as string | undefined;
  const emailProvider = (import.meta.env.VITE_EMAIL_PROVIDER as string | undefined) || 'none';

  const onBooked = (payload: unknown) => {
    setStep(3);
    track('booking.step.view', { step: 3 });
    track('booking.success');
    if (emailProvider !== 'none') {
      fetch('/api/book-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData, payload, utm: getUtmParams() }),
      }).catch(() => {});
    }
  };

  return (
    <Modal open={open} onClose={onClose} title={step === 1 ? 'Book a Free Consultation' : step === 2 ? 'Select a Time' : 'Booking Confirmed'}>
      {/* Focus trap wrapper */}
      <div
        ref={modalRef}
        onKeyDown={(e) => {
          if (e.key !== 'Tab') return;
          const nodeList = modalRef.current?.querySelectorAll<HTMLElement>(focusableSelector);
          if (!nodeList || !nodeList.length) return;
          const list: HTMLElement[] = Array.from(nodeList);
          const firstEl = list[0];
          const lastEl = list[list.length - 1];
          if (e.shiftKey && document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          } else if (!e.shiftKey && document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }}
      >
      {step === 1 && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input ref={firstFieldRef as any} id="name" name="name" label="Full Name *" value={formData.name} onChange={handleChange} error={errors.name} />
            <Input id="email" name="email" type="email" label="Work Email *" value={formData.email} onChange={handleChange} error={errors.email} />
          </div>
          <Input id="company" name="company" label="Company *" value={formData.company} onChange={handleChange} error={errors.company} />
          <Input id="phone" name="phone" type="tel" label="Phone (optional)" value={formData.phone} onChange={handleChange} />
          <Select id="goal" name="goal" label="Primary Goal *" value={formData.goal} onChange={handleChange} error={errors.goal}>
            <option value="">Select your primary goal</option>
            <option>AI Consultancy</option>
            <option>Automation</option>
            <option>LLM Chatbots</option>
            <option>Workflow Automation</option>
            <option>Other</option>
          </Select>
          <Textarea id="message" name="message" label="Tell us about your project *" value={formData.message} onChange={handleChange} error={errors.message} rows={5} />
          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleChange} className="mt-1" />
            <span>I agree to be contacted about my inquiry</span>
          </label>
          {errors.consent && <p className="text-red-600 text-sm" role="alert">{errors.consent}</p>}
          <div className="flex justify-end gap-3 pt-2">
            <Button variant="outline" onClick={() => { track('booking.cancel', { step: 1 }); onClose(); }}>Cancel</Button>
            <Button onClick={() => {
              const ok = validate();
              track('booking.form.submit', { valid: ok });
              if (ok) { setStep(2); track('booking.step.view', { step: 2 }); }
            }}>Continue to Calendar</Button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="space-y-4">
          {!calendlyUrl ? (
            <div className="bg-yellow-50 text-yellow-800 border border-yellow-200 rounded-lg p-4">
              Missing VITE_CALENDLY_URL. You can still contact us by email.
            </div>
          ) : (
            <CalendarEmbedCalendly url={calendlyUrl} prefill={getCalendlyPrefill()} utm={getUtmParams()} onBooked={onBooked} />
          )}
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => { setStep(1); track('booking.step.view', { step: 1, from: 2 }); }}>Back</Button>
            <a href={getMailtoUrl()} onClick={() => track('booking.mailto.fallback', { step: 2 })} className="text-red-500 hover:underline">Prefer email?</a>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="text-center">
          <div className="mx-auto mb-3 w-14 h-14 rounded-full bg-green-100 grid place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Booking Confirmed!</h3>
          <p className="text-black/70 mb-4">We’ve sent you a confirmation. Add it to your calendar below.</p>
          <div className="flex justify-center gap-3">
            <Button onClick={() => { track('booking.close.confirmation'); onClose(); }}>Back to site</Button>
            <a href={getMailtoUrl()} onClick={() => track('booking.mailto.fromConfirmation')} className="inline-flex items-center px-4 py-3 border-2 border-red-500 text-red-500 rounded-lg">Contact via email</a>
          </div>
        </div>
      )}
  </div>
    </Modal>
  );
}
