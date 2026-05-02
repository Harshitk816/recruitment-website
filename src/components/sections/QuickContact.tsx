"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

interface QuickContactProps {
  phoneNumber?: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
}

export const QuickContact: React.FC<QuickContactProps> = ({
  phoneNumber = "+918700192565",
  whatsappNumber = "918700192565",
  whatsappMessage = "Hi! I visited the Workeraa website and would like to connect.",
}) => {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 pr-0">

      {/* WhatsApp */}
      <motion.button
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.93 }}
        onClick={handleWhatsApp}
        aria-label="Chat on WhatsApp"
        className="w-11 h-11 bg-[#25D366] hover:bg-[#1ebe5d] text-white flex items-center justify-center shadow-md transition-colors rounded-l-xl"
      >
        <BsWhatsapp className="text-lg" />
      </motion.button>

      {/* Call */}
      <motion.button
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.93 }}
        onClick={handleCall}
        aria-label="Call us"
        className="w-11 h-11 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-md transition-colors rounded-l-xl"
      >
        <FiPhone className="text-lg" />
      </motion.button>

    </div>
  );
};