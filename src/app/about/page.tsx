'use client'
import { About } from "@/components/sections/About";
import { TestimonialSection } from "@/components/sections/Testimonial";
import { SupportWidget } from "@/components/sections/Whatsapp";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { FiHeart, FiUsers, FiTarget, FiStar } from "react-icons/fi";

const AboutHeader = () => {
  return (
    <section className="pt-10 pb-1 bg-gradient-to-b from-blue-50 to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Workeraa</span> 
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Founded with a simple belief: exceptional talent deserves exceptional opportunities. 
            We're a recruitment firm that understands both sides of the equation – helping 
            companies find the right people and professionals find the right fit.
          </p>

          {/* Key highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                People-First Approach
              </h3>
              <p className="text-gray-600 text-sm">
                Every placement is built on understanding individual career goals and company culture
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FiTarget className="text-2xl text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Industry Expertise
              </h3>
              <p className="text-gray-600 text-sm">
                Deep knowledge across IT, Finance, Sales, and emerging sectors like SaaS & Cybersecurity
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FiHeart className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Long-term Partnerships
              </h3>
              <p className="text-gray-600 text-sm">
                We believe in building relationships that grow, not just filling positions
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

// Mission & Vision Section
const MissionVision = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300 bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-400 bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                  <FiTarget className="text-xl text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                To bridge the gap between exceptional talent and
                forward-thinking companies, creating meaningful connections that
                drive both individual careers and business success.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-300 bg-opacity-10 rounded-full translate-y-16 -translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-400 bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                  <FiStar className="text-xl text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-green-100 leading-relaxed">
                To become India&apos;s most trusted recruitment partner, known
                for our integrity, expertise, and commitment to excellence in
                connecting talent with opportunity.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default function AboutPage() {
  return (
    <main>
      <AboutHeader />
      <MissionVision />
      <About />
      <TestimonialSection />
      {/* WhatsApp Widget */}
      <SupportWidget
        phoneNumber="918700192565"
      />
    </main>
  );
}
