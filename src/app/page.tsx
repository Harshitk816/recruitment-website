import { About } from '@/components/sections/About';
import { Hero } from '@/components/sections/Hero';
import { Industries } from '@/components/sections/Industries';
import { Services } from '@/components/sections/Services';
import { WhatsAppWidget } from '@/components/sections/Whatsapp';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <About />
       <WhatsAppWidget
        phoneNumber="919876543210" 
        defaultMessage="Hi! I'm interested in Workeraa's recruitment services."
      />
      {/* Other sections will go here */}
    </>
  );
}
