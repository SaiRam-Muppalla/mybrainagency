import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

interface NewsletterFormProps {
  className?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ className = "" }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Option 1: Using Formspree (recommended)
      const response = await fetch('https://formspree.io/f/xvgbqbqy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          type: 'newsletter_subscription',
          source: 'The Brainy Agency Website'
        }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Successfully subscribed! Check your email for confirmation.');
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
  } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <div className={className}>
      {status === 'success' ? (
        <div className="text-center py-4">
          <CheckCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
          <p className="text-white font-medium">{message}</p>
        </div>
      ) : status === 'error' ? (
        <div className="text-center py-4">
          <AlertCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
          <p className="text-white font-medium">{message}</p>
          <button 
            onClick={() => setStatus('idle')}
            className="text-red-400 underline mt-2"
          >
            Try again
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'loading'}
            className="flex-1 px-4 py-2 bg-gray-800 border border-red-500/30 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-red-500 text-white px-6 py-2 rounded-r-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all disabled:opacity-50 flex items-center"
          >
            {status === 'loading' ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <Mail className="h-4 w-4 mr-1" />
                Subscribe
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;