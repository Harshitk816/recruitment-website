"use client";
import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What industries does Workeraa specialize in?",
    answer:
      "Workeraa specializes in 9+ industries including IT & Technology, Finance & Accounting, Sales & Marketing, Healthcare & Pharma, Manufacturing & Operations, Retail & E-Commerce, Logistics & Supply Chain, BPO & Customer Support, and SaaS & Cybersecurity.",
  },
  {
    question: "How long does the recruitment process take?",
    answer:
      "Our typical turnaround time is 7–15 business days depending on the role and seniority. For executive searches, it may take 3–4 weeks to ensure we find the perfect fit for your organization.",
  },
  {
    question: "What is the difference between permanent hiring and contract staffing?",
    answer:
      "Permanent hiring places candidates as full-time employees within your organization. Contract staffing provides skilled professionals for a fixed duration or project, giving you flexibility without long-term commitments.",
  },
  {
    question: "Do you work with startups or only large enterprises?",
    answer:
      "We work with all types of organizations — from early-stage startups to Fortune 500 companies. Our recruitment solutions are tailored to match the scale, culture, and hiring needs of each client.",
  },
  {
    question: "What is your success rate for placements?",
    answer:
      "We have successfully completed 500+ placements with a high retention rate. Our thorough screening process ensures candidates are not just qualified but also aligned with your company culture and goals.",
  },
  {
    question: "How do I get started with Workeraa?",
    answer:
      "Simply reach out to us via our Contact page, email us at connect@workeraa.co.in, or call +91 8700192565. Our team will schedule a consultation to understand your hiring needs and get the process started.",
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="text-gray-900 font-medium pr-8 group-hover:text-blue-600 transition-colors">
          {question}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
          {isOpen ? (
            <FiMinus className="text-blue-600 text-sm" />
          ) : (
            <FiPlus className="text-blue-600 text-sm" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 leading-relaxed pb-5 pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-6">
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Can't find the answer you're looking for? Reach out to our team at{" "}
            <a
              href="mailto:connect@workeraa.co.in"
              className="text-blue-600 hover:underline"
            >
              connect@workeraa.co.in
            </a>
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 px-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};