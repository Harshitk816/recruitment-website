import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Specialized recruitment across 9+ industries including IT & Technology, Finance & Accounting, Sales & Marketing, Healthcare & Pharma, and more.",
  alternates: {
    canonical: "https://www.workeraa.co.in/industries",
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}