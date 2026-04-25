"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface HeroContactFormProps {
  badge?: string;
  heading: React.ReactNode;       // supports <span> for colored words
  subheading: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string;  
  mobileBackgroundImage?: string;     // optional — falls back to gradient
  form: React.ReactNode;          // pass <LeadForm ... /> here
}

export const HeroContactForm: React.FC<HeroContactFormProps> = ({
  badge,
  heading,
  subheading,
  ctaLabel = "Talk to Us",
  ctaHref = "/contact",
  backgroundImage,
  mobileBackgroundImage,
  form,
}) => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">

      {/* Background */}
      {backgroundImage ? (
        <>
            {/* Desktop image */}
            <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
                mobileBackgroundImage ? "hidden md:block" : "block"
            }`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
            />

            {/* Mobile image — only renders if provided */}
            {mobileBackgroundImage && (
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
                style={{ backgroundImage: `url(${mobileBackgroundImage})` }}
            />
            )}

            <div className="absolute inset-0 bg-gray-900/70" />
        </>
        ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900" />
        )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {badge && (
              <div className="inline-flex items-center px-4 py-1.5 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium mb-6">
                {badge}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {heading}
            </h1>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-lg">
              {subheading}
            </p>

            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-semibold transition-colors"
            >
              {ctaLabel}
              <FiArrowRight />
            </Link>
          </motion.div>

          {/* RIGHT — Form (passed as prop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {form}
          </motion.div>

        </div>
      </div>
    </section>
  );
};