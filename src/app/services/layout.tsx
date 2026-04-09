import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive staffing solutions including Executive Search, Permanent Hiring, Contract Staffing, and Temporary Placements across India.",
  alternates: {
    canonical: "https://www.workeraa.co.in/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}