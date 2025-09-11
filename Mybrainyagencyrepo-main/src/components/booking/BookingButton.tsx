import { useCallback, useState } from 'react';
import Button from '../ui/Button';
import BookingModal from './BookingModal';
import { track } from '../../utils/analytics';

export default function BookingButton({
  children = 'Book a Free Consultation',
  variant,
  className,
}: {
  children?: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => {
    track('cta.click', { location: 'booking-button', text: typeof children === 'string' ? children : undefined });
    setOpen(true);
  }, [children]);

  const closeModal = useCallback(() => setOpen(false), []);

  return <>
    <Button variant={variant} className={className} onClick={openModal}>{children}</Button>
    <BookingModal open={open} onClose={closeModal} />
  </>;
}
