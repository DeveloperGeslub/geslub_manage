import React, { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white shadow rounded-lg p-4 ${className || ""}`}>
      {children}
    </div>
  );
};

export default Card;