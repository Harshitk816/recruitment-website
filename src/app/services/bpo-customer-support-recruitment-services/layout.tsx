import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BPO & Customer Support Recruitment | Staffing Experts",
  description:
    "Expert BPO and customer support recruitment services. Hire skilled agents and support staff to enhance customer experience.",
  alternates: {
    canonical:
      "https://www.workeraa.co.in/services/bpo-customer-support-recruitment-services",
  },
};

export default function BPORecruitmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}