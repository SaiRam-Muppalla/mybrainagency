import { useState } from 'react';
import Button from '../ui/Button';
import BookingModal from './BookingModal';

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
  return (
    <>
      <Button variant={variant} className={className} onClick={() => setOpen(true)}>{children}</Button>
      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
