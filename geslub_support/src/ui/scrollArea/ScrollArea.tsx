import React, { FC } from 'react';

interface ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollArea: FC<ScrollAreaProps> = ({ children, className }) => {
  return (
    <div className={`overflow-y-auto ${className}`} style={{ maxHeight: '400px' }}>
      {children}
    </div>
  );
};

export default ScrollArea;