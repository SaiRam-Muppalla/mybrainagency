import type { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'section'>;

const Section = ({ className = '', children, ...rest }: Props) => {
  return (
    <section className={`section ${className}`} {...rest}>
      {children}
    </section>
  );
};

export default Section;
