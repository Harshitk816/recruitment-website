import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Recruitment Agency in Noida for Staffing & HR Consultancy Services | Workeraa",
  description:
    "Looking for the best recruitment agency in Noida? Workeraa offers expert staffing and HR consultancy across IT, BFSI, GCC, manufacturing and more. First shortlist in 48 hours.",
  alternates: {
    canonical: "https://www.workeraa.co.in/locations/recruitment-agency-in-noida",
  },
};

export default function NoidaRecruitmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}