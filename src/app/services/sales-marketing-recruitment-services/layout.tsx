import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales and Marketing Recruitment Agency - Workeraa",
  description:
    "Expert sales and marketing recruitment services to help you hire top-performing professionals. Build a high impact team with Workeraa's staffing solutions. Visit us now.",
  alternates: {
    canonical:
      "https://www.workeraa.co.in/services/sales-marketing-recruitment-services",
  },
};

export default function SalesMarketingRecruitmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}