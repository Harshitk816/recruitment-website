'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';

interface WhatsAppWidgetProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  phoneNumber = "918700192565",
  defaultMessage = "Hi! I'm interested in your recruitment services."
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(defaultMessage);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  // FIXED: Handle send message with proper timing
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp first
    const whatsappWindow = window.open(whatsappUrl, '_blank');
    
    // Only close widget if WhatsApp opened successfully
    if (whatsappWindow) {
      // Add a small delay to ensure the window opens
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
    } else {
      // Fallback: try direct navigation if popup blocked
      window.location.href = whatsappUrl;
    }
  };

  const selectQuickMessage = (selectedMessage: string) => {
    setMessage(selectedMessage);
  };

  const quickMessages = [
    "I need help with recruitment services",
    "I want to hire IT professionals",
    "I'm looking for job opportunities", 
    "I need executive search services"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleWidget}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: 90 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <FiX className="text-2xl" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: -90 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <FiMessageCircle className="text-2xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pulse Animation when closed */}
      {!isOpen && (
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-green-400 rounded-full -z-10"
        />
      )}

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-20 right-0 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-green-500 text-white p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <FiMessageCircle className="text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold">Workeraa Support</h3>
                  <p className="text-sm opacity-90">Typically replies instantly</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 max-h-80 overflow-y-auto">
              {/* Welcome Message */}
              <div className="mb-4">
                <div className="bg-gray-100 p-3 rounded-xl rounded-bl-sm max-w-xs">
                  <p className="text-sm text-gray-800">
                    Hi there! 👋 Thanks for visiting Workeraa. How can we help you today?
                  </p>
                </div>
              </div>

              {/* Quick Messages */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-3 font-medium">Quick messages:</p>
                <div className="space-y-2">
                  {quickMessages.map((msg, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => selectQuickMessage(msg)}
                      className="block w-full text-left p-3 text-sm bg-blue-50 hover:bg-blue-100 rounded-lg transition-all text-blue-700 border border-blue-100 hover:border-blue-200"
                    >
                      {msg}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-3">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full p-3 border border-gray-300 text-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  rows={3}
                />
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all font-medium shadow-sm"
                >
                  <FiSend className="text-sm" />
                  <span>Send on WhatsApp</span>
                </motion.button>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
              <p className="text-xs text-gray-500">
                🔒 Secure • Powered by WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
