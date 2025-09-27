'use client';
import React, { useState, useEffect } from 'react';
import { LoadingScreen } from '../ui/LoadingScreen';

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Handle initial page load
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsFirstLoad(false);
      }, 2500); // 2.5 seconds for initial load

      return () => clearTimeout(timer);
    }
  }, [isFirstLoad]);

  useEffect(() => {
    // Handle page refreshes and navigation
    const handleBeforeUnload = () => {
      setIsLoading(true);
    };

    const handleLoad = () => {
      if (!isFirstLoad) {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1500); // Shorter for subsequent loads
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('load', handleLoad);
    };
  }, [isFirstLoad]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <LoadingScreen 
        isLoading={isLoading} 
        onLoadingComplete={handleLoadingComplete}
      />
      {!isLoading && children}
    </>
  );
};
