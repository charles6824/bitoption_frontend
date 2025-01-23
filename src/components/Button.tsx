import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // Content inside the button
  className?: string; // Allow custom Tailwind classes
}

const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
