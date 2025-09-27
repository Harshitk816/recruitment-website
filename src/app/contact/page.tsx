'use client';
import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';
import { WhatsAppWidget } from '@/components/sections/Whatsapp';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiBriefcase,
  FiCheckCircle,
  FiLoader
} from 'react-icons/fi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Replace this with your Google Apps Script deployment URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby2yPRVLjEbR_oTHet8XBmsofjm1IZTFWG4cOl0DkWjLnIn0PQ7IJMTfKeDzH2JvpF-/exec';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create FormData object
      const formDataObj = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
        console.log(`${key}: ${value}`); // Debug log
      });
      console.log(formDataObj.entries()); // Debug log
      // Submit to Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        body: formDataObj
      });

      // Since we're using no-cors mode, we assume success if no error is thrown
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (submitStatus === 'success') {
    return (
      <main className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiCheckCircle className="text-3xl text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-6">
              Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              We&apos;ve also sent a confirmation email to {formData.email || 'your email address'}.
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center space-x-2"
            >
              <FiMail className="text-sm" />
              <span>Send Another Message</span>
            </button>
          </motion.div>
        </Container>
        <WhatsAppWidget 
          phoneNumber="918700192565" 
          defaultMessage="Hi! I'm interested in discussing my hiring needs with Workeraa."
        />
      </main>
    );
  }

  return (
    <main className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-green-100 rounded-full text-blue-800 text-sm font-medium mb-6">
            <FiMail className="mr-2" />
            Get In Touch
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s Start a <span className="text-blue-600">Conversation</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your hiring process? We&apos;d love to discuss your specific 
            requirements and show you how Workeraa can help you find the perfect talent.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full pl-10 pr-4 py-3 border text-gray-900 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full pl-10 pr-4 py-3 border text-gray-900 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <FiBriefcase className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full pl-10 pr-4 py-3 border text-gray-900 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border text-gray-900 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                >
                  <option value="">Select a service</option>
                  <option value="executive-search">Executive Search</option>
                  <option value="permanent-hiring">Permanent Hiring</option>
                  <option value="contract-staffing">Contract Staffing</option>
                  <option value="it-recruitment">IT Recruitment</option>
                  <option value="finance-recruitment">Finance Recruitment</option>
                  <option value="sales-recruitment">Sales & Marketing</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    disabled={isSubmitting}
                    className="w-full pl-10 pr-4 py-3 border text-gray-900 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none disabled:bg-gray-100"
                    placeholder="Tell us about your hiring needs..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg flex items-center justify-center space-x-2 transition-all font-medium"
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="text-sm animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="text-sm" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600 text-sm">
                    There was an error sending your message. Please try again or contact us directly at contact@workeraa.com
                  </p>
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Info - Keep your existing code */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FiMail className="text-xl text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">connect@workeraa.co.in</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <FiPhone className="text-xl text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 8700192565, +91 9599656760</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FiMapPin className="text-xl text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Gurugram, India</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <FiClock className="text-xl text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-600 to-green-500 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Workeraa?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">2000+</div>
                  <div className="text-sm opacity-90">Successful Placements</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">400+</div>
                  <div className="text-sm opacity-90">Partner Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">97%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24h</div>
                  <div className="text-sm opacity-90">Response Time</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* WhatsApp Widget */}
      <WhatsAppWidget 
        phoneNumber="918700192565" 
        defaultMessage="Hi! I'm interested in discussing my hiring needs with Workeraa."
      />
    </main>
  );
}
