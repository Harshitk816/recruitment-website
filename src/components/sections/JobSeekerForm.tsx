"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiSend,
  FiLoader,
  FiCheckCircle,
} from "react-icons/fi";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz5mlNrtrDeIA2llHoyaTOpQ0HlWHfyOLyO0lAiXRmshAl7kfRkbxNDaBui9LgtwkFS/exec";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      const body = new FormData();
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("phone", formData.phone);
      body.append("service", formData.role);
      body.append("message", "Job Seeker Enquiry");
      body.append("source_url", window.location.href);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body,
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", role: "" });
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-10"
      >
        <div className="w-16 h-16 bg-green-500/20 border border-green-400/30 rounded-full flex items-center justify-center mb-4">
          <FiCheckCircle className="text-3xl text-green-400" />
        </div>
        <h3 className="text-white text-xl font-bold mb-2">
          We&apos;ve got your details!
        </h3>
        <p className="text-gray-300 text-sm max-w-xs">
          Our team will reach out within 24 hours with matching opportunities.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-blue-300 hover:underline"
        >
          Submit another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <FiUser className="absolute left-3 top-3.5 text-gray-300 text-sm" />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          placeholder="Your full name *"
          className="w-full pl-9 pr-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 transition-all"
        />
      </div>

      <div className="relative">
        <FiMail className="absolute left-3 top-3.5 text-gray-300 text-sm" />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          placeholder="Your email address *"
          className="w-full pl-9 pr-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 transition-all"
        />
      </div>

      <div className="relative">
        <FiPhone className="absolute left-3 top-3.5 text-gray-300 text-sm" />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          placeholder="Phone number *"
          className="w-full pl-9 pr-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 transition-all"
        />
      </div>

      <div className="relative">
        <FiBriefcase className="absolute left-3 top-3.5 text-gray-300 text-sm" />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="w-full pl-9 pr-4 py-3 bg-white/10 border border-white/20 text-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 transition-all appearance-none"
        >
          <option value="" disabled className="bg-gray-900">
            Role you&apos;re looking for *
          </option>
          <option value="IT & Technology" className="bg-gray-900">
            IT & Technology
          </option>
          <option value="Finance & Accounting" className="bg-gray-900">
            Finance & Accounting
          </option>
          <option value="Sales & Marketing" className="bg-gray-900">
            Sales & Marketing
          </option>
          <option value="BPO & Customer Support" className="bg-gray-900">
            BPO & Customer Support
          </option>
          <option value="Manufacturing & Operations" className="bg-gray-900">
            Manufacturing & Operations
          </option>
          <option value="SaaS & Cybersecurity" className="bg-gray-900">
            SaaS & Cybersecurity
          </option>
          <option value="Executive / Leadership" className="bg-gray-900">
            Executive / Leadership
          </option>
          <option value="Other" className="bg-gray-900">
            Other
          </option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        {isSubmitting ? (
          <>
            <FiLoader className="animate-spin text-sm" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <FiSend className="text-sm" />
            <span>Find Me Opportunities</span>
          </>
        )}
      </button>

      {error && (
        <p className="text-red-300 text-xs text-center">
          Something went wrong. Please try again or{" "}
          <a href="mailto:connect@workeraa.co.in" className="underline">
            email us directly
          </a>.
        </p>
      )}
    </form>
  );
}

export const JobSeekerForm: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden min-h-[720px] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/misc/job-seeker.jpg')",
          backgroundPosition: "right center",
        }}
      />

      {/* Overlay — darker on left, lighter on right so woman stays visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/70 to-gray-900/25" />

      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* LEFT — Form first */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/30 to-blue-700/10 rounded-3xl blur-xl" />
              <div className="relative bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-white text-xl font-bold mb-1 uppercase tracking-wide">
                  Find Me Opportunities
                </h3>
                <p className="text-gray-200 text-sm mb-6">
                  Free for job seekers · Response within 24 hrs
                </p>
                <Form />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Content, but aligned left so it doesn’t cover subject too much */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2"
          >
            <div className="max-w-xl">
              <div className="inline-flex items-center px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-200 rounded-full text-sm font-medium mb-6">
                For Job Seekers
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Your Next{" "}
                <span className="text-blue-400">Career Move</span>{" "}
                Starts Here
              </h2>

              <p className="text-gray-100 text-lg leading-relaxed max-w-lg">
                Stop sending your resume into the void. Share your details once
                and we&apos;ll connect you with companies actively hiring for your
                profile across top industries.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};