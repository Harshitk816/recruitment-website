"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "light";
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = "md", 
  variant = "default",
  className = "" 
}) => {
  const dimensions = {
    xxs: { width: 60, height: 16 },
    xs: { width: 80, height: 18 },
    sm: { width: 100, height: 28 },
    md: { width: 140, height: 38 },
    lg: { width: 180, height: 48 },
    xl: { width: 240, height: 64 },
  };

  const { width, height } = dimensions[size];

  // Dynamic logo source based on variant
  const logoSrc = variant === "light" 
    ? "/images/logo/workeraa-light.png" 
    : "/images/logo/workeraa.png";

  // Dynamic alt text
  const altText = variant === "light"
    ? "Workeraa - Premium Recruitment Solutions (Light)"
    : "Workeraa - Premium Recruitment Solutions";

  return (
    <Link
      href="/"
      className={`flex items-center transition-opacity hover:opacity-80 ${className}`}
    >
      <Image
        src={logoSrc}
        alt={altText}
        width={width}
        height={height}
        priority
        className="object-contain bg-transparent"
        style={{ width: "auto", height: "auto" }}
        
      />
    </Link>
  );
};
