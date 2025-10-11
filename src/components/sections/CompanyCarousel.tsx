"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { FiAward } from "react-icons/fi";

// Company logos data with consistent dimensions
const companyLogos = [
  {
    name: "Accenture",
    logo: "/images/companies/accenture-6.svg",
  },
  {
    name: "HCL Tech", 
    logo: "/images/companies/hcltech-1.svg",
  },
  {
    name: "IBM",
    logo: "/images/companies/ibm.svg", 
  },
  {
    name: "Policy Bazaar",
    logo: "/images/companies/policy.svg",
  },
  {
    name: "Infosys",
    logo: "/images/companies/infosys-3.svg",
  },
  {
    name: "TCS",
    logo: "/images/companies/tcs.svg",
  },
  {
    name: "Tech Mahindra",
    logo: "/images/companies/tech_mahindra.svg",
  },
];

export const CompanyCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companyLogos.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            <FiAward className="mr-2" />
            Trusted Partners
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-600">Industry Leaders</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're proud to partner with some of the world's most innovative companies, 
            helping them build exceptional teams that drive success.
          </p>
        </motion.div>

        {/* Simple Centered Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Logo Container - Fixed grid approach */}
          <div className="flex justify-center items-center h-32">
            <div className="grid grid-cols-7 gap-8 items-center justify-items-center w-full max-w-6xl">
              {companyLogos.map((company, index) => {
                const isCenter = index === currentIndex;
                const distance = Math.abs(index - currentIndex);

                return (
                  <motion.div
                    key={company.name}
                    className="flex items-center justify-center"
                    animate={{
                      scale: isCenter ? 1.4 : distance === 1 ? 1 : 0.7,
                      opacity: isCenter ? 1 : distance === 1 ? 0.7 : 0.4,
                      y: isCenter ? -10 : 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="relative">
                      {/* Center highlight */}
                      {isCenter && (
                        <motion.div
                          className="absolute -inset-4 bg-blue-500/20 rounded-xl blur-md"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.4, 0.7, 0.4],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        />
                      )}

                      {/* Logo with consistent container */}
                      <div className="w-28 h-16 flex items-center justify-center relative z-10">
                        <Image
                          src={company.logo}
                          alt={`${company.name} logo`}
                          fill
                          className="object-contain filter brightness-100 contrast-100 saturate-100"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Company name for center item */}
          <motion.div
            key={currentIndex}
            className="text-center mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-lg font-semibold text-blue-700 bg-blue-100 px-6 py-2 rounded-full">
              {companyLogos[currentIndex].name}
            </span>
          </motion.div>
        </motion.div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {companyLogos.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
