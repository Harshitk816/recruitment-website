"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  isLoading,
  onLoadingComplete,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(onLoadingComplete, 500); // Wait a bit before hiding
            return 100;
          }
          return prev + Math.random() * 15 + 5; // Random progress increment
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isLoading, onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
        >
          <div className="flex flex-col items-center space-y-8">
            {/* Logo Animation - UPDATED: Gentle Pop Animation */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="relative"
            >
              {/* Gentle Pulsing Background Circle */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.1, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-xl"
              />

              {/* Logo Container - UPDATED: No Rotation, Gentle Bounce */}
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-gray-100"
              >
                <Image
                  src="/images/logo/workeraa.png"
                  alt="Workeraa"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Company Name - UPDATED: Gentle Fade Up */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="text-center"
            >
              <motion.h1
                animate={{
                  scale: [1, 1.01, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"
              >
                Workeraa
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-gray-500 text-sm mt-2"
              >
                Where Talent Meets Tomorrow
              </motion.p>
            </motion.div>

            {/* Progress Bar - UPDATED: Smooth Animation */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 256, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full shadow-sm"
              />
            </motion.div>

            {/* Loading Text - UPDATED: Gentle Pulse */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-center"
            >
              <motion.p
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-gray-600 text-sm"
              >
                Loading your experience...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
