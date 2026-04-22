import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Recruitment Agency | Top IT Staffing Company - Workeraa",
  description:
    "Workeraa is a leading IT recruitment agency offering reliable IT staffing services. Hire skilled tech talent quickly with our expert company solutions. Visit us now.",
  alternates: {
    canonical: "https://www.workeraa.co.in/services/it-recruitment-agency",
  },
};

export default function ITRecruitmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}