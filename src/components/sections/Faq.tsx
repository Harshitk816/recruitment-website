"use client";
import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useUserMode } from "@/contexts/UserModeContext";

// ─── Content ─────────────────────────────────────────────────────────────────

const faqContent = {
  employer: [
    {
      question: "What industries does Workeraa specialize in?",
      answer:
        "Workeraa specializes in 6 core industries — IT & Technology, Finance & Accounting, Sales & Marketing, SaaS & Cybersecurity, Manufacturing & Operations, and BPO & Customer Support. Our dedicated recruiters have deep domain knowledge in each vertical.",
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
        "Simply reach out via our Contact page, email us at connect@workeraa.co.in, or call +91 8700192565. Our team will schedule a consultation to understand your hiring needs and get the process started right away.",
    },
  ],
  jobseeker: [
    {
      question: "Is Workeraa free for job seekers?",
      answer:
        "Yes, completely free. We are paid by the hiring companies, not candidates. You will never be charged any fees for registration, placement assistance, or interview preparation.",
    },
    {
      question: "What kinds of roles does Workeraa help me find?",
      answer:
        "We place candidates across IT & Technology, Finance & Accounting, Sales & Marketing, SaaS & Cybersecurity, Manufacturing & Operations, and BPO & Customer Support — across all seniority levels from freshers to senior leadership.",
    },
    {
      question: "How do I register as a job seeker?",
      answer:
        "Reach out via our Contact page or email connect@workeraa.co.in with your updated resume. One of our recruiters will get in touch within 2 business days to understand your profile and career goals.",
    },
    {
      question: "How long does it take to get placed?",
      answer:
        "It varies by role, experience, and market demand. Most candidates receive interview calls within 1–2 weeks of registration. Active roles in IT and Finance typically move faster.",
    },
    {
      question: "Will Workeraa help me prepare for interviews?",
      answer:
        "Yes. Our recruiters brief you on the company culture, role expectations, and likely interview format before every interview. We are invested in your success at every step of the process.",
    },
    {
      question: "Can I apply if I am a fresher or have a career gap?",
      answer:
        "Absolutely. We work with freshers, career changers, and professionals returning after a break. We match your skills and potential to the right opportunity rather than just your years of experience.",
    },
  ],
};

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

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
}) => (
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
          <p className="text-gray-600 leading-relaxed pb-5 pr-12">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// ─── Section ──────────────────────────────────────────────────────────────────

export const FAQSection = () => {
  const { mode } = useUserMode();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Reset open item when mode changes
  React.useEffect(() => {
    setOpenIndex(0);
  }, [mode]);

  const faqs = faqContent[mode];

  const heading = {
    employer: "Everything You Need to Know About Hiring",
    jobseeker: "Everything You Need to Know About Getting Placed",
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

          <AnimatePresence mode="wait">
            <motion.h2
              key={mode + "-heading"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              {heading[mode]}
            </motion.h2>
          </AnimatePresence>

          <p className="text-gray-500 max-w-xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our team at{" "}
            <a href="mailto:connect@workeraa.co.in" className="text-blue-600 hover:underline">
              connect@workeraa.co.in
            </a>
          </p>
        </motion.div>

        {/* FAQ List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode + "-faqs"}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 px-8"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

      </Container>
    </section>
  );
};