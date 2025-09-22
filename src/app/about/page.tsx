import { About } from '@/components/sections/About';
import { WhatsAppWidget } from '@/components/sections/Whatsapp';

export default function AboutPage() {
  return (
    <main>
      <About />
      {/* WhatsApp Widget */}
      <WhatsAppWidget 
        phoneNumber="919876543210" 
        defaultMessage="Hi! I found your about page and I'm interested in Workeraa's services."
      />
    </main>
  );
}
