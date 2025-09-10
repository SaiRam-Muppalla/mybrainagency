import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  as?: keyof JSX.IntrinsicElements;
};

const Container: React.FC<Props> = ({ as: Tag = 'div', className = '', children, ...rest }) => {
  return (
    <Tag className={`container px-4 sm:px-6 lg:px-8 ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Container;
