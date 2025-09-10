import React from 'react';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; hint?: string; error?: string };

const Textarea: React.FC<Props> = ({ id, label, hint, error, className = '', rows = 6, ...rest }) => {
  const field = (
    <textarea
      id={id}
      rows={rows}
      className={`w-full px-4 py-3 bg-gray-100 border ${error ? 'border-red-500' : 'border-red-500/30'} rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none ${className}`}
      aria-invalid={!!error}
      aria-describedby={hint ? `${id}-hint` : undefined}
      {...rest}
    />
  );
  if (!label) return field;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      {field}
      {hint && <p id={`${id}-hint`} className="mt-1 text-xs text-gray-500">{hint}</p>}
      {error && <p className="mt-1 text-xs text-red-600" role="alert">{error}</p>}
    </div>
  );
};

export default Textarea;
