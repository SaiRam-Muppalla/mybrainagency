import { lazy, Suspense, useState } from 'react';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import { AppConfig } from '../../config/appConfig';

const CalendlyWidget = lazy(() => import('react-calendly').then(m => ({ default: m.InlineWidget })));

export default function ConsultationCTA({ label = 'Book a Free Consultation', className = '' }: { label?: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const hasCalendly = !!AppConfig.features.calendly && !!AppConfig.calendlyUrl;
  const mailto = `mailto:${AppConfig.contactToEmail}?subject=${encodeURIComponent('['+AppConfig.siteName+'] Consultation')}`;

  if (!hasCalendly) {
    return (
      <a href={mailto} className={`inline-flex items-center justify-center ${className}`}>
        <Button asChild>
          <span>{label}</span>
        </Button>
      </a>
    );
  }

  return (
    <>
      <Button className={className} onClick={() => setOpen(true)}>{label}</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Book a Free Consultation">
        <div className="rounded-2xl overflow-hidden">
          <Suspense fallback={<div className="grid place-items-center h-[720px]"><div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin" /></div>}>
            <CalendlyWidget url={AppConfig.calendlyUrl!} styles={{ height: '720px' }} />
          </Suspense>
        </div>
      </Modal>
    </>
  );
}
