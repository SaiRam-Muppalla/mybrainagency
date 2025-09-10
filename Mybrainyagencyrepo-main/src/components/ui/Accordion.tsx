import { useState } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import { ChevronDown } from 'lucide-react';

type Item = { question: string; answer: ReactNode };

const AccordionItem: React.FC<{ item: Item } & HTMLAttributes<HTMLDivElement>> = ({ item, ...rest }) => {
  const [open, setOpen] = useState(false);
  return (
    <div {...rest}>
      <button
        className="w-full flex items-center justify-between text-left py-3"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-medium">{item.question}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-200 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden text-white/80 text-sm leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

const Accordion: React.FC<{ items: Item[] } & HTMLAttributes<HTMLDivElement>> = ({ items, className = '' }) => {
  return (
    <div className={`divide-y divide-white/10 ${className}`}>
      {items.map((item, i) => (
  <AccordionItem key={i} item={item} className="py-2" />
      ))}
    </div>
  );
};

export default Accordion;
