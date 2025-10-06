"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { FiMenu, FiX, FiPhone, FiMail } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/about", label: "About" },
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
              <div className="flex items-center space-x-2">
                <FiMail className="text-blue-400" />
                <span>connect@workeraa.co.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone className="text-green-400" />
                <span>+91 8700192565 | +91 9599656760</span>
              </div>
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
                Get Quote
              </Button>
              <Button href="/services">Our Services</Button>
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
                      Get Quote
                    </Button>
                    <Button
                      href="/services"
                      className="w-full justify-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Our Services
                    </Button>
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
