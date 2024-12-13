import React, { FC, ReactNode } from "react";

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

const CardContent: FC<CardContentProps> = ({ children, className }) => {
  return (
    <div className={`text-gray-700 ${className || ""}`}>
      {children}
    </div>
  );
};

export default CardContent;
