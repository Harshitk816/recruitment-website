'use client';
import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiUsers,
  FiTrendingUp,
  FiArrowRight
} from 'react-icons/fi';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Executive Search', href: '/services#executive' },
      { label: 'Permanent Hiring', href: '/services#permanent' },
      { label: 'Contract Staffing', href: '/services#contract' },
      { label: 'Flexible Solutions', href: '/services#flexible' }
    ],
    industries: [
      { label: 'IT & Technology', href: '/industries#it' },
      { label: 'Finance & Accounting', href: '/industries#finance' },
      { label: 'Sales & Marketing', href: '/industries#sales' },
      { label: 'View All Industries', href: '/industries' }
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Process', href: '/services#process' },
      { label: 'Success Stories', href: '/industries#stories' },
      { label: 'Contact', href: '/contact' }
    ],
    resources: [
      { label: 'Career Tips', href: '#' },
      { label: 'Hiring Guide', href: '#' },
      { label: 'Industry Insights', href: '#' },
      { label: 'FAQ', href: '#' }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Container>
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 text-2xl font-bold mb-6">
                <div className="flex items-center">
                  <FiUsers className="text-blue-400 mr-1" />
                  <FiTrendingUp className="text-green-400" />
                </div>
                <span className="text-white">Workeraa</span>
              </Link>

              <p className="text-gray-300 leading-relaxed mb-6">
                Connecting exceptional talent with innovative companies across India and beyond. 
                We specialize in IT, Finance, Sales & Marketing recruitment with a proven track record of success.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <FiMail className="text-blue-400" />
                  <span className="text-gray-300">contact@workeraa.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="text-green-400" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMapPin className="text-purple-400" />
                  <span className="text-gray-300">India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: FiLinkedin, href: '#', color: 'hover:text-blue-400' },
                  { icon: FiTwitter, href: '#', color: 'hover:text-blue-300' },
                  { icon: FiFacebook, href: '#', color: 'hover:text-blue-500' },
                  { icon: FiInstagram, href: '#', color: 'hover:text-pink-400' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 transition-all ${social.color}`}
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center group"
                    >
                      <FiArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Industries</h3>
              <ul className="space-y-3">
                {footerLinks.industries.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center group"
                    >
                      <FiArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3 mb-8">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center group"
                    >
                      <FiArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Workeraa. All rights reserved.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
