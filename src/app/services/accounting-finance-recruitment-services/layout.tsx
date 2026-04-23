import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance & Accounting Staffing Agency - Workeraa",
  description:
    "Leading accounting recruitment services provider offering expert finance staffing solutions. Hire skilled finance professionals with Workeraa. Schedule a call now.",
  alternates: {
    canonical:
      "https://www.workeraa.co.in/services/accounting-finance-recruitment-services",
  },
};

export default function FinanceRecruitmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}