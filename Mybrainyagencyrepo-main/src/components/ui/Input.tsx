import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & { label?: string; hint?: string; error?: string };

const Input = React.forwardRef<HTMLInputElement, Props>(({ id, label, hint, error, className = '', ...rest }, ref) => {
  const input = (
    <input
      id={id}
  ref={ref}
      className={`w-full h-11 px-4 bg-gray-100 border ${error ? 'border-red-500' : 'border-red-500/30'} rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors ${className}`}
      aria-invalid={!!error}
      aria-describedby={hint ? `${id}-hint` : undefined}
      {...rest}
    />
  );
  if (!label) return input;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      {input}
      {hint && <p id={`${id}-hint`} className="mt-1 text-xs text-gray-500">{hint}</p>}
      {error && <p className="mt-1 text-xs text-red-600" role="alert">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
