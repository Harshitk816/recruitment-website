import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Recruitment Agency in Delhi, Hired Talent in 48 Hours- Workeraa",
  description:
    "Looking for the best recruitment agency in Delhi? We offer expert staffing and HR consultancy services to help you hire top talent faster and smarter. Trusted by leading businesses.",
  alternates: {
    canonical:
      "https://www.workeraa.co.in/locations/Recruitment-agency-in-Delhi",
  },
};

export default function DelhiRecruitmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}