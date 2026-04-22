"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FiAlertCircle,
  FiClock,
  FiTrendingUp,
  FiRepeat,
  FiCheckCircle,
} from "react-icons/fi";

const challenges = [
  { icon: FiAlertCircle, text: "Too many unqualified candidates" },
  { icon: FiClock,       text: "Long hiring cycles are delaying projects" },
  { icon: FiTrendingUp,  text: "High competition for top tech talent" },
  { icon: FiRepeat,      text: "Poor candidate fit leading to re-hiring costs" },
];

const solutions = [
  "Pre-vetted candidates (technical + cultural fit)",
  "Access to a large talent pool (active + passive candidates)",
  "Faster turnaround time",
  "Reduced hiring risk",
];

export const HiringChallengesSolution: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* ── Left: Challenges ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            {/* Header */}
            <div className="inline-flex items-center px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
              The Problem
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              The Hiring Challenges You&apos;re Facing
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Sound familiar? These are the most common pain points we solve for IT teams.
            </p>

            <ul className="space-y-4">
              {challenges.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-red-50 border border-red-100"
                >
                  <div className="w-9 h-9 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="text-red-500 text-base" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium leading-snug pt-1.5">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right: Solution ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl p-8 shadow-sm text-white flex flex-col"
          >
            {/* Header */}
            <div className="inline-flex items-center px-4 py-1.5 bg-white/15 text-white rounded-full text-xs font-semibold uppercase tracking-wide mb-5 w-fit">
              Our Solution
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Fast &amp; Reliable IT Recruitment
            </h2>
            <p className="text-blue-100 text-sm mb-8 leading-relaxed">
              We simplify your hiring process by delivering pre-screened,
              job-ready IT professionals tailored to your requirements.
            </p>

            <p className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-4">
              What You Get
            </p>

            <ul className="space-y-3 flex-1">
              {solutions.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/10 border border-white/10"
                >
                  <FiCheckCircle className="text-green-300 text-lg shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 font-medium leading-snug">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 w-full bg-white text-blue-600 font-semibold text-sm py-3 rounded-xl text-center hover:bg-blue-50 transition-colors"
            >
              Get a Free Consultation →
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};