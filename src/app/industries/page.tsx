"use client";
import { Industries } from "@/components/sections/Industries";
import { SupportWidget } from "@/components/sections/Whatsapp";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { FiMonitor, FiDollarSign, FiTrendingUp } from "react-icons/fi";
import { useUserMode } from "@/contexts/UserModeContext";

// ─── Content ──────────────────────────────────────────────────────────────────

const pageContent = {
  employer: {
    eyebrow: "Sector-Focused Hiring",
    heading: <><span className="text-blue-600">Industries</span> We Serve</>,
    subtext:
      "Specialised recruitment expertise across key industries, delivering tailored solutions that understand your sector's unique challenges and opportunities.",
    insightsHeading: "Market Insights",
    insights: [
      {
        icon: FiMonitor,
        title: "Tech Talent Demand",
        stat: "45% Growth",
        description: "Rising demand for developers, data scientists, and cloud specialists across all sectors.",
        color: "text-blue-600",
        bg: "bg-blue-100",
      },
      {
        icon: FiDollarSign,
        title: "Finance Evolution",
        stat: "30% Digital Shift",
        description: "Financial services embracing digital transformation and fintech innovation.",
        color: "text-green-600",
        bg: "bg-green-100",
      },
      {
        icon: FiTrendingUp,
        title: "Sales Innovation",
        stat: "60% Remote Growth",
        description: "Sales teams adapting to remote work and digital-first go-to-market strategies.",
        color: "text-purple-600",
        bg: "bg-purple-100",
      },
    ],
    caseStudies: [
      {
        industry: "IT & Technology",
        company: "Tech Startup",
        challenge: "Needed 15 full-stack developers in 60 days",
        result: "Delivered 18 qualified candidates, 15 hired within timeline",
        icon: FiMonitor,
        color: "text-blue-400",
      },
      {
        industry: "Finance & Accounting",
        company: "Investment Firm",
        challenge: "Required CFO with fintech experience",
        result: "Placed experienced CFO who increased efficiency by 40%",
        icon: FiDollarSign,
        color: "text-green-400",
      },
      {
        industry: "Sales & Marketing",
        company: "E-commerce Company",
        challenge: "Scaling sales team for international expansion",
        result: "Built complete sales organisation, 200% revenue growth",
        icon: FiTrendingUp,
        color: "text-purple-400",
      },
    ],
    ctaHeading: "Ready to Find Your Industry Experts?",
    ctaSubtext:
      "Let us connect you with top-tier professionals who understand your industry inside and out.",
    ctaPrimary: { label: "Schedule Consultation", href: "/contact" },
    ctaSecondary: "View All Positions",
    whatsapp: "Hi! I'm interested in industry-specific recruitment services.",
  },
  jobseeker: {
    eyebrow: "Find Roles in Your Industry",
    heading: <><span className="text-blue-600">Industries</span> Hiring Now</>,
    subtext:
      "We place candidates across 6 high-growth industries. Find a role where your skills are valued and your career can move forward.",
    insightsHeading: "Where Opportunities Are Growing",
    insights: [
      {
        icon: FiMonitor,
        title: "Tech Hiring Surge",
        stat: "45% More Roles",
        description: "Demand for developers, data scientists, and cloud engineers is at an all-time high.",
        color: "text-blue-600",
        bg: "bg-blue-100",
      },
      {
        icon: FiDollarSign,
        title: "Finance & Fintech",
        stat: "30% New Openings",
        description: "Digital transformation is creating new finance and analyst roles at a rapid pace.",
        color: "text-green-600",
        bg: "bg-green-100",
      },
      {
        icon: FiTrendingUp,
        title: "Sales & Marketing",
        stat: "60% Remote Roles",
        description: "More remote and hybrid sales roles than ever — great for flexible career seekers.",
        color: "text-purple-600",
        bg: "bg-purple-100",
      },
    ],
    caseStudies: [
      {
        industry: "IT & Technology",
        company: "Career Changer",
        challenge: "Transitioning from support to software development",
        result: "Placed as junior developer at a product startup within 3 weeks",
        icon: FiMonitor,
        color: "text-blue-400",
      },
      {
        industry: "Finance & Accounting",
        company: "Recent Graduate",
        challenge: "First job seeker with no prior work experience",
        result: "Placed as financial analyst at a leading investment firm",
        icon: FiDollarSign,
        color: "text-green-400",
      },
      {
        industry: "Sales & Marketing",
        company: "Returning Professional",
        challenge: "Rejoining workforce after a 2-year career break",
        result: "Secured senior sales manager role with a 40% salary increase",
        icon: FiTrendingUp,
        color: "text-purple-400",
      },
    ],
    ctaHeading: "Find Your Next Role Today",
    ctaSubtext:
      "Browse active openings across all industries and let our recruiters match you to the right opportunity.",
    ctaPrimary: { label: "Share Your Profile", href: "/contact" },
    ctaSecondary: "Browse Industries",
    whatsapp: "Hi! I'm a job seeker looking for opportunities across industries.",
  },
};

// ─── Page Content ─────────────────────────────────────────────────────────────

const IndustriesPageContent = () => {
  const { mode } = useUserMode();
  const c = pageContent[mode];

  return (
    <div className="py-12 bg-white">
      <Container>

        {/* Hero */}
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

        {/* Market Insights */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode + "-insights"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {c.insightsHeading}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {c.insights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className={`w-12 h-12 ${insight.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <insight.icon className={`text-xl ${insight.color}`} />
                  </div>
                  <div className={`text-2xl font-bold ${insight.color} mb-2`}>{insight.stat}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{insight.title}</h3>
                  <p className="text-gray-600">{insight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </Container>
    </div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IndustriesPage() {
  const { mode } = useUserMode();
  const c = pageContent[mode];

  const scrollToIndustries = () => {
    document.getElementById("industries")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main>
      <IndustriesPageContent />

      <div id="industries">
        <Industries />
      </div>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={mode + "-cases-header"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                {mode === "employer" ? "Case Studies" : "Success Stories"}
              </h2>
              <p className="text-xl opacity-80 max-w-3xl mx-auto">
                {mode === "employer"
                  ? "Real results from our industry-focused recruitment approach"
                  : "Real candidates, real outcomes — placed by Workeraa"}
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={mode + "-cases"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {c.caseStudies.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-black/10 backdrop-blur-sm p-8 rounded-2xl"
                >
                  <div className="flex items-center mb-4">
                    <story.icon className={`text-2xl ${story.color} mr-3 shrink-0`} />
                    <div>
                      <h3 className="text-lg font-semibold">{story.industry}</h3>
                      <p className="text-sm opacity-70">{story.company}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-1 text-sm uppercase tracking-wide opacity-70">
                      {mode === "employer" ? "Challenge" : "Situation"}
                    </h4>
                    <p className="text-sm opacity-90">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm uppercase tracking-wide opacity-70">Result</h4>
                    <p className="text-sm opacity-90">{story.result}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={mode + "-cta"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center"
            >
              <h2 className="text-4xl font-bold mb-6">{c.ctaHeading}</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">{c.ctaSubtext}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href={c.ctaPrimary.href}
                  className="px-8 py-4 bg-white !text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all"
                >
                  {c.ctaPrimary.label}
                </Button>
                <button
                  onClick={scrollToIndustries}
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-all"
                >
                  {c.ctaSecondary}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      <SupportWidget
        phoneNumber="918700192565"
      />
    </main>
  );
}