import React, { FC, ReactNode } from "react";

interface ButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "icon"; // Agregar "icon" como una opción válida
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ variant = "default", size = "md", onClick, className, children }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded focus:outline-none";
  const variantClasses = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-700 hover:bg-gray-100",
  };
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    icon: "p-2", // Tamaño específico para botones de icono
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
