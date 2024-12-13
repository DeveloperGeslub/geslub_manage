import React, { FC } from "react";

interface AvatarFallbackProps {
  children: React.ReactNode;
  className?: string;
}

const AvatarFallback: FC<AvatarFallbackProps> = ({ children, className }) => {
  return (
    <div
      className={`flex items-center justify-center w-full h-full text-gray-700 font-bold ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default AvatarFallback;
