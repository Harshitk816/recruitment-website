"use client";
import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "HR Director",
    company: "Tech Mahindra",
    image: "RS",
    rating: 5,
    text: "Workeraa transformed our hiring process completely. They found us 3 senior engineers within 10 days — candidates that perfectly matched our technical requirements and company culture. Highly recommended!",
  },
  {
    name: "Priya Mehta",
    role: "Talent Acquisition Lead",
    company: "Infosys",
    image: "PM",
    rating: 5,
    text: "We've worked with many recruitment agencies but Workeraa stands out for their speed and quality. Their understanding of the IT sector is exceptional. Every candidate they sent was interview-ready.",
  },
  {
    name: "Amit Verma",
    role: "CFO",
    company: "HDFC Securities",
    image: "AV",
    rating: 5,
    text: "Finding qualified finance professionals is always challenging. Workeraa delivered beyond expectations — 5 placements in our finance team within 3 weeks. Their screening process is thorough and reliable.",
  },
  {
    name: "Sneha Kapoor",
    role: "VP of Operations",
    company: "Apollo",
    image: "SK",
    rating: 5,
    text: "Workeraa helped us scale our logistics team rapidly during peak season. They understood our urgency and delivered quality candidates on time. A truly dependable recruitment partner.",
  },
  {
    name: "Vikram Singh",
    role: "CEO",
    company: "HealthPlus India",
    image: "VS",
    rating: 5,
    text: "As a healthcare startup, finding specialized talent is tough. Workeraa's deep network in the healthcare sector helped us hire 8 professionals in under a month. Outstanding service!",
  },
];

export const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            Client Testimonials
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Trusted by leading companies across India for reliable and
            efficient recruitment solutions.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10"
              >
                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="text-yellow-400 fill-yellow-400 text-lg"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {testimonials[current].image}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonials[current].name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[current].role}
                      {/* <span className="text-blue-600 font-medium">
                        {testimonials[current].company}
                      </span> */}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mt-8">
            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-blue-600"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex space-x-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};