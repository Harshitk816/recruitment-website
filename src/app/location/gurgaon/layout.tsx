import { Metadata } from "next";

export const metadata: Metadata = {
  title: "#1 Recruitment Agency in Gurgaon | Proven HR & Staffing Solutions",
  description:
    "Find top talent with a trusted recruitment agency in Gurgaon. Expert staffing and HR consultancy services to help you hire faster and smarter. Get a free quote now.",
  alternates: {
    canonical:
      "https://www.workeraa.co.in/locations/Recruitment-agency-in-Gurgaon",
  },
};

export default function GurgaonRecruitmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}