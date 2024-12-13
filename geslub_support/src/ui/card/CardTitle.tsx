import React, { FC, ReactNode } from "react";

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

const CardTitle: FC<CardTitleProps> = ({ children, className }) => {
  return (
    <h2 className={`text-lg font-semibold text-gray-800 ${className || ""}`}>
      {children}
    </h2>
  );
};

export default CardTitle;
