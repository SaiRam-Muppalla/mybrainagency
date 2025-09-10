import React from 'react';

type Variant = 'primary' | 'outline' | 'ghost';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant };

const base = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-50 disabled:cursor-not-allowed';
const variants: Record<Variant, string> = {
  primary: 'bg-red-500 text-white hover:bg-white hover:text-red-500 hover:border hover:border-red-500 shadow-md px-6 py-3',
  outline: 'border-2 border-red-500 text-red-500 hover:bg-red-500/10 px-6 py-3',
  ghost: 'text-red-500 hover:bg-red-500/10 px-4 py-2',
};

const Button: React.FC<Props> = ({ className = '', variant = 'primary', children, ...rest }) => (
  <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
    {children}
  </button>
);

export default Button;
