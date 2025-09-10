import React from 'react';

type Props = React.HTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements;
};

const Section: React.FC<Props> = ({ as: Tag = 'section', className = '', children, ...rest }) => {
  return (
    <Tag className={`section ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Section;
