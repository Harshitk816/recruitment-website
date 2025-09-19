// Temporary Logo Component (src/components/ui/Logo.tsx)
import React from 'react';
import { FiUsers, FiTrendingUp } from 'react-icons/fi';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ 
  size = 'md' 
}) => {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl', 
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center space-x-2 ${sizes[size]} font-bold`}>
      <div className="flex items-center">
        <FiUsers className="text-blue-600 mr-1" />
        <FiTrendingUp className="text-green-500" />
      </div>
      <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
        Workeraa
      </span>
    </div>
  );
};
