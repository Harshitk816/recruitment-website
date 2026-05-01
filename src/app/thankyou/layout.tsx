
export const metadata = {
  title: "Thank You | Workeraa",
  description: "Thank you for reaching out to Workeraa. Our team will get back to you shortly.",
  robots: {
    index: false,   // don't index the thank you page in search engines
    follow: false,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}