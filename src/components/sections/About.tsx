'use client';
import React from 'react';
import { Container } from '../ui/Container';
import { motion } from 'framer-motion';
import { 
  FiAward, 
  FiUsers, 
  FiTarget, 
  FiStar,
  FiHeart,
  FiTrendingUp,
  FiCheckCircle,
  FiMail,
  FiPhone
} from 'react-icons/fi';

// Primary Founder Card (Akash) - Blue Colors
const FounderCardPrimary: React.FC<{
  name: string;
  title: string;
  phone: string;
  email: string;
  description: string;
  achievements: string[];
}> = ({ name, title, phone, email, description, achievements }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Main Hero Card */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 rounded-3xl p-8 text-white relative overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32"></div>
        </div>
        
        <div className="relative z-10 grid md:grid-cols-5 gap-8 items-center">
          {/* Left Content - 3 columns */}
          <div className="md:col-span-3 space-y-6">
            <div className="mb-4">
              <span className="text-blue-200 text-sm font-medium tracking-wider uppercase">Co-Founder</span>
            </div>
            
            <div>
              <h3 className="text-4xl font-bold mb-2">{name}</h3>
              <p className="text-xl text-blue-200 font-medium mb-4">{title}</p>
              <p className="text-white/90 leading-relaxed text-lg">{description}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              {/* ADDED: Phone click functionality */}
              <a 
                href={`tel:+91${phone}`}
                className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-full px-4 py-2 hover:bg-opacity-20 transition-all cursor-pointer"
              >
                <FiPhone className="text-blue-800" />
                <span className="text-sm text-blue-800">{phone}</span>
              </a>
              {/* ADDED: Email click functionality */}
              <a 
                href={`mailto:${email}`}
                className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-full px-4 py-2 hover:bg-opacity-20 transition-all cursor-pointer"
              >
                <FiMail className="text-blue-800" />
                <span className="text-sm text-blue-800">{email}</span>
              </a>
            </div>

            <div className="flex space-x-4">
              {/* ADDED: Email click functionality */}
              <a 
                href={`mailto:${email}`}
                className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all flex items-center space-x-2"
              >
                <FiMail className="text-sm" />
                <span>Connect</span>
              </a>
              {/* COMMENTED: LinkedIn button for Akash */}
              {/* <button className="border border-white border-opacity-30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:bg-opacity-10 transition-all">
                LinkedIn
              </button> */}
            </div>
          </div>

          {/* Right Visual - 2 columns */}
          <div className="md:col-span-2">
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold mb-4 text-blue-500">Key Achievements</h4>
              <div className="space-y-3">
                {achievements.slice(0, 3).map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FiCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-black/90 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Co-Founder Card (Alisha) - Same Layout, Green Colors, Flipped Left-Right
const FounderCardSecondary: React.FC<{
  name: string;
  title: string;
  phone: string;
  email: string;
  description: string;
  achievements: string[];
}> = ({ name, title, phone, email, description, achievements }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Main Hero Card - Same Layout but Green Colors */}
      <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 rounded-3xl p-8 text-white relative overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-y-48 -translate-x-48"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-y-32 translate-x-32"></div>
        </div>
        
        <div className="relative z-10 grid md:grid-cols-5 gap-8 items-center">
          {/* Left Visual - 2 columns (Flipped) */}
          <div className="md:col-span-2 order-2 md:order-1">
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold mb-4 text-emerald-400">Key Achievements</h4>
              <div className="space-y-3">
                {achievements.slice(0, 3).map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FiCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-black/90 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - 3 columns (Flipped) */}
          <div className="md:col-span-3 space-y-6 order-1 md:order-2">
            <div className="mb-4">
              <span className="text-emerald-200 text-sm font-medium tracking-wider uppercase">Co-Founder</span>
            </div>
            
            <div>
              <h3 className="text-4xl font-bold mb-2">{name}</h3>
              <p className="text-xl text-emerald-200 font-medium mb-4">{title}</p>
              <p className="text-white/90 leading-relaxed text-lg">{description}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              {/* ADDED: Phone click functionality */}
              <a 
                href={`tel:+91${phone}`}
                className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-full px-4 py-2 hover:bg-opacity-20 transition-all cursor-pointer"
              >
                <FiPhone className="text-emerald-500" />
                <span className="text-sm text-emerald-500">{phone}</span>
              </a>
              {/* ADDED: Email click functionality */}
              <a 
                href={`mailto:${email}`}
                className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-full px-4 py-2 hover:bg-opacity-20 transition-all cursor-pointer"
              >
                <FiMail className="text-emerald-500" />
                <span className="text-sm text-emerald-500">{email}</span>
              </a>
            </div>

            <div className="flex space-x-4">
              {/* ADDED: Email click functionality */}
              <a 
                href={`mailto:${email}`}
                className="bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-all flex items-center space-x-2"
              >
                <FiMail className="text-sm" />
                <span>Connect</span>
              </a>
              {/* ADDED: Alisha's LinkedIn functionality */}
              <a 
                href="https://www.linkedin.com/in/alisha-sharma-18b570367/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white border-opacity-30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-emerald-500 hover:bg-opacity-10 transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Interactive Stats Component (same as before)
const InteractiveStats: React.FC = () => {
  const stats = [
    { icon: FiUsers, number: "2000+", label: "Professionals Placed", color: "text-blue-600", bg: "bg-blue-100" },
    { icon: FiTarget, number: "400+", label: "Partner Companies", color: "text-green-600", bg: "bg-green-100" },
    { icon: FiAward, number: "97%", label: "Success Rate", color: "text-purple-600", bg: "bg-purple-100" },
    { icon: FiTrendingUp, number: "12+", label: "Years Experience", color: "text-orange-600", bg: "bg-orange-100" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white p-6 rounded-2xl text-center shadow-lg border border-gray-100 cursor-default"
        >
          <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
            <stat.icon className={`text-2xl ${stat.color}`} />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
          <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const About: React.FC = () => {
  const foundersData = [
    // SWAPPED: Alisha now comes first (index 0)
    {
      name: "Alisha Sharma",
      title: "Co-Founder & CEO",
      phone: "8700192565",
      email: "alisha@workeraa.co.in",
      description: "Passionate about connecting exceptional talent with innovative companies, Alisha co-founded Workeraa to revolutionize how businesses find and hire top performers across India and beyond. With over 7 years of experience in talent acquisition, she has helped hundreds of companies scale their teams.",
      achievements: [
        "Founded and scaled Workeraa from startup to industry leader",
        "7+ years in talent acquisition and recruitment excellence",
        "Specialized expertise across IT, Finance, and Sales & Marketing sectors",
        "Successfully placed 2000+ professionals across various industries",
        "Built strategic partnerships with 400+ companies nationwide",
        
      ]
    },
    // SWAPPED: Akash now comes second (index 1)
    {
      name: "Akash Sehrawat",
      title: "Co-Founder & CEO", 
      phone: "9599656760",
      email: "akash@workeraa.co.in",
      description: "As the visionary co-founder of Workeraa, Akash brings over 5 years of strategic leadership in talent acquisition and business transformation. His entrepreneurial journey began with identifying the critical gap between skilled professionals and growing organizations.",
      achievements: [
        "Pioneered innovative recruitment methodologies and AI-driven talent matching",
        "Recognized industry thought leader with 15+ speaking engagements",
        "Successfully built strategic partnerships with 500+ Fortune companies",
        "12+ years of executive leadership in recruitment and business development",
        
        
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-gray-50 to-blue-50">
      <Container>
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-100 via-purple-50 to-green-100 rounded-full text-purple-800 text-sm font-medium mb-8">
            <FiHeart className="mr-2" />
            Meet Our Leadership
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The <span className="text-blue-600">Visionaries</span> Behind Workeraa
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Two passionate leaders united by a common vision: revolutionizing how exceptional talent 
            connects with innovative companies across India and beyond.
          </p>
        </motion.div>

        {/* SWAPPED: Founders Section - Alisha first, Akash second */}
        <div className="space-y-16 mb-20">
          <FounderCardSecondary {...foundersData[0]} />  {/* Alisha (Green card) */}
          <FounderCardPrimary {...foundersData[1]} />    {/* Akash (Blue card) */}
        </div>

        {/* Interactive Stats */}
        <InteractiveStats />

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 my-20"
        >
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300 bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-400 bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                  <FiTarget className="text-xl text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                To bridge the gap between exceptional talent and forward-thinking companies, 
                creating meaningful connections that drive both individual careers and business success.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-300 bg-opacity-10 rounded-full translate-y-16 -translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-400 bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                  <FiStar className="text-xl text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-green-100 leading-relaxed">
                To become India&apos;s most trusted recruitment partner, known for our integrity, 
                expertise, and commitment to excellence in connecting talent with opportunity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          
          <h3 className="text-4xl font-bold text-gray-900 mb-16">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: FiHeart, title: "Integrity", description: "Honest, transparent relationships built on trust", color: "text-red-600", bg: "bg-red-100" },
              { icon: FiAward, title: "Excellence", description: "Delivering exceptional results that exceed expectations", color: "text-blue-600", bg: "bg-blue-100" },
              { icon: FiUsers, title: "Partnership", description: "Collaborative approach focused on long-term success", color: "text-green-600", bg: "bg-green-100" },
              { icon: FiTrendingUp, title: "Innovation", description: "Embracing modern recruitment strategies and technology", color: "text-purple-600", bg: "bg-purple-100" }
            ].map((value, index) => (
              
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center cursor-default"
              >
                <div className={`w-16 h-16 ${value.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className={`text-2xl ${value.color}`} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
