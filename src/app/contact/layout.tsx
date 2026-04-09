import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Workeraa. We're based in Gurugram, India. Call us at +91 8700192565 or email connect@workeraa.co.in for recruitment solutions.",
  alternates: {
    canonical: "https://www.workeraa.co.in/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}