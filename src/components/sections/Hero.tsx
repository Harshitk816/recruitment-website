"use client";
import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiUsers,
  FiTrendingUp,
  FiTarget,
  FiStar,
  FiCheckCircle,
} from "react-icons/fi";
import { Link } from "lucide-react";

// Hero Image Placeholder Component
const HeroImagePlaceholder: React.FC = () => {
  return (
    <div className="relative">
      <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-2xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full"></div>
          <div className="absolute top-32 right-16 w-16 h-16 bg-green-500 rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-purple-500 rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-8 h-8 bg-yellow-500 rounded-full"></div>
        </div>

        <div className="flex items-center justify-center h-full relative z-10">
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-6 text-4xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-blue-600"
              >
                <FiUsers />
              </motion.div>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-green-600"
              >
                <FiTrendingUp />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-purple-600"
              >
                <FiTarget />
              </motion.div>
            </div>

            {/* Placeholder text */}
            <div className="space-y-2">
              <div className="text-gray-400 font-medium">Professional Team</div>
              <div className="text-2xl font-bold text-gray-600">
                Connecting Talent
              </div>
              <div className="text-gray-400">Building Success Together</div>
            </div>
          </div>
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, #000 2px, transparent 2px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg"
      >
        <FiStar className="text-yellow-500 text-xl" />
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg"
      >
        <FiCheckCircle className="text-green-500 text-xl" />
      </motion.div>
    </div>
  );
};

// Statistics Component
const StatsSection: React.FC = () => {
  const stats = [
    { number: "500+", label: "Companies Served", icon: FiUsers },
    { number: "2000+", label: "Successful Placements", icon: FiCheckCircle },
    { number: "95%", label: "Client Satisfaction", icon: FiStar },
    { number: "24h", label: "Average Response Time", icon: FiTarget },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center mb-2">
            <stat.icon className="text-2xl text-blue-600" />
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            {stat.number}
          </div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative py-10 md:py-16 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md mb-6">
                <FiStar className="text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">
                  #1 Recruitment Agency in India
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-gradient">Hire Smarter,</span>
                <br />
                <span className="text-gray-900">Grow Faster</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with top talent across{" "}
                <strong>IT, Finance, Sales & Marketing</strong>. We deliver
                quality candidates that drive your business forward with our
                proven recruitment solutions.
              </p>

              {/* Key Benefits */}
              <div className="space-y-3 mb-8">
                {[
                  "Executive & senior-level recruitment",
                  "Permanent hiring for long-term success",
                  "Contract & project-based staffing",
                  "Industry experts across multiple sectors",
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-center space-x-3"
                  >
                    <FiCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link></Link>
                <Button size="lg" className="group" href="/contact">
                  Get Started Today
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" href="/services">
                  Explore Services
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <FiCheckCircle className="text-green-500" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FiCheckCircle className="text-green-500" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FiCheckCircle className="text-green-500" />
                  <span>Money Back Guarantee</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <HeroImagePlaceholder />
          </motion.div>
        </div>

        {/* Statistics Section */}
        {/* <StatsSection /> */}
      </Container>
    </section>
  );
};
