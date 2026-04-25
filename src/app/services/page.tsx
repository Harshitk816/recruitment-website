"use client";
import { Services } from "@/components/sections/Services";
import { SupportWidget } from "@/components/sections/Whatsapp";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { useUserMode } from "@/contexts/UserModeContext";

// ─── Content ──────────────────────────────────────────────────────────────────

const pageContent = {
  employer: {
    eyebrow: "Recruitment Solutions",
    heading: <>Our <span className="text-blue-600">Services</span></>,
    subtext:
      "Comprehensive recruitment solutions tailored to your business needs. From executive search to flexible staffing, we deliver results that matter.",
    process: [
      { step: "01", title: "Consultation",  description: "We understand your specific hiring needs and company culture in depth." },
      { step: "02", title: "Sourcing",      description: "Our team identifies and screens top-quality candidates from our network." },
      { step: "03", title: "Assessment",    description: "Comprehensive evaluation of skills, experience, and cultural fit." },
      { step: "04", title: "Placement",     description: "Seamless onboarding and ongoing support for successful integration." },
    ],
    whyHeading: "Why Choose Our Services?",
    whySubtext: "We go beyond traditional recruitment to deliver exceptional value to both clients and candidates.",
    features: [
      {
        title: "Industry Expertise",
        description: "Deep knowledge across IT, Finance, Sales & Marketing, SaaS, Manufacturing, and BPO with specialist recruiters for each domain.",
        benefits: ["Sector-specific knowledge", "Technical skill assessment", "Industry network access"],
      },
      {
        title: "Quality Assurance",
        description: "Rigorous screening ensures only the most qualified, culture-fit candidates reach your desk — saving you time and cost.",
        benefits: ["Multi-stage screening", "Reference verification", "Skills assessment"],
      },
      {
        title: "Ongoing Support",
        description: "Our relationship doesn't end with placement. We provide continuous support for long-term hiring success.",
        benefits: ["Onboarding assistance", "Performance tracking", "Replacement guarantee"],
      },
    ],
  },
  jobseeker: {
    eyebrow: "Career Placement",
    heading: <>Find Your <span className="text-blue-600">Next Role</span></>,
    subtext:
      "We connect driven professionals with the right opportunities — across top industries, at every career level. Free for job seekers, always.",
    process: [
      { step: "01", title: "Register",      description: "Share your resume and we'll reach out within 2 business days to understand your goals." },
      { step: "02", title: "Profile Match", description: "We match your skills and aspirations to active openings across our hiring partners." },
      { step: "03", title: "Interviews",    description: "We brief you, prep you, and connect you directly with the right hiring managers." },
      { step: "04", title: "Get Placed",    description: "Receive your offer, get onboarding support, and start your next chapter." },
    ],
    whyHeading: "Why Job Seekers Trust Workeraa",
    whySubtext: "We treat every candidate as a career partner — not just a profile to fill a role.",
    features: [
      {
        title: "Dedicated Career Support",
        description:
          "Our recruiters work alongside you from registration to offer — guiding you at every step so you always know what to expect.",
        benefits: [
          "Personalised recruiter assigned to you",
          "Regular updates on your application status",
          "Post-placement check-ins",
        ],
      },
      {
        title: "Interview Preparation",
        description: "Our recruiters brief you before every interview — company background, role expectations, and likely questions.",
        benefits: ["Role briefing before every interview", "Resume feedback", "Salary negotiation guidance"],
      },
      {
        title: "Opportunities Across Industries",
        description: "Access live openings across IT, Finance, Sales, SaaS, Manufacturing, and BPO with companies actively hiring right now.",
        benefits: ["Freshers & experienced both welcome", "Career gap candidates accepted", "Pan-India opportunities"],
      },
    ],
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const { mode } = useUserMode();
  const c = pageContent[mode];

  return (
    <main>

      {/* ── Hero ── */}
      <div className="py-12 bg-white">
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={mode + "-hero"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-5 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-5">
                {c.eyebrow}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {c.heading}
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {c.subtext}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* ── Process Steps ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={mode + "-process"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-4"
            >
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                {mode === "employer" ? "Our Process" : "How It Works"}
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                {c.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </div>

      {/* ── Service Cards ── */}
      <Services />

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-gray-50">
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={mode + "-why-header"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{c.whyHeading}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{c.whySubtext}</p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={mode + "-features"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {c.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      <SupportWidget phoneNumber="918700192565" />
    </main>
  );
}