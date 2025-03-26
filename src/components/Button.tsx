
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "gradient" | "accent";
  size?: "sm" | "default" | "lg";
  children: React.ReactNode;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  children,
  className,
  fullWidth,
  icon,
  iconPosition = "left",
  ...props
}) => {
  const variants = {
    default: "bg-solana-purple text-white hover:bg-solana-darkpurple shadow-button",
    outline: "border border-solana-purple text-solana-purple hover:bg-solana-purple/10",
    ghost: "text-solana-purple hover:bg-solana-purple/10",
    link: "text-solana-purple hover:underline underline-offset-4",
    gradient: "bg-gradient-to-r from-solana-purple to-solana-green text-white hover:opacity-90 shadow-button",
    accent: "bg-solana-green text-white hover:bg-solana-darkgreen shadow-button",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    default: "px-5 py-2.5 rounded-lg",
    lg: "px-6 py-3 text-lg rounded-xl",
  };

  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-solana-purple/50 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
      {variant === "gradient" && (
        <span className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="absolute inset-0 rounded-lg animated-gradient-bg animate-gradient-rotate"></span>
        </span>
      )}
    </button>
  );
};

export default Button;
