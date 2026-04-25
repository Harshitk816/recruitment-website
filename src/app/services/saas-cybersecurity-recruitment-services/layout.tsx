import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS & Cybersecurity Recruitment Agency - Workeraa",
  description:
    "Workeraa is a leading cybersecurity recruitment agency and SaaS recruitment company. Hire top tech talent with our expert staffing solutions.",
  alternates: {
    canonical:
      "https://www.workeraa.co.in/services/saas-cybersecurity-recruitment-services",
  },
};

export default function SaaSCybersecurityRecruitmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}