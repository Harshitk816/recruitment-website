'use client';
import { Services } from '@/components/sections/Services';
import { WhatsAppWidget } from '@/components/sections/Whatsapp';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';

// Enhanced Services Page with Additional Content
const ServicesPageContent = () => {
  return (
    <div className="py-12 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive recruitment solutions tailored to your business needs. 
            From executive search to flexible staffing, we deliver results that matter.
          </p>
        </motion.div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We understand your specific hiring needs and company culture"
              },
              {
                step: "02", 
                title: "Sourcing",
                description: "Our team identifies and screens top-quality candidates"
              },
              {
                step: "03",
                title: "Assessment",
                description: "Comprehensive evaluation of skills, experience, and cultural fit"
              },
              {
                step: "04",
                title: "Placement",
                description: "Seamless onboarding and ongoing support for successful integration"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesPageContent />
      <Services />
      
      {/* Additional Service Features */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We go beyond traditional recruitment to deliver exceptional value to both clients and candidates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Expertise",
                description: "Deep knowledge across IT, Finance, Sales & Marketing sectors with specialized recruiters for each domain.",
                benefits: ["Sector-specific knowledge", "Technical skill assessment", "Industry network access"]
              },
              {
                title: "Quality Assurance",
                description: "Rigorous screening process ensures only the most qualified candidates reach your desk.",
                benefits: ["Multi-stage screening", "Reference verification", "Skills assessment"]
              },
              {
                title: "Ongoing Support",
                description: "Our relationship doesn't end with placement. We provide continuous support for long-term success.",
                benefits: ["Onboarding assistance", "Performance tracking", "Replacement guarantee"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <WhatsAppWidget 
        phoneNumber="918700192565" 
        defaultMessage="Hi! I'm interested in learning more about your recruitment services."
      />
    </main>
  );
}
