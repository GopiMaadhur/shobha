import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "text";
}

export default function Button({
  children,
  className = "",
  type = "button",
  variant = "primary",
  href,
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

  const classes = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}