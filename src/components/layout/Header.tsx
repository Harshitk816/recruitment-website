"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { FiMenu, FiX, FiPhone, FiMail, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const serviceLinks = [
  { href: "/services/it-recruitment-agency", label: "IT & Technology" },
  { href: "/services/accounting-finance-recruitment-services", label: "Finance & Accounting" },
  { href: "/services/sales-marketing-recruitment-services", label: "Sales & Marketing" },
  { href: "/services/saas-cybersecurity-recruitment-services", label: "SaaS & Cybersecurity" },
  { href: "/services/manufacturing-operation-recruitment-services", label: "Manufacturing & Operations" },
  { href: "/services/bpo-customer-support-recruitment-services", label: "BPO & Customer Support" },
];



export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // mobile accordion
  const [dropdownOpen, setDropdownOpen] = useState(false); // desktop hover
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/industries", label: "Industries" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top Bar - UPDATED REAL DATA */}
      <div className="bg-gray-900 text-white text-sm py-2 hidden md:block">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a
                href="mailto:connect@workeraa.co.in"
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
              >
                <FiMail className="text-blue-400" />
                <span>connect@workeraa.co.in</span>
              </a>
              <a
                href="tel:+918700192565"
                className="flex items-center space-x-2 hover:text-green-200 transition-colors"
              >
                <FiPhone className="text-green-400" />
                <span>+91 8700192565</span>
              </a>
              <a
                href="tel:+919599656760"
                className="flex items-center space-x-2 hover:text-green-200 transition-colors"
              >
                <FiPhone className="text-green-400" />
                <span>+91 9599656760</span>
              </a>
            </div>
            <div className="text-gray-300">Hire Smarter, Grow Faster</div>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-4">
            <Logo size="xxs" />

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Services Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href="/services"
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                >
                  Services
                  <FiChevronDown className={`text-sm transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
                    >
                      <div className="p-2">
                        <Link
                          href="/services"
                          className="block px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors mb-1"
                        >
                          All Services →
                        </Link>
                        <div className="h-px bg-gray-100 mb-1" />
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="outline" href="/contact">
                Get In Touch
              </Button>
              {/* <Button href="/services">Our Services</Button> */}
            </div>

            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <FiX size={24} className="text-blue-600" />
                ) : (
                  <FiMenu size={24} className="text-blue-600" />
                )}
              </motion.div>
            </button>
          </div>
        </Container>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 bg-white"
            >
              <Container>
                <nav className="py-6 space-y-4">
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-700 hover:text-blue-600 font-medium py-2 text-lg transition-colors"
                  >
                    Home
                  </Link>

                  {/* Mobile Services Accordion */}
                  <div>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 font-medium py-2 text-lg transition-colors"
                    >
                      Services
                      {servicesOpen ? <FiChevronUp className="text-blue-600" /> : <FiChevronDown className="text-gray-400" />}
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-2 space-y-1 border-l-2 border-blue-100 ml-2 mt-1">
                            <Link
                              href="/services"
                              onClick={() => { setIsMenuOpen(false); setServicesOpen(false); }}
                              className="block text-blue-600 font-medium py-1.5 text-sm hover:text-blue-800 transition-colors"
                            >
                              All Services →
                            </Link>
                            {serviceLinks.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={() => { setIsMenuOpen(false); setServicesOpen(false); }}
                                className="block text-gray-600 hover:text-blue-600 py-1.5 text-sm transition-colors"
                              >
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-gray-700 hover:text-blue-600 font-medium py-2 text-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Contact Info - UPDATED REAL DATA */}
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <FiMail className="text-blue-600" />
                      <span>connect@workeraa.co.in</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <FiPhone className="text-green-600" />
                      <span>+91 8700192565 | +91 9599656760</span>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <Button
                      variant="outline"
                      href="/contact"
                      className="w-full justify-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get In Touch
                    </Button>
                    {/* <Button
                      href="/services"
                      className="w-full justify-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Our Services
                    </Button> */}
                  </div>
                </nav>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
