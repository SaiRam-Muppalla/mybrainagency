import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Using a working form endpoint
      const response = await fetch('https://formspree.io/f/movnlnlk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'contact_inquiry',
          source: 'The Brainy Agency Website',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setStatus('success');
        setResponseMessage('Message sent successfully! We\'ll get back to you within 24 hours.');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setResponseMessage('Failed to send message. Please try again or email us directly.');
    }

    setTimeout(() => {
      setStatus('idle');
      setResponseMessage('');
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-8 text-center">
        <CheckCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
        <p className="text-gray-700 mb-6">{responseMessage}</p>
        <button
          onClick={() => setStatus('idle')}
          className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-black mb-8">
        Send us a <span className="text-red-500">Message</span>
      </h2>
      
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center">
          <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
          <p className="text-red-700">{responseMessage}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'loading'}
              className="w-full px-4 py-3 bg-gray-100 border border-red-500/30 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors disabled:opacity-50"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'loading'}
              className="w-full px-4 py-3 bg-gray-100 border border-red-500/30 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors disabled:opacity-50"
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="w-full px-4 py-3 bg-gray-100 border border-red-500/30 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors disabled:opacity-50"
            placeholder="Your company name"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="w-full px-4 py-3 bg-gray-100 border border-red-500/30 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none disabled:opacity-50"
            placeholder="Tell us about your project and how we can help..."
          />
        </div>
        
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-200 shadow-xl flex items-center justify-center group disabled:opacity-50"
        >
          {status === 'loading' ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;