import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LoadingWrapper } from '@/components/layout/LoadingWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Workeraa - Premium Recruitment Solutions',
  description: 'Where Talent Meets Tomorrow. Professional recruitment services across India.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </LoadingWrapper>
      </body>
    </html>
  );
}
