import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "text";
}

export default function Button({
  children,
  className = "",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {

  const baseStyles =
    "px-6 py-3 rounded-md transition-all duration-300 shadow-lg";

  const variants = {
    primary:
      "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover1)] tracking-widest text-white",

    text:
      "text-white hover:text-orange-600 bg-transparent tracking-widest shadow-none",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}