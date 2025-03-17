import React, { ButtonHTMLAttributes, ReactNode } from "react";
import "../button/styles.css";

type ButtonVariants = "primary" | "ghost" | "icon" | "timeframe";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: ButtonVariants;
  icon?: ReactNode;
  className: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  icon,
  className,
  ...props
}) => {
  const baseButton = "button";
  const variantButton = `button-${variant}`;

  const isTextFirstVariant = variant === "primary" || variant === "timeframe";

  return (
    <button
      className={`${baseButton} ${variantButton} ${className || ""}`}
      {...props}
    >
      {isTextFirstVariant ? (
        <>
          {children}
          {icon && <span>{icon}</span>}
        </>
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
