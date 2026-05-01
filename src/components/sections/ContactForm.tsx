"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FiUser, FiMail, FiBriefcase, FiMessageSquare,
  FiSend, FiLoader, FiMapPin,
} from "react-icons/fi";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyEJIGob7dQAlPv2Gdf0HjeZdJIDS0VYsoNDK82uBAHYmyD-19cdw8xmUTZTYmPgz8Dyg/exec";

export type ContactFormStatus = "idle" | "error";

interface ContactFormProps {
  onSuccess?: (email: string) => void;
  defaultService?: string;
  title?: string;
  className?: string;
}

const SERVICES = [
  { value: "executive-search",         label: "Executive Search" },
  { value: "permanent-hiring",          label: "Permanent Hiring" },
  { value: "contract-staffing",         label: "Contract Staffing" },
  { value: "temporary-staffing",        label: "Temporary Staffing" },
  { value: "it-recruitment",            label: "IT & Technology Recruitment" },
  { value: "finance-recruitment",       label: "Finance & Accounting Recruitment" },
  { value: "sales-recruitment",         label: "Sales & Marketing Recruitment" },
  { value: "healthcare-recruitment",    label: "Healthcare & Pharma Recruitment" },
  { value: "manufacturing-recruitment", label: "Manufacturing & Operations" },
  { value: "retail-recruitment",        label: "Retail & E-Commerce" },
  { value: "logistics-recruitment",     label: "Logistics & Supply Chain" },
  { value: "bpo-recruitment",           label: "BPO & Customer Support" },
  { value: "saas-recruitment",          label: "SaaS & Cybersecurity" },
];

const LOCATION_OPTIONS = ["Delhi", "Noida", "Gurugram", "Others"];

export const ContactForm: React.FC<ContactFormProps> = ({
  onSuccess,
  defaultService = "",
  title = "Send Us a Message",
  className = "",
}) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name:    "",
    email:   "",
    company: "",
    service: defaultService,
    message: "",
  });
  const [locationSelect, setLocationSelect] = useState("");
  const [customLocation, setCustomLocation] = useState("");
  const [isSubmitting, setIsSubmitting]     = useState(false);
  const [submitStatus, setSubmitStatus]     = useState<ContactFormStatus>("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const resolvedLocation =
      locationSelect === "Others" ? customLocation.trim() : locationSelect;

    try {
      const body = new FormData();
      Object.entries(formData).forEach(([k, v]) => body.append(k, v));
      body.append("source_url", window.location.href);
      body.append("location", resolvedLocation);

      await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", body });

      onSuccess?.(formData.email);


    } catch {
      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className={`bg-white p-8 rounded-2xl shadow-xl border border-gray-100 ${className}`}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <div className="relative">
            <FiUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text" name="name" value={formData.name}
              onChange={handleInputChange} required disabled={isSubmitting}
              placeholder="Your full name"
              className="w-full pl-10 pr-4 py-3 border text-gray-900 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email" name="email" value={formData.email}
              onChange={handleInputChange} required disabled={isSubmitting}
              placeholder="your@email.com"
              className="w-full pl-10 pr-4 py-3 border text-gray-900 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
          <div className="relative">
            <FiBriefcase className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text" name="company" value={formData.company}
              onChange={handleInputChange} required disabled={isSubmitting}
              placeholder="Your company name"
              className="w-full pl-10 pr-4 py-3 border text-gray-900 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In *</label>
          <select
            name="service" value={formData.service}
            onChange={handleInputChange} required disabled={isSubmitting}
            className="w-full px-4 py-3 border text-gray-900 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
          <div className="relative">
            <FiMapPin className="absolute left-3 top-3 text-gray-400 pointer-events-none z-10" />
            <select
              required disabled={isSubmitting}
              value={locationSelect}
              onChange={(e) => {
                setLocationSelect(e.target.value);
                if (e.target.value !== "Others") setCustomLocation("");
              }}
              className="w-full pl-10 pr-4 py-3 border text-gray-900 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            >
              <option value="" disabled>Select your location</option>
              {LOCATION_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Custom location */}
        {locationSelect === "Others" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Enter Location *</label>
            <div className="relative">
              <FiMapPin className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text" placeholder="Enter your city / location"
                required disabled={isSubmitting}
                value={customLocation}
                onChange={(e) => setCustomLocation(e.target.value)}
                autoFocus
                className="w-full pl-10 pr-4 py-3 border text-gray-900 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>
          </div>
        )}

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
            <textarea
              name="message" value={formData.message}
              onChange={handleInputChange} rows={5} disabled={isSubmitting}
              placeholder="Tell us about your hiring needs..."
              className="w-full pl-10 pr-4 py-3 border text-gray-900 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none disabled:bg-gray-100"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit" disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all font-medium"
        >
          {isSubmitting ? (
            <><FiLoader className="text-sm animate-spin" /><span>Sending...</span></>
          ) : (
            <><FiSend className="text-sm" /><span>Send Message</span></>
          )}
        </button>

        {/* Error only — success is handled by redirect */}
        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600 text-sm">
              Something went wrong. Please try again or email us at{" "}
              <a href="mailto:connect@workeraa.co.in" className="underline hover:text-red-800">
                connect@workeraa.co.in
              </a>
            </p>
          </div>
        )}

      </form>
    </motion.div>
  );
};