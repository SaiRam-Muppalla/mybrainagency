import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<Props> = ({ className = '', children, ...rest }) => {
  return (
    <div
      className={`bg-white text-black rounded-2xl p-6 border border-red-500/10 shadow-sm ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
