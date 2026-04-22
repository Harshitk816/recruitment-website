import { Metadata } from "next";

export const metadata: Metadata = {
  title: "#1 Recruitment Agency in Delhi NCR | Workeraa",
  description:
    "Struggling to find the right candidates? Workeraa is a leading Staffing Agency in Delhi NCR, providing reliable staffing and recruitment solutions. Get a free quote now.",
  alternates: {
    canonical: "https://www.workeraa.co.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}