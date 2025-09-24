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
  FiLinkedin,
  FiMail,
  FiPhone
} from 'react-icons/fi';

// Simple Founder Card Component
const FounderCard: React.FC<{
  name: string;
  title: string;
  phone: string;
  email: string;
  isLast?: boolean;
}> = ({ name, title, phone, email, isLast = false }) => {
  return (
    <div className={`w-full h-72 bg-gradient-to-br from-blue-100 via-purple-50 to-green-100 rounded-2xl overflow-hidden relative ${!isLast ? 'mb-12' : ''}`}>
      {/* Simple geometric shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-8 left-8 w-16 h-16 bg-blue-400 rounded-full"></div>
        <div className="absolute top-20 right-12 w-12 h-12 bg-green-400 rounded-lg rotate-45"></div>
        <div className="absolute bottom-16 left-12 w-8 h-8 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-24 right-20 w-6 h-6 bg-yellow-400 rounded-full"></div>
      </div>
      
      {/* Content */}
      <div className="flex items-center justify-center h-full relative z-10">
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <div className="text-lg font-semibold text-gray-600">{name}</div>
            <div className="text-sm text-gray-500">{title}</div>
            <div className="text-base text-gray-700 flex items-center justify-center">
              <FiPhone className="text-blue-600 mr-2" />
              <span>{phone}</span>
            </div>
            <div className="text-base text-gray-700 flex items-center justify-center">
              <FiMail className="text-blue-600 mr-2" />
              <span>{email}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 15px 15px, #000 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  const foundersData = [
    {
      name: "Akash Sehrawat",
      title: "Founder & CEO",
      phone: "9599656760",
      email: "akash@workeraa.co.in",
       description: "As the visionary founder of Workeraa, Akash brings over 12 years of strategic leadership in talent acquisition and business transformation. His entrepreneurial journey began with identifying the critical gap between skilled professionals and growing organizations. Under his leadership, Workeraa has evolved into a trusted recruitment partner that prioritizes quality matches over quantity. Akash's data-driven approach and commitment to innovation has established new industry standards in executive search and talent placement.",
    achievements: [
      "Founded and scaled Workeraa from startup to industry leader",
      "12+ years of executive leadership in recruitment and business development", 
      "Successfully built strategic partnerships with 500+ Fortune companies",
      "Pioneered innovative recruitment methodologies and AI-driven talent matching",
      "Recognized industry thought leader with 15+ speaking engagements at HR conferences"
    ]
    },
    {
      name: "Alisha Sharma",
      title: "Co-Founder & CEO",
      phone: "8700192565", 
      email: "alisha@workeraa.co.in",
      description: "Passionate about connecting exceptional talent with innovative companies, Alisha founded Workeraa to revolutionize how businesses find and hire top performers across India and beyond. With over 10 years of experience in talent acquisition and business development, Alisha has helped hundreds of companies scale their teams with the right people. Her vision is to create meaningful connections that drive both individual careers and business success forward.",
      achievements: [
        "7+ years in talent acquisition and recruitment",
        "Successfully placed 2000+ professionals",
        "Built partnerships with 400+ companies", 
        "Specialized expertise across IT, Finance, and Sales sectors"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-purple-800 text-sm font-medium mb-6">
            <FiHeart className="mr-2" />
            About Workeraa
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the <span className="text-blue-600">Visionary</span> Behind Workeraa
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about connecting exceptional talent with innovative companies, 
            our founder's vision drives everything we do at Workeraa.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Founder Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Akash Founder Details */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{foundersData[0].name}</h3>
              <p className="text-xl text-blue-600 font-medium mb-4">{foundersData[0].title}</p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                {foundersData[0].description}
              </p>

              {/* Key Achievements */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h4>
                {foundersData[0].achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FiCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                  <FiMail className="text-sm" />
                  <span>Get In Touch</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                  <FiLinkedin className="text-sm" />
                  <span>Connect on LinkedIn</span>
                </button>
              </div>
            </div>

            {/* Alisha Co-Founder Details */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{foundersData[1].name}</h3>
              <p className="text-xl text-blue-600 font-medium mb-4">{foundersData[1].title}</p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                {foundersData[1].description}
              </p>

              {/* Key Achievements */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h4>
                {foundersData[1].achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FiCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                  <FiMail className="text-sm" />
                  <span>Get In Touch</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                  <FiLinkedin className="text-sm" />
                  <span>Connect on LinkedIn</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Founder Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <FounderCard
              name={foundersData[0].name}
              title={foundersData[0].title}
              phone={foundersData[0].phone}
              email={foundersData[0].email}
            />
            <FounderCard
              name={foundersData[1].name}
              title={foundersData[1].title}
              phone={foundersData[1].phone}
              email={foundersData[1].email}
              isLast={true}
            />
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <FiTarget className="text-xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To bridge the gap between exceptional talent and forward-thinking companies, 
              creating meaningful connections that drive both individual careers and business success. 
              We believe the right person in the right role can transform entire organizations.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <FiStar className="text-xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To become India's most trusted recruitment partner, known for our integrity, 
              expertise, and commitment to excellence. We envision a future where every professional 
              finds their perfect role and every company builds their dream team.
            </p>
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
          <h3 className="text-3xl font-bold text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: FiHeart,
                title: "Integrity",
                description: "Honest, transparent relationships built on trust and reliability"
              },
              {
                icon: FiAward,
                title: "Excellence",
                description: "Delivering exceptional results that exceed client and candidate expectations"
              },
              {
                icon: FiUsers,
                title: "Partnership",
                description: "Collaborative approach focused on long-term success for all parties"
              },
              {
                icon: FiTrendingUp,
                title: "Innovation",
                description: "Embracing modern recruitment strategies and cutting-edge technology"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-2xl text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
