import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

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
  useCalendlyEventListener({
    onEventScheduled: (e) => onBooked?.(e.data?.payload),
  });

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

  return (
    <div className={`rounded-2xl overflow-hidden relative ${className}`}>
      <InlineWidget
        url={url}
        styles={{ height: '720px' }}
        // react-calendly types are broader; cast via unknown to satisfy lint without using any
        prefill={normalizedPrefill as unknown as {
          name?: string;
          email?: string;
          guests?: string[];
          customAnswers?: Partial<Record<'a1'|'a2'|'a3'|'a4'|'a5'|'a6'|'a7'|'a8'|'a9'|'a10', string>>;
        }}
        utm={utm}
      />
    </div>
  );
}

export default CalendarEmbedCalendly;
