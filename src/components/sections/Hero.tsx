"use client";
import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiUsers, FiCheckCircle, FiBriefcase, FiStar } from "react-icons/fi";
import { useUserMode } from "@/contexts/UserModeContext";

const content = {
  employer: {
    eyebrow: "Trusted Recruitment Partner Across India",
    headline: (
      <>
        Hire Smarter.
        <br />
        <span className="text-blue-600">Grow Faster.</span>
        <br />
        Hire Right.
      </>
    ),
    subtext:
      "Where exceptional talent meets the right opportunity — across IT, Finance, Sales & Marketing, and more.",
    primaryCta: { label: "Start Hiring Now", href: "/contact" },
    secondaryCta: { label: "Explore Services", href: "/services" },
    statCard: {
      stat1: { pre: "We simplify hiring for", number: "80+", post: "partner companies" },
      stat2: { pre: "And have successfully placed", number: "500+", post: "candidates in the last two years" },
      badge: "Verified outcomes",
    },
  },
  jobseeker: {
    eyebrow: "Your Next Career Move Starts Here",
    headline: (
      <>
        Find Roles
        <br />
        <span className="text-blue-600">That Fit You.</span>
        <br />
        Get Placed Fast.
      </>
    ),
    subtext:
      "Connect with top companies hiring across IT, Finance, Sales & Marketing. Workeraa gets your profile in front of the right decision-makers.",
    primaryCta: { label: "Explore Job Opportunities", href: "/contact" },
    secondaryCta: { label: "How It Works", href: "/about" },
    statCard: {
      stat1: { pre: "Candidates placed in", number: "500+", post: "roles across industries" },
      stat2: { pre: "Companies actively", number: "80+", post: "hiring through Workeraa" },
      badge: "Real placements, real careers",
    },
  },
};

export const Hero: React.FC = () => {
  const { mode } = useUserMode();
  const c = content[mode];

  return (
    <section className="relative bg-gray-50 overflow-hidden py-16 md:py-24">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-l from-blue-300/60 via-blue-200/30 to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Copy ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
                {mode === "employer" ? (
                  <FiBriefcase className="text-blue-600 shrink-0" />
                ) : (
                  <FiStar className="text-blue-600 shrink-0" />
                )}
                {c.eyebrow}
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] mb-6">
                {c.headline}
              </h1>

              {/* Subtext */}
              <p className="text-lg text-gray-500 mb-10 max-w-md leading-relaxed">
                {c.subtext}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" href={c.primaryCta.href} className="group">
                  {c.primaryCta.label}
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" href={c.secondaryCta.href}>
                  {c.secondaryCta.label}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── RIGHT: Overlapping cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[500px] md:h-[540px]"
          >

            {/* Accent block behind both cards */}
            <div className="absolute right-[-12px] top-8 w-[52%] h-[90%] bg-blue-200 rounded-2xl z-0" />

            {/* CARD 1 — Stat card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={mode + "-stat"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="absolute left-0 top-8 w-[52%] h-[90%] bg-blue-700 rounded-2xl p-7 flex flex-col justify-between z-10"
              >
                <div className="space-y-8">
                  <div>
                    <p className="text-blue-200 text-sm leading-snug mb-1">
                      {c.statCard.stat1.pre}
                    </p>
                    <p className="text-white text-5xl font-bold">{c.statCard.stat1.number}</p>
                    <p className="text-blue-200 text-sm leading-snug mt-1">
                      {c.statCard.stat1.post}
                    </p>
                  </div>

                  <div>
                    <p className="text-blue-200 text-sm leading-snug mb-1">
                      {c.statCard.stat2.pre}
                    </p>
                    <p className="text-white text-5xl font-bold">{c.statCard.stat2.number}</p>
                    <p className="text-blue-200 text-sm leading-snug mt-1">
                      {c.statCard.stat2.post}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-6">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                    <FiUsers className="text-white text-sm" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                    <FiCheckCircle className="text-white text-sm" />
                  </div>
                  <p className="text-blue-200 text-xs">{c.statCard.badge}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CARD 2 — Photo card (static, same for both modes) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute right-0 top-0 w-[56%] h-[90%] rounded-2xl overflow-hidden shadow-2xl z-20"
            >
              <img
                src="/images/industries/hiring.jpg"
                alt="Professional recruitment"
                className="w-full h-full object-cover object-center"
                loading="eager"
                width={480}
                height={540}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </motion.div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
};