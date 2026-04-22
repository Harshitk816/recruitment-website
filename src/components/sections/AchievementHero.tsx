"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  FiCheckCircle,
  FiZap,
  FiStar,
  FiUsers,
} from "react-icons/fi";

const stats = [
  {
    icon: FiCheckCircle,
    color: "text-blue-600",
    bg: "bg-blue-100",
    number: "500+",
    label: "Successful Placements",
    description:
      "Over 500 candidates placed across IT, Finance, Sales & more in the last two years.",
  },
  {
    icon: FiZap,
    color: "text-yellow-500",
    bg: "bg-yellow-100",
    number: "2X",
    label: "Faster Hiring",
    description:
      "Our pre-screened talent pool cuts your average time-to-hire in half.",
  },
  {
    icon: FiStar,
    color: "text-green-600",
    bg: "bg-green-100",
    number: "95%",
    label: "Client Satisfaction",
    description:
      "9 out of 10 clients rate their hiring experience with Workeraa as excellent.",
  },
  {
    icon: FiUsers,
    color: "text-purple-600",
    bg: "bg-purple-100",
    number: "80+",
    label: "Partner Companies",
    description:
      "Startups to enterprises across Delhi NCR actively trust us for their hiring.",
  },
];

interface AchievementHeroProps {
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export const AchievementHero: React.FC<AchievementHeroProps> = ({
  imageSrc = "/images/misc/achievements.jpeg",
  imageAlt = "Workeraa team at work",
  className = "",
}) => {
  return (
    <section className={` ${className}`}>
      <Container>

        {/* ── Gradient card wrapper ── */}
        <div className="bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/80 rounded-3xl border border-blue-100 shadow-sm px-8 py-12 md:px-14 md:py-16">

          {/* ── Centered header ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
              Our Track Record
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our <span className="text-blue-600">Achievements</span>
            </h2>
            <p className="text-gray-500 mt-4 text-base max-w-xl mx-auto leading-relaxed">
              Numbers that reflect the trust companies and candidates place in
              Workeraa every day.
            </p>
          </motion.div>

          {/* ── Two-column layout ── */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    width={600}
                    height={450}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center text-blue-400">
                      <FiUsers className="text-5xl mx-auto mb-3" />
                      <p className="text-sm font-medium">Add image via imageSrc prop</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Accent bar */}
              <div className="flex h-1.5 mt-3 rounded-full overflow-hidden gap-0.5">
                {["bg-blue-600", "bg-green-500", "bg-yellow-400", "bg-purple-500"].map(
                  (c, i) => (
                    <div key={i} className={`flex-1 ${c} rounded-full`} />
                  )
                )}
              </div>
            </motion.div>

            {/* Right: Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/70 hover:bg-white border border-white hover:border-blue-100 hover:shadow-sm transition-all duration-200"
                >
                  <div
                    className={`w-11 h-11 ${stat.bg} rounded-xl flex items-center justify-center shrink-0`}
                  >
                    <stat.icon className={`text-lg ${stat.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-2xl font-bold text-gray-900">
                        {stat.number}
                      </span>
                      <span className="text-sm font-semibold text-gray-700">
                        {stat.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
};