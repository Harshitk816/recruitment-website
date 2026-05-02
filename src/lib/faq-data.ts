// lib/schema/faq-data.ts

export interface FAQ {
  question: string
  answer: string
}

export const faqGeneral: FAQ[] = [
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
]