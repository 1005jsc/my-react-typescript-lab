import React from 'react';

type YoBeforeProps = {
  children: React.ReactNode;
  onClick: () => void;
  className: string;
};

const YoBefore = ({ children, onClick, className }: YoBeforeProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
export default YoBefore;
