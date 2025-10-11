"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { FiAward } from "react-icons/fi";

// Company logos data
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

        {/* Fixed Carousel - No Overflow Issues */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Mobile: Show only center logo */}
          <div className="block md:hidden">
            <div className="flex justify-center items-center h-32 px-4">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="relative mb-4">
                  <motion.div
                    className="absolute -inset-6 bg-blue-500/20 rounded-xl blur-md"
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
                  {/* Fixed mobile container - larger to prevent clipping */}
                  <div className="w-40 h-24 flex items-center justify-center relative z-10 p-2">
                    <Image
                      src={companyLogos[currentIndex].logo}
                      alt={`${companyLogos[currentIndex].name} logo`}
                      fill
                      className="object-contain p-2" // Added padding inside image
                    />
                  </div>
                </div>
                <div className="text-sm font-semibold text-blue-700 bg-blue-100 px-4 py-1 rounded-full">
                  {companyLogos[currentIndex].name}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Desktop: Show all logos with proper spacing */}
          <div className="hidden md:block">
            <div className="flex justify-center items-center h-40 relative px-8"> {/* Increased height and added padding */}
              <div className="flex items-center justify-center space-x-12 lg:space-x-16"> {/* Increased spacing */}
                {companyLogos.map((company, index) => {
                  const isCenter = index === currentIndex;
                  const distance = Math.abs(index - currentIndex);
                  const isVisible = distance <= 3;

                  if (!isVisible) return null;

                  return (
                    <motion.div
                      key={company.name}
                      className="flex items-center justify-center"
                      animate={{
                        // Reduced scale to prevent overflow
                        scale: isCenter ? 1.2 : distance === 1 ? 0.9 : 0.7,
                        opacity: isCenter ? 1 : distance === 1 ? 0.7 : 0.4,
                        y: isCenter ? -5 : 0, // Reduced Y movement
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="relative">
                        {/* Center highlight with proper spacing */}
                        {isCenter && (
                          <motion.div
                            className="absolute -inset-8 bg-blue-500/20 rounded-xl blur-md"
                            animate={{
                              scale: [1, 1.05, 1], // Reduced scale animation
                              opacity: [0.4, 0.7, 0.4],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          />
                        )}

                        {/* Logo containers with padding to prevent clipping */}
                        <div className={`
                          ${isCenter ? 'w-36 h-24' : distance === 1 ? 'w-28 h-18' : 'w-24 h-16'}
                          flex items-center justify-center relative z-10 p-3
                        `}>
                          <Image
                            src={company.logo}
                            alt={`${company.name} logo`}
                            fill
                            className="object-contain p-2" // Padding inside each image
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Company name - positioned with enough space */}
            <motion.div
              key={currentIndex}
              className="text-center mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-lg font-semibold text-blue-700 bg-blue-100 px-6 py-2 rounded-full">
                {companyLogos[currentIndex].name}
              </span>
            </motion.div>
          </div>
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
