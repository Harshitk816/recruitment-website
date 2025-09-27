'use client';
import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { 
  FiZap, 
  FiLayers, 
  FiRotateCw,
  FiCheck,
  FiUsers,
  FiTarget
} from 'react-icons/fi';

import { FaCrown } from 'react-icons/fa';

// Service card data with fixed color properties
const servicesData = [
  {
    id: 1,
    icon: FiZap,
    title: "Top Talent, On Demand",
    subtitle: "Quick and quality hiring for every role",
    description: "Fast-track your hiring process with our curated pool of pre-screened candidates. Get quality matches in days, not months.",
    features: [
      "Fast turnaround time",
      "Pre-screened candidates", 
      "Quality assurance guarantee",
      "Flexible engagement models"
    ],
    primaryColor: "text-blue-600",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100",
    borderColor: "border-blue-200",
    checkColor: "text-blue-500"
  },
  {
    id: 2,
    icon: FaCrown,
    title: "Leaders That Lead",
    subtitle: "Executive & senior-level recruitment",
    description: "Strategic leadership placement for C-suite executives and senior management roles that drive organizational success.",
    features: [
      "C-suite placements",
      "Board-level positions",
      "Strategic leadership roles",
      "Executive assessment"
    ],
    primaryColor: "text-purple-600",
    bgColor: "bg-purple-50", 
    iconBg: "bg-purple-100",
    borderColor: "border-purple-200",
    checkColor: "text-purple-500"
  },
  {
    id: 3,
    icon: FiLayers,
    title: "Built to Last",
    subtitle: "Permanent hiring for long-term success",
    description: "Comprehensive permanent placement services focused on cultural fit and long-term growth potential for sustainable success.",
    features: [
      "Cultural alignment focus",
      "Skills & personality assessment",
      "Growth potential evaluation",
      "Long-term success tracking"
    ],
    primaryColor: "text-green-600",
    bgColor: "bg-green-50",
    iconBg: "bg-green-100",
    borderColor: "border-green-200",
    checkColor: "text-green-500"
  },
  {
    id: 4,
    icon: FiRotateCw,
    title: "Flexibility First",
    subtitle: "Contract & project-based staffing solutions",
    description: "Adaptable staffing solutions for temporary, contract, and project-based requirements with flexible engagement terms.",
    features: [
      "Project-specific staffing",
      "Temporary placements",
      "Contract-to-hire options",
      "Scalable workforce solutions"
    ],
    primaryColor: "text-orange-600",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100",
    borderColor: "border-orange-200",
    checkColor: "text-orange-500"
  }
];

// Individual Service Card Component
interface ServiceCardProps {
  service: typeof servicesData[0];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className={`
        relative p-8 rounded-2xl border-2 ${service.borderColor} bg-white shadow-lg
        transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
        hover:${service.bgColor}
      `}>
        
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`
            w-16 h-16 rounded-xl ${service.iconBg} flex items-center justify-center mb-6
            transition-all duration-300 group-hover:shadow-lg relative z-10
            border-2 ${service.borderColor}
          `}
        >
          <service.icon className={`text-2xl ${service.primaryColor}`} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800">
            {service.title}
          </h3>
          
          <p className={`text-lg mb-4 font-medium ${service.primaryColor}`}>
            {service.subtitle}
          </p>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Features list */}
          <ul className="space-y-3 mb-6">
            {service.features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + idx * 0.05 }}
                className="flex items-center space-x-3"
              >
                <div className={`flex-shrink-0 w-5 h-5 rounded-full ${service.iconBg} flex items-center justify-center`}>
                  <FiCheck className={`text-xs ${service.checkColor}`} />
                </div>
                <span className="text-gray-700 text-sm">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
          <div className={`w-full h-full rounded-full ${service.iconBg}`} />
        </div>
        
        <div className="absolute bottom-4 right-4 w-8 h-8 opacity-20">
          <div className={`w-full h-full rounded-full ${service.iconBg}`} />
        </div>
      </div>
    </motion.div>
  );
};

// Stats Component for Services
const ServiceStats: React.FC = () => {
  const stats = [
    { icon: FiUsers, number: "500+", label: "Companies Served", color: "text-blue-600", bg: "bg-blue-100" },
    { icon: FiTarget, number: "2000+", label: "Successful Placements", color: "text-green-600", bg: "bg-green-100" },
    { icon: FiCheck, number: "95%", label: "Client Satisfaction", color: "text-purple-600", bg: "bg-purple-100" },
    { icon: FiZap, number: "48hrs", label: "Average Response", color: "text-orange-600", bg: "bg-orange-100" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-3">
            <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center border-2 border-gray-100`}>
              <stat.icon className={`text-xl ${stat.color}`} />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {stat.number}
          </div>
          <div className="text-sm text-gray-600">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6 border-2 border-blue-200">
            <FiZap className="mr-2 text-blue-600" />
            Our Services
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Innovation Hired,</span> Growth Inspired
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your hiring process with our comprehensive recruitment solutions. 
            From executive search to flexible staffing, we deliver top talent that drives your business forward.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>

        {/* Call to Action - UPDATED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Hiring?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let&apos;s discuss your specific requirements and create a customized recruitment strategy that delivers results.
            </p>
            {/* UPDATED: Single button linking to /contact */}
            <div className="flex justify-center">
              <Button 
                href="/contact"
                variant="secondary" 
                size="lg"
                className="!bg-white !text-blue-600 hover:!bg-blue-700 hover:!text-white !border-0 transition-all duration-200"
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <ServiceStats />
      </Container>
    </section>
  );
};
