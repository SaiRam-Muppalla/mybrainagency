// Email service configuration and utilities

export interface NewsletterSubscription {
  email: string;
  timestamp: string;
  source: string;
}

export interface ContactInquiry {
  name: string;
  email: string;
  company?: string;
  message: string;
  timestamp: string;
  source: string;
}

// Email service providers configuration
export const EMAIL_SERVICES = {
  // Option 1: Formspree (Recommended - Easy setup)
  FORMSPREE: {
    newsletter: 'https://formspree.io/f/xvgbqbqy',
    contact: 'https://formspree.io/f/movnlnlk'
  },
  
  // Option 2: EmailJS (Client-side only)
  EMAILJS: {
    serviceId: 'YOUR_SERVICE_ID',
    newsletterTemplateId: 'YOUR_NEWSLETTER_TEMPLATE_ID',
    contactTemplateId: 'YOUR_CONTACT_TEMPLATE_ID',
    publicKey: 'YOUR_PUBLIC_KEY'
  },
  
  // Option 3: Netlify Forms (if hosting on Netlify)
  NETLIFY: {
    newsletter: '/newsletter-signup',
    contact: '/contact-form'
  }
};

// Utility function to send emails via different services
export const sendEmail = async (
  type: 'newsletter' | 'contact',
  data: NewsletterSubscription | ContactInquiry,
  service: 'formspree' | 'emailjs' | 'netlify' = 'formspree'
) => {
  switch (service) {
    case 'formspree':
      return sendViaFormspree(type, data);
    case 'emailjs':
      return sendViaEmailJS(type, data);
    case 'netlify':
      return sendViaNetlify(type, data);
    default:
      throw new Error('Unsupported email service');
  }
};

const sendViaFormspree = async (
  type: 'newsletter' | 'contact',
  data: NewsletterSubscription | ContactInquiry
) => {
  const endpoint = type === 'newsletter' 
    ? EMAIL_SERVICES.FORMSPREE.newsletter 
    : EMAIL_SERVICES.FORMSPREE.contact;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to send ${type} via Formspree`);
  }

  return response.json();
};

const sendViaEmailJS = async (
  type: 'newsletter' | 'contact',
  data: NewsletterSubscription | ContactInquiry
) => {
  // EmailJS implementation would go here
  // Requires emailjs-com package
  throw new Error('EmailJS implementation needed');
};

const sendViaNetlify = async (
  type: 'newsletter' | 'contact',
  data: NewsletterSubscription | ContactInquiry
) => {
  const endpoint = type === 'newsletter' 
    ? EMAIL_SERVICES.NETLIFY.newsletter 
    : EMAIL_SERVICES.NETLIFY.contact;

  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const response = await fetch(endpoint, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Failed to send ${type} via Netlify`);
  }

  return response;
};