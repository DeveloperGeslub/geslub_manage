import React, { FC, ReactNode } from "react";

interface BadgeProps {
  variant?: "default" | "destructive" | "secondary";
  children: ReactNode;
  className?: string; // Agregamos `className` como una propiedad opcional
}

const Badge: FC<BadgeProps> = ({ variant = "default", children, className }) => {
  const baseClasses = "px-2 py-1 rounded-full text-sm font-medium";
  const variantClasses = {
    default: "bg-gray-200 text-gray-800",
    destructive: "bg-red-500 text-white",
    secondary: "bg-gray-400 text-white",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className || ""}`}>
      {children}
    </span>
  );
};

export default Badge;
