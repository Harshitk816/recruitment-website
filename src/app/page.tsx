import { About } from "@/components/sections/About";
import { CompanyCarousel } from "@/components/sections/CompanyCarousel";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Services } from "@/components/sections/Services";
import { WhatsAppWidget } from "@/components/sections/Whatsapp";
import { FAQSection } from "@/components/sections/Faq";
import { TestimonialSection } from "@/components/sections/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyCarousel/>
      <Industries />
      <FAQSection />
      <TestimonialSection />
      <WhatsAppWidget
        phoneNumber="918700192565"
        defaultMessage="Hi! I'm interested in Workeraa's recruitment services."
      />
      {/* Other sections will go here */}
    </>
  );
}
