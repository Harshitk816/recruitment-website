import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LoadingWrapper } from "@/components/layout/LoadingWrapper";
import Script from "next/script"; // 👈 Add this import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.workeraa.co.in"),
  title: {
    default: "Workeraa - Premium Recruitment Solutions",
    template: "%s | Workeraa",
  },
  description: "Where Talent Meets Tomorrow. Professional recruitment services across India.",
  alternates: {
    canonical: "https://www.workeraa.co.in",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ── Google Tag Manager (HEAD) ── */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NJZ5M56Z');`,
          }}
        />
      </head>
      <body className={inter.className}>

        {/* ── Google Tag Manager (BODY noscript) ── */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJZ5M56Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <LoadingWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </LoadingWrapper>
      </body>
    </html>
  );
}