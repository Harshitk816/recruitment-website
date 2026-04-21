"use client";
import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { SupportWidget } from "@/components/sections/Whatsapp";
import { ContactForm } from "@/components/sections/ContactForm";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiZap,
  FiShield,
  FiUsers,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";

export default function ContactPage() {
  const [successEmail, setSuccessEmail] = useState<string | null>(null);

  // ── Success screen ──────────────────────────────────────────
  if (successEmail !== null) {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Your message has been sent successfully. We&apos;ll get back to
              you within 24 hours.
            </p>
            <button
              onClick={() => setSuccessEmail(null)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center space-x-2"
            >
              <FiMail className="text-sm" />
              <span>Send Another Message</span>
            </button>
          </motion.div>
        </Container>
        <SupportWidget phoneNumber="918700192565" />
      </main>
    );
  }

  // ── Main contact page ───────────────────────────────────────
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
            Let&apos;s Start a{" "}
            <span className="text-blue-600">Conversation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your hiring process? We&apos;d love to discuss
            your specific requirements and show you how Workeraa can help you
            find the perfect talent.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form Component */}
          <ContactForm onSuccess={(email) => setSuccessEmail(email)} />

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FiMail className="text-xl text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">connect@workeraa.co.in</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <FiPhone className="text-xl text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">
                      +91 8700192565, +91 9599656760
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FiMapPin className="text-xl text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Sector 23, Dwarka, Delhi</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <FiClock className="text-xl text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Business Hours
                    </h4>
                    <p className="text-gray-600">
                      Mon - Fri: 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Workeraa */}
            <div className="bg-gradient-to-br from-blue-600 to-green-500 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Workeraa?</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: <FiZap className="text-xl text-yellow-400" />,
                    label: "Speed & Quality",
                    sub: "Fast, precise hiring",
                    delay: 0.1,
                  },
                  {
                    icon: <FiShield className="text-xl text-blue-300" />,
                    label: "Expert Guidance",
                    sub: "Industry specialists",
                    delay: 0.2,
                  },
                  {
                    icon: <FiUsers className="text-xl text-green-300" />,
                    label: "Trusted Partner",
                    sub: "Long-term relationships",
                    delay: 0.3,
                  },
                  {
                    icon: <FiAward className="text-xl text-orange-300" />,
                    label: "Proven Results",
                    sub: "500+ placements",
                    delay: 0.4,
                  },
                ].map(({ icon, label, sub, delay }) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-3">
                      {icon}
                    </div>
                    <div className="text-lg font-semibold">{label}</div>
                    <div className="text-sm opacity-90 mt-1">{sub}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Find Us on Google
            </h2>
            <p className="text-gray-600">
              Visit our office or connect with us on Google Maps
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2249026738077!2d77.0519599755498!3d28.563008487234328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4c519e25c9a94857%3A0x9aa77d563abc52c6!2sWorkeraa!5e0!3m2!1sen!2sin!4v1775904492245!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Workeraa Office Location"
            />
          </div>
        </motion.div>
      </Container>

      <SupportWidget phoneNumber="918700192565" />
    </main>
  );
}