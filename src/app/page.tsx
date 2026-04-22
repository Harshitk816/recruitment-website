import { About } from "@/components/sections/About";
import { CompanyCarousel } from "@/components/sections/CompanyCarousel";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Services } from "@/components/sections/Services";
import { SupportWidget } from "@/components/sections/Whatsapp";
import { FAQSection } from "@/components/sections/Faq";
import { TestimonialSection } from "@/components/sections/Testimonial";
import { AchievementHero } from "@/components/sections/AchievementHero";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyCarousel/>
      <Industries />
      <AchievementHero className='bg-white'/>
      <FAQSection />
      <TestimonialSection />
      <SupportWidget
        phoneNumber="918700192565"
      />
      {/* Other sections will go here */}
    </>
  );
}
