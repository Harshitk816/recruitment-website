"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FiArrowRight, FiHome } from "react-icons/fi";

interface ThankYouPageProps {
  heading?        : string;
  subtext?        : string;
  whatsappNumber? : string;
  whatsappMessage?: string;
  backHref?       : string;
  backLabel?      : string;
}

const CheckmarkIcon = () => (
  <svg viewBox="0 0 72 72" fill="none" className="w-14 h-14" aria-hidden="true">
    <motion.circle
      cx="36" cy="36" r="30"
      stroke="white" strokeWidth="4"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
    <motion.path
      d="M22 37.5L31 46L50 27"
      stroke="white" strokeWidth="4.5"
      strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
    />
  </svg>
);

export const ThankYouPage: React.FC<ThankYouPageProps> = ({
  heading         = "We've received your enquiry.",
  subtext         = "Our team will get back to you within 1–2 business days.",
  whatsappNumber  = "918700192565",
  whatsappMessage = "Hi! I just submitted an enquiry on the Workeraa website.",
  backHref        = "/",
  backLabel       = "Back to Home",
}) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          {/* Blue top section */}
          <div className="bg-blue-600 px-8 py-10 flex flex-col items-center text-center gap-5">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.15 }}
              className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center"
            >
              <CheckmarkIcon />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.35 }}
            >
                <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug">Thank you!</h1><br></br>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                {heading}
              </h3>
              <p className="mt-2 text-blue-100 text-sm leading-relaxed max-w-xs mx-auto">
                {subtext}
              </p>
            </motion.div>
          </div>

          {/* White bottom section */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.35 }}
            className="px-8 py-7 flex flex-col gap-3"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors"
            >
              <BsWhatsapp className="text-base" />
              Chat on WhatsApp
              <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </a>

            <Link
              href={backHref}
              className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors"
            >
              <FiHome className="text-base" />
              {backLabel}
            </Link>
          </motion.div>
        </motion.div>

        {/* Subtle footer note */}
        <p className="text-center text-xs text-gray-400 mt-5">
          🔒 Secure · Workeraa
        </p>
      </div>
    </main>
  );
};

export default ThankYouPage;