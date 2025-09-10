import { useMemo, useState } from 'react';
import { z } from 'zod';

const bookingFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid work email is required'),
  company: z.string().min(1, 'Company is required'),
  phone: z.string().optional(),
  goal: z.string().min(1, 'Please select a goal'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
  timezone: z.string(),
  consent: z.boolean().refine((v) => v === true, { message: 'You must consent to contact' }),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;

export default function useBookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    goal: '',
    message: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    consent: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});

  const utm = useMemo(() => {
    if (typeof window === 'undefined') return {} as Record<string, string>;
    const p = new URLSearchParams(window.location.search);
    const obj: Record<string, string> = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((k) => {
      const v = p.get(k);
      if (v) obj[k] = v;
    });
    return obj;
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value } as BookingFormData));
    if (errors[name as keyof BookingFormData]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const res = bookingFormSchema.safeParse(formData);
    if (!res.success) {
      const map: Partial<Record<keyof BookingFormData, string>> = {};
      res.error.issues.forEach((i) => {
        const k = i.path[0] as keyof BookingFormData;
        map[k] = i.message;
      });
      setErrors(map);
    } else {
      setErrors({});
    }
    return res.success;
  };

  const getCalendlyPrefill = () => ({
    name: formData.name,
    email: formData.email,
    guests: [],
    customAnswers: {
      a1: formData.company,
      a2: formData.goal,
      a3: formData.message,
      a4: formData.phone || 'N/A',
      a5: formData.timezone,
    },
  });

  const getUtmParams = () => ({
    utmSource: utm.utm_source || 'website',
    utmMedium: utm.utm_medium || 'booking',
    utmCampaign: utm.utm_campaign || '',
    utmTerm: utm.utm_term || '',
    utmContent: utm.utm_content || '',
  });

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Consultation request — ${formData.name} (${formData.company})`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone || 'N/A'}\nGoal: ${formData.goal}\nTimezone: ${formData.timezone}\n\nMessage:\n${formData.message}\n`
    );
    const agency = import.meta.env.VITE_AGENCY_EMAIL || 'inbox@thebrainy.agency';
    return `mailto:${agency}?subject=${subject}&body=${body}&cc=${formData.email}`;
  };

  return { formData, errors, handleChange, validate, getCalendlyPrefill, getUtmParams, getMailtoUrl };
}
