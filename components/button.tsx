import Link from "next/link";
import React from "react";

interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  target,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-[#472F26] text-[#FEF0B6] font-semibold hover:bg-[#472F26] hover:shadow-[0_0_20px_rgba(187,211,224,0.35)] shadow-xs",
    secondary:
      "bg-transparent border border-[#BBD3E0] text-[#472F26] hover:bg-[#472F26]/10 hover:shadow-[0_0_15px_rgba(187,211,224,0.2)] shadow-xs",
    outline:
      "bg-transparent border border-[#BBD3E0] text-[#472F26] hover:bg-[#BBD3E0] hover:text-[#472F26] hover:shadow-[0_0_15px_rgba(187,211,224,0.25)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // External links
  if (href && (target === "_blank" || href.startsWith("http") || href.startsWith("mailto:"))) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Internal links
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // Button
  return (
    <button
      type="button"
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
