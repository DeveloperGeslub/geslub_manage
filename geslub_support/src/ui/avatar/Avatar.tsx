import React, { FC, ReactNode } from "react";

interface AvatarProps {
  children: ReactNode; 
  className?: string;
}

const Avatar: FC<AvatarProps> = ({ children, className }) => {
  return (
    <div className={`relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 ${className || ""}`}>
      {children}
    </div>
  );
};

export default Avatar;
