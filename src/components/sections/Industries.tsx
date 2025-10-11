"use client";
import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
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
  FiClock,
  FiShield
} from "react-icons/fi";

import { PiMegaphone } from "react-icons/pi";

// Simplified industries data - FIXED TYPOS
const industriesData = [
  {
    id: 1,
    name: "IT & Technology",
    subtitle: "Driving innovation with the right tech minds",
    description:
      "From startups to MNCs, we connect organizations with exceptional technical talent that drives digital transformation and innovation.",
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
      { title: "Product Managers", icon: FiBriefcase },
    ],
  },
  {
    id: 2,
    name: "Finance & Accounting",
    subtitle: "Smart talent for smarter decisions",
    description:
      "We specialize in placing finance professionals who combine analytical expertise with strategic thinking to drive business growth and financial success.",
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
      { title: "Investment Advisors", icon: FiTrendingUp },
    ],
  },
  {
    id: 3,
    name: "Sales & Marketing",
    subtitle: "Growth-focused professionals who deliver results",
    description:
      "Connect with sales and marketing leaders who understand modern customer journeys and can drive sustainable revenue growth for your organization.",
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
      { title: "Brand Managers", icon: FiAward },
    ],
  },
  {
    id: 4,
    name: "Manufacturing & Operations",
    subtitle: "Skilled workforce powering industries",
    description:
      "We provide skilled professionals to ensure streamlined operations and productivity.",
    icon: FiUsers,
    primaryColor: "text-yellow-600",
    bgGradient: "from-yellow-400 to-yellow-200",
    bgColor: "bg-yellow-50",
    iconBg: "bg-yellow-100",
    borderColor: "border-yellow-200",
    roles: [
      { title: "Production Managers", icon: FiBriefcase },
      { title: "Quality Control", icon: FiAward },
      { title: "Operations Supervisors", icon: FiBarChart },
    ],
  },
  {
    id: 5,
    name: "Healthcare & Pharma",
    subtitle: "Compassionate & qualified experts in care",
    description:
      "From nurses to pharmacists, access compassionate experts ensuring best standards.",
    icon: FiUsers,
    primaryColor: "text-pink-600",
    bgGradient: "from-pink-400 to-pink-200",
    bgColor: "bg-pink-50",
    iconBg: "bg-pink-100",
    borderColor: "border-pink-200",
    roles: [
      { title: "Nurses", icon: FiTarget },
      { title: "Pharmacists", icon: FiAward },
      { title: "Healthcare Administrators", icon: FiBriefcase },
    ],
  },
  {
    id: 6,
    name: "Retail & E-Commerce",
    subtitle: "Building customer-first businesses",
    description:
      "Recruit talented professionals to enhance your retail and online presence.",
    icon: FiUsers,
    primaryColor: "text-red-600",
    bgGradient: "from-red-400 to-red-200",
    bgColor: "bg-red-50",
    iconBg: "bg-red-100",
    borderColor: "border-red-200",
    roles: [
      { title: "Store Managers", icon: FiBriefcase },
      { title: "E-Com Specialists", icon: FiCode },
      { title: "Merchandisers", icon: FiAward },
    ],
  },
  {
    id: 7,
    name: "Logistics & Supply Chain",
    subtitle: "Efficiency through the right talent",
    description:
      "Logistics and supply chain specialists for end-to-end operational excellence.",
    icon: FiUsers,
    primaryColor: "text-orange-600", // FIXED: Changed from text-orange-400 to text-orange-600
    bgGradient: "from-orange-500 to-orange-300", // FIXED: Better gradient
    bgColor: "bg-orange-50", // FIXED: Was bg-orange-30
    iconBg: "bg-orange-100", // FIXED: Was bg-orange-50
    borderColor: "border-orange-200", // FIXED: Was border-orange-100
    roles: [
      { title: "Logistics Coordinators", icon: FiTarget },
      { title: "Supply Chain Analysts", icon: FiBriefcase },
    ],
  },
  {
    id: 8,
    name: "BPO & Customer Support",
    subtitle: "Voices that build stronger connections",
    description:
      "Find the best voices to represent and support your customers world-wide.",
    icon: FiUsers,
    primaryColor: "text-teal-600",
    bgGradient: "from-teal-400 to-teal-200",
    bgColor: "bg-teal-50",
    iconBg: "bg-teal-100",
    borderColor: "border-teal-200",
    roles: [
      { title: "Customer Support Executives", icon: FiBriefcase },
      { title: "BPO Team Leads", icon: FiAward },
    ],
  },
  {
    id: 9,
    name: "SaaS & Cybersecurity",
    subtitle: "Securing digital transformation with expert talent",
    description:
      "We connect organizations with cybersecurity experts and SaaS professionals who protect and scale cloud-first businesses in an increasingly digital world.",
    icon: FiShield,
    primaryColor: "text-indigo-600", // FIXED: Changed from text-orange-600 to avoid duplicate
    bgGradient: "from-indigo-500 to-purple-400", // FIXED: Changed from orange
    bgColor: "bg-indigo-50", // FIXED: Changed from bg-orange-50
    iconBg: "bg-indigo-100", // FIXED: Changed from bg-orange-100
    borderColor: "border-indigo-200", // FIXED: Changed from border-orange-200
    roles: [
      { title: "Security Engineers", icon: FiShield },
      { title: "SaaS Architects", icon: FiTarget },
      { title: "DevSecOps Specialists", icon: FiCode },
      { title: "Cybersecurity Analysts", icon: FiAward },
    ],
  },
];

// Fixed Industry Card Component
interface IndustryCardProps {
  industry: (typeof industriesData)[0];
  index: number;
}

// ADDED: Helper function for light colors
const getLightColor = (primaryColor: string): string => {
  const lightColorMap: { [key: string]: string } = {
    'text-blue-600': 'text-blue-200',
    'text-green-600': 'text-green-200',
    'text-purple-600': 'text-purple-200',
    'text-yellow-600': 'text-yellow-200',
    'text-pink-600': 'text-pink-200',
    'text-red-600': 'text-red-200',
    'text-orange-600': 'text-orange-200',
    'text-teal-600': 'text-teal-200',
    'text-indigo-600': 'text-indigo-200',
  };
  
  return lightColorMap[primaryColor] || 'text-white';
};

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
      <div
        className={`
        relative rounded-3xl border-2 ${industry.borderColor} bg-white shadow-xl
        transition-all duration-500 hover:shadow-2xl hover:-translate-y-2
        overflow-hidden h-full flex flex-col
      `}
      >
        {/* Background Image - Top Half Only with Enhanced Overlay */}
        <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden rounded-t-3xl">
          {/* Background Image with Zoom Effect */}
          <motion.div
            animate={{
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full"
            style={{
              backgroundImage: `url('/images/industries/${getImageName(industry.name)}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat',
            }}
          />
          
          {/* Blur Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px]" />
          
          {/* FIXED: Enhanced Gradient for Better Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-white" />
          
          {/* Industry Color Gradient on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovered ? 0.15 : 0,
            }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient}/50`}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-20 p-8 h-full flex flex-col">
          {/* Header Section - Enhanced for visibility over image */}
          <div className="mb-6">
            {/* Icon - More prominent with white background */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`
                w-20 h-20 rounded-2xl bg-white/95 flex items-center justify-center mb-6
                transition-all duration-300 shadow-xl border-2 border-white/50
                backdrop-blur-md
              `}
            >
              <industry.icon className={`text-3xl ${industry.primaryColor}`} />
            </motion.div>

            {/* FIXED: Title with proper light color mapping */}
            <h3 className={`text-2xl font-bold ${getLightColor(industry.primaryColor)} mb-3 drop-shadow-lg`}>
              {industry.name}
            </h3>
            
            {/* Subtitle - Light white text with shadow */}
            <p className="text-lg font-medium mb-4 text-white/90 drop-shadow-md">
              {industry.subtitle}
            </p>
          </div>

          {/* Description - Clean white background area */}
          <div className="mb-6">
            <p className="text-gray-800 leading-relaxed drop-shadow-sm [text-shadow:_0_1px_2px_rgb(255_255_255_/_0.8)]">
              {industry.description}
            </p>

          </div>

          {/* Key Roles Grid - Clean white background area */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Key Roles We Fill
            </h4>
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
                  <div
                    className={`w-8 h-8 rounded-lg ${industry.iconBg} flex items-center justify-center flex-shrink-0`}
                  >
                    <role.icon className={`text-sm ${industry.primaryColor}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      {role.title}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-6 right-6 w-12 h-12 opacity-20 z-10">
          <div className={`w-full h-full rounded-full ${industry.iconBg}`} />
        </div>
        <div className="absolute bottom-6 right-6 w-8 h-8 opacity-30 z-10">
          <div className={`w-full h-full rounded-full ${industry.iconBg}`} />
        </div>
      </div>
    </motion.div>
  );
};

// Helper function to map industry names to image filenames
const getImageName = (industryName: string): string => {
  const imageMap: { [key: string]: string } = {
    "IT & Technology": "it.jpg",
    "Finance & Accounting": "finance.jpg",
    "Sales & Marketing": "sales.jpg",
    "Manufacturing & Operations": "manufacturing.jpg",
    "Healthcare & Pharma": "healthcare.jpg",
    "Retail & E-Commerce": "retail.jpg",
    "Logistics & Supply Chain": "logistics.jpg",
    "BPO & Customer Support": "bpo.jpg",
    "SaaS & Cybersecurity": "saas.jpg",
  };
  
  return imageMap[industryName] || "it.jpg";
};

const IndustryOverallStats: React.FC = () => {
  const overallStats = [
    {
      icon: FiUsers,
      number: "500+",
      label: "Successful Placements",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: FiBriefcase,
      number: "80+",
      label: "Partner Companies",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      icon: FiClock,
      number: "30%",
      label: "Faster Hiring Process",
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
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
            <div
              className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center shadow-lg`}
            >
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
    <section
      id="industries"
      className="py-10 bg-gradient-to-b from-gray-50 to-white"
    >
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
            Industry Solutions <span className="text-blue-600">Tailored for You</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We believe exceptional professionals are the foundation of every
            successful business. That&apos;s why we recruit across diverse
            sectors with precision, expertise, and deep industry knowledge.
          </p>
        </motion.div>

        {/* Industries Grid - No Buttons */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {industriesData.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
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
              Don&apos;t See Your Industry? We&apos;ve Got You Covered
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our recruitment expertise extends beyond these core sectors.
              Let&apos;s discuss your specific industry needs and talent
              requirements.
            </p>
            <div className="flex justify-center">
              <Button
                href="/contact"
                size="lg"
                className="bg-white !text-gray-900 hover:bg-gray-100 hover:text-gray-800 shadow-md focus:ring-white focus:ring-offset-2"
              >
                Discuss Your Needs
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Overall Stats */}
        <IndustryOverallStats />
      </Container>
    </section>
  );
};
