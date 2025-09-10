import React from 'react';

type Props = {
  label: string;
};

const MetricChip: React.FC<Props> = ({ label }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 text-sm font-medium">
      {label}
    </span>
  );
};

export default MetricChip;
