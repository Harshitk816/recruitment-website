'use client';
import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { 
  FiMonitor, 
  FiDollarSign, 
  FiTrendingUp,
  FiUsers,
  FiCode,
  FiPieChart,
  FiTarget,
  FiAward,
  FiBriefcase,
  FiBarChart,
  
} from 'react-icons/fi';

import { PiMegaphone } from 'react-icons/pi';

// Simplified industries data
const industriesData = [
  {
    id: 1,
    name: "IT & Technology",
    subtitle: "Driving innovation with the right tech minds",
    description: "From startups to Fortune 500 companies, we connect organizations with exceptional technical talent that drives digital transformation and innovation.",
    icon: FiMonitor,
    primaryColor: "text-blue-600",
    bgGradient: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100",
    borderColor: "border-blue-200",
    roles: [
      { title: "Software Engineers", icon: FiCode },
      { title: "DevOps Specialists", icon: FiTarget },
      { title: "Data Scientists", icon: FiPieChart },
      { title: "Product Managers", icon: FiBriefcase }
    ]
  },
  {
    id: 2,
    name: "Finance & Accounting",
    subtitle: "Smart talent for smarter decisions",
    description: "We specialize in placing finance professionals who combine analytical expertise with strategic thinking to drive business growth and financial success.",
    icon: FiDollarSign,
    primaryColor: "text-green-600",
    bgGradient: "from-green-500 to-emerald-400",
    bgColor: "bg-green-50",
    iconBg: "bg-green-100",
    borderColor: "border-green-200",
    roles: [
      { title: "Financial Analysts", icon: FiBarChart },
      { title: "CFOs & Finance Leaders", icon: FiAward },
      { title: "Accountants", icon: FiPieChart },
      { title: "Investment Advisors", icon: FiTrendingUp }
    ]
  },
  {
    id: 3,
    name: "Sales & Marketing",
    subtitle: "Growth-focused professionals who deliver results",
    description: "Connect with sales and marketing leaders who understand modern customer journeys and can drive sustainable revenue growth for your organization.",
    icon: FiTrendingUp,
    primaryColor: "text-purple-600",
    bgGradient: "from-purple-500 to-pink-400",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-100",
    borderColor: "border-purple-200",
    roles: [
      { title: "Sales Directors", icon: FiTarget },
      { title: "Digital Marketers", icon: PiMegaphone },
      { title: "Business Development", icon: FiBriefcase },
      { title: "Brand Managers", icon: FiAward }
    ]
  }
];

// Fixed Industry Card Component - No Overflow and No Button
interface IndustryCardProps {
  industry: typeof industriesData[0];
  index: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <div className={`
        relative p-8 rounded-3xl border-2 ${industry.borderColor} bg-white shadow-xl
        transition-all duration-500 hover:shadow-2xl hover:-translate-y-2
        overflow-hidden h-full flex flex-col
      `}>
        
        {/* Gradient Background Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 0.1 : 0,
            scale: isHovered ? 1.2 : 0.8
          }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} rounded-3xl`}
        />
        
        {/* Header Section */}
        <div className="relative z-10 mb-6">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`
              w-20 h-20 rounded-2xl ${industry.iconBg} flex items-center justify-center mb-6
              transition-all duration-300 shadow-lg border-2 ${industry.borderColor}
            `}
          >
            <industry.icon className={`text-3xl ${industry.primaryColor}`} />
          </motion.div>

          {/* Title & Subtitle */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {industry.name}
          </h3>
          <p className={`text-lg font-medium mb-4 ${industry.primaryColor}`}>
            {industry.subtitle}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {industry.description}
          </p>
        </div>

        {/* Key Roles Grid - FIXED LAYOUT */}
        <div className="relative z-10 flex-1">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Roles We Fill</h4>
          <div className="space-y-3">
            {industry.roles.map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + idx * 0.1 }}
                className={`
                  flex items-center space-x-3 p-3 rounded-lg ${industry.bgColor} 
                  border ${industry.borderColor} transition-all hover:shadow-sm
                `}
              >
                <div className={`w-8 h-8 rounded-lg ${industry.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <role.icon className={`text-sm ${industry.primaryColor}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-gray-900">{role.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-6 right-6 w-12 h-12 opacity-20">
          <div className={`w-full h-full rounded-full ${industry.iconBg}`} />
        </div>
        <div className="absolute bottom-6 right-6 w-8 h-8 opacity-30">
          <div className={`w-full h-full rounded-full ${industry.iconBg}`} />
        </div>
      </div>
    </motion.div>
  );
};

// Overall Industry Stats
const IndustryOverallStats: React.FC = () => {
  const overallStats = [
    { 
      icon: FiUsers, 
      number: "2650+", 
      label: "Total Placements",
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    { 
      icon: FiBriefcase, 
      number: "440+", 
      label: "Partner Companies",
      color: "text-green-600",
      bg: "bg-green-100"
    },
    { 
      icon: FiAward, 
      number: "97%", 
      label: "Average Success Rate",
      color: "text-purple-600",
      bg: "bg-purple-100"
    },
    { 
      icon: FiTrendingUp, 
      number: "30%", 
      label: "Faster Hiring Process",
      color: "text-orange-600",
      bg: "bg-orange-100"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
      {overallStats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-4">
            <div className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center shadow-lg`}>
              <stat.icon className={`text-2xl ${stat.color}`} />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {stat.number}
          </div>
          <div className="text-sm text-gray-600 leading-tight">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-800 text-sm font-medium mb-6">
            <FiBriefcase className="mr-2" />
            Industries We Serve
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Great Talent Drives <span className="text-purple-600">Every Industry</span> Forward
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We believe exceptional professionals are the foundation of every successful business. 
            That's why we recruit across diverse sectors with precision, expertise, and deep industry knowledge.
          </p>
        </motion.div>

        {/* Industries Grid - No Buttons */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {industriesData.map((industry, index) => (
            <IndustryCard 
              key={industry.id} 
              industry={industry} 
              index={index} 
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Don't See Your Industry? We've Got You Covered
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our recruitment expertise extends beyond these core sectors. Let's discuss your specific industry needs and talent requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 text-lg font-medium bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                Discuss Your Needs
              </button>
              <button className="px-6 py-3 text-lg font-medium border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                View All Services
              </button>
            </div>
          </div>
        </motion.div>

        {/* Overall Stats */}
        <IndustryOverallStats />
      </Container>
    </section>
  );
};
