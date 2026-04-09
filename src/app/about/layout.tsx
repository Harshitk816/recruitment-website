import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Workeraa — Gurugram's leading recruitment agency with 500+ successful placements across IT, Finance, Sales, Healthcare, and more.",
  alternates: {
    canonical: "https://www.workeraa.co.in/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}