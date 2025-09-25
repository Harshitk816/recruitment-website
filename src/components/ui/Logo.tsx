'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  size?: 'xxs'|'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  className = ''
}) => {
  const dimensions = {
    xxs: { width: 60, height: 16 },
    xs: { width: 80, height: 18 },
    sm: { width: 100, height: 28 },
    md: { width: 140, height: 38 },
    lg: { width: 180, height: 48 },
    xl: { width: 240, height: 64 }
  };

  const { width, height } = dimensions[size];

  return (
    <Link 
      href="/" 
      className={`flex items-center transition-opacity hover:opacity-80 ${className}`}
    >
      <Image
        src="/images/logo/workeraa.png"
        alt="Workeraa - Premium Recruitment Solutions"
        width={width}
        height={height}
        priority
        className="object-contain"
      />
    </Link>
  );
};
