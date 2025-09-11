import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import { useEffect, useState } from 'react';

type Prefill = {
  name?: string;
  email?: string;
  guests?: string[];
  customAnswers?: Partial<Record<'a1'|'a2'|'a3'|'a4'|'a5'|'a6'|'a7'|'a8'|'a9'|'a10', string>>;
};

type UTM = {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
};

export function CalendarEmbedCalendly({
  url,
  prefill,
  utm,
  onBooked,
  className = '',
}: {
  url: string;
  prefill?: Prefill;
  utm?: UTM;
  onBooked?: (payload: unknown) => void;
  className?: string;
}) {
  const [ready, setReady] = useState(false);

  useCalendlyEventListener({
    onEventScheduled: (e) => onBooked?.(e.data?.payload),
  });

  // Defer rendering one tick so modal transition feels snappier
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Normalize prefill to match react-calendly expectations
  const normalizedPrefill: Prefill | undefined = prefill
    ? {
        ...prefill,
        guests: Array.isArray(prefill.guests)
          ? prefill.guests
          : prefill.guests
          ? [prefill.guests as unknown as string]
          : undefined,
      }
    : undefined;

  return <div className={`rounded-2xl overflow-hidden relative ${className}`}>
    {!ready && (
      <div className="h-[720px] grid place-items-center bg-white">
        <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )}
    {ready && (
      <InlineWidget
        url={url}
        styles={{ height: '720px' }}
        prefill={normalizedPrefill as unknown as {
          name?: string;
          email?: string;
          guests?: string[];
          customAnswers?: Partial<Record<'a1'|'a2'|'a3'|'a4'|'a5'|'a6'|'a7'|'a8'|'a9'|'a10', string>>;
        }}
        utm={utm}
      />
    )}
  </div>;
}

export default CalendarEmbedCalendly;
