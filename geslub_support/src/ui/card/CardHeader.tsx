import React, { FC, ReactNode } from "react";

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

const CardHeader: FC<CardHeaderProps> = ({ children, className }) => {
  return (
    <div className={`mb-4 ${className || ""}`}>
      {children}
    </div>
  );
};

export default CardHeader;
