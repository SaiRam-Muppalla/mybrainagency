import type { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'div'>;

const Container = ({ className = '', children, ...rest }: Props) => {
  return (
    <div className={`container px-4 sm:px-6 lg:px-8 ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;
