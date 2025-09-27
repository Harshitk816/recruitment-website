"use client";
import React from "react";
import { motion } from "framer-motion";

interface ImagePlaceholderProps {
  width?: string;
  height?: string;
  text?: string;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  width = "w-full",
  height = "h-64",
  text = "Professional Team Photo",
  className = "",
}) => {
  return (
    <div
      className={`${width} ${height} ${className} relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center`}
    >
      {/* Shimmer effect */}
      <motion.div
        animate={{
          x: [-100, 100],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-12"
      />

      {/* Content */}
      <div className="text-center z-10">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-gray-500 text-sm font-medium">{text}</p>
        <p className="text-gray-400 text-xs mt-1">Image coming soon</p>
      </div>
    </div>
  );
};
