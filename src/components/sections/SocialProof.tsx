"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiZap,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import type { IconType } from "react-icons";

interface Stat {
  icon: IconType;
  value: string;
  label: string;
  color: string;
  bg: string;
}

const stats: Stat[] = [
  {
    icon: FiCheckCircle,
    value: "500+",
    label: "Successful Placements",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: FiZap,
    value: "2X",
    label: "Faster Hiring Process",
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
  {
    icon: FiStar,
    value: "95%",
    label: "Client Satisfaction Rate",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: FiUsers,
    value: "200+",
    label: "Startups & Enterprises",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

interface SocialProofProps {
  className?: string;
}

export const SocialProof: React.FC<SocialProofProps> = ({ className = "" }) => {
  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-4">
            <div
              className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center shadow-md`}
            >
              <stat.icon className={`text-2xl ${stat.color}`} />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-gray-500">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};