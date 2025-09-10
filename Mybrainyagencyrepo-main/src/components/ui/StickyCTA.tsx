import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (!dismissed && scrolled > 0.25) setVisible(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
      <div className="mx-4 mb-4 rounded-xl bg-red-600 text-white shadow-2xl shadow-red-500/40 border border-red-500/50">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="font-semibold">Book a Free Consultation</span>
          <button
            aria-label="Dismiss"
            onClick={() => setDismissed(true)}
            className="p-2 rounded-md hover:bg-red-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="px-4 pb-4">
          <Link to="/contact" className="block w-full text-center bg-white text-red-600 font-semibold py-3 rounded-lg hover:bg-red-50">
            Book now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
