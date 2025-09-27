'use client';
import { Industries } from '@/components/sections/Industries';
import { WhatsAppWidget } from '@/components/sections/Whatsapp';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { 
  FiMonitor, 
  FiDollarSign, 
  FiTrendingUp
} from 'react-icons/fi';

const IndustriesPageContent = () => {
  // Function to scroll to Industries section
  const scrollToRoles = () => {
    const industriesSection = document.getElementById('industries');
    if (industriesSection) {
      industriesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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
            <span className="text-purple-600">Industries</span> We Serve
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Specialized recruitment expertise across key industries, delivering 
            tailored solutions that understand your sector&apos;s unique challenges and opportunities.
          </p>
        </motion.div>

        {/* Industry Trends Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Market Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FiMonitor,
                title: "Tech Talent Demand",
                stat: "45% Growth",
                description: "The IT sector continues to show unprecedented growth with increasing demand for skilled developers, data scientists, and cloud specialists.",
                color: "text-blue-600",
                bg: "bg-blue-100"
              },
              {
                icon: FiDollarSign,
                title: "Finance Evolution",
                stat: "30% Digital Shift",
                description: "Financial services are rapidly digitizing, creating new opportunities for fintech professionals and digital-first financial experts.",
                color: "text-green-600",
                bg: "bg-green-100"
              },
              {
                icon: FiTrendingUp,
                title: "Sales Innovation",
                stat: "60% Remote Growth",
                description: "Sales and marketing roles are evolving with remote work capabilities and digital marketing expertise becoming essential.",
                color: "text-purple-600",
                bg: "bg-purple-100"
              }
            ].map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className={`w-12 h-12 ${insight.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <insight.icon className={`text-xl ${insight.color}`} />
                </div>
                <div className={`text-2xl font-bold ${insight.color} mb-2`}>{insight.stat}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{insight.title}</h3>
                <p className="text-gray-600">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default function IndustriesPage() {
  // Function to scroll to Industries section
  const scrollToRoles = () => {
    const industriesSection = document.getElementById('industries');
    if (industriesSection) {
      industriesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <main>
      <IndustriesPageContent />
      
      {/* Add id to Industries section for scrolling */}
      <div id="industries">
        <Industries />
      </div>
      
      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Real results from our industry-focused recruitment approach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: "IT & Technology",
                company: "Tech Startup",
                challenge: "Needed 15 full-stack developers in 60 days",
                result: "Delivered 18 qualified candidates, 15 hired within timeline",
                icon: FiMonitor,
                color: "text-blue-400"
              },
              {
                industry: "Finance & Accounting",
                company: "Investment Firm",
                challenge: "Required CFO with fintech experience",
                result: "Placed experienced CFO who increased efficiency by 40%",
                icon: FiDollarSign,
                color: "text-green-400"
              },
              {
                industry: "Sales & Marketing",
                company: "E-commerce Company",
                challenge: "Scaling sales team for international expansion",
                result: "Built complete sales organization, 200% revenue growth",
                icon: FiTrendingUp,
                color: "text-purple-400"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-black bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  <story.icon className={`text-2xl ${story.color} mr-3`} />
                  <div>
                    <h3 className="text-lg font-semibold">{story.industry}</h3>
                    <p className="text-sm opacity-80">{story.company}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Challenge:</h4>
                  <p className="text-sm opacity-90">{story.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Result:</h4>
                  <p className="text-sm opacity-90">{story.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industry-Specific CTA - UPDATED BUTTONS */}
      <section className="py-20 bg-white">
        <Container>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Find Your Industry Experts?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let us connect you with top-tier professionals who understand your industry inside and out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* UPDATED: Schedule Consultation links to /contact */}
              <Button 
                href="/contact"
                className="px-8 py-4 bg-white !text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all"
              >
                Schedule Consultation
              </Button>
              
              {/* UPDATED: View All Positions scrolls to roles section */}
              <button 
                onClick={scrollToRoles}
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-all"
              >
                View All Positions
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* UPDATED WHATSAPP WITH REAL PHONE NUMBER */}
      <WhatsAppWidget 
        phoneNumber="918700192565" 
        defaultMessage="Hi! I'm interested in industry-specific recruitment services."
      />
    </main>
  );
}
