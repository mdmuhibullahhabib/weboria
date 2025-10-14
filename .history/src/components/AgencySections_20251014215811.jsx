"use client";

import React, { useState } from "react";
import {
  Aperture,
  Settings,
  Zap,
  Users,
  Shield,
  Code,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

// --- DATA ---
const mainServices = [
  { title: "DIGITAL MARKETING", icon: Aperture, subtitle: "MARKETING" },
  { title: "ENTERPRISE SOLUTIONS", icon: Settings, subtitle: "SOLUTIONS" },
  { title: "SEARCH ENGINE OPTIMIZATION", icon: Zap, subtitle: "OPTIMIZATION" },
];

const subServices = [
  { title: "PR SERVICES SOLUTIONS", icon: Users, subtitle: "BRANDING" },
  { title: "CYBER SECURITY SOLUTIONS", icon: Shield, subtitle: "SECURITY" },
  { title: "SOFTWARE DEVELOPMENT", icon: Code, subtitle: "SOLUTION" },
];

const processSteps = [
  {
    step: "01",
    title: "PLANNING & SKETCHING",
    description:
      "We strategize and outline a clear roadmap to bring your vision to life with precision and creativity.",
  },
  {
    step: "02",
    title: "DESIGN & DEVELOPMENT",
    description:
      "Our experts craft stunning, high-performing websites tailored to your brand with seamless functionality.",
  },
  {
    step: "03",
    title: "DIGITAL & CONSULTING",
    description:
      "We implement AI-powered marketing, SEO, and digital strategies to enhance visibility and business growth.",
  },
  {
    step: "04",
    title: "USER EXPERIENCE TESTING",
    description:
      "We refine and optimize every element to ensure a smooth, engaging, and conversion-driven user experience.",
  },
];

const faqItems = [
  {
    q: "WHY SHOULD YOU HIRE A DIGITAL MARKETING AGENCY?",
    a: "A digital marketing agency knows how to grow your business online.",
  },
  {
    q: "WHAT DOES A DIGITAL MARKETING AGENCY DO?",
    a: "Digital marketing agencies handle everything from SEO, PPC, content creation, and more.",
  },
  {
    q: "HOW DO I GET STARTED WITH VISUAL I'S SERVICES?",
    a: "Getting started is easy! Click the 'Contact Us' button or fill our form.",
  },
  {
    q: "CAN VISUAL I HELP IMPROVE MY WEBSITE'S RANKING?",
    a: "We specialize in high-impact SEO packages with keyword research and optimization.",
  },
  {
    q: "HOW TRANSPARENT IS VISUAL I IN ITS PROCESSES?",
    a: "Transparency is a core value. We provide detailed reports and direct access to project managers.",
  },
];

// --- COMPONENTS ---

const MotionWrapper = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const ServiceCard = ({ title, icon: Icon, subtitle, large = false, delay }) => (
  <MotionWrapper delay={delay}>
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`${
        large ? "p-10" : "p-6"
      } bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full hover:shadow-2xl hover:border-orange-500`}
    >
      <div className={`${large ? "p-4 mb-4 bg-gray-100 rounded-full" : "p-2 mb-2"}`}>
        <Icon
          className={`${
            large ? "w-16 h-16 text-gray-700" : "w-12 h-12 text-gray-700"
          } hover:text-orange-500 transition-colors`}
        />
      </div>
      <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
        {subtitle}
      </div>
      <h3 className="text-lg font-bold text-gray-800 leading-snug">{title}</h3>
    </motion.div>
  </MotionWrapper>
);

const ProcessStep = ({ step, title, description, isLast, delay }) => (
  <MotionWrapper delay={delay}>
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`flex-1 min-w-[200px] relative pb-12 ${!isLast ? "lg:pr-8" : ""}`}
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 150, delay }}
          className="relative z-10 w-16 h-16 flex items-center justify-center bg-gray-50 border-2 border-gray-300 rounded-full"
        >
          <span className="text-4xl font-extrabold text-gray-400">{step}</span>
        </motion.div>
        {!isLast && (
          <div className="absolute top-8 left-[50%] transform -translate-x-1/2 w-full lg:w-[calc(100%+2rem)] h-px border-t border-dashed border-gray-300 hidden lg:block"></div>
        )}
        <div className="mt-8 text-center px-4">
          <h3 className="text-lg font-bold text-gray-800 tracking-wider mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </motion.div>
  </MotionWrapper>
);

const FAQItem = ({ item, isOpen, onClick }) => (
  <motion.div
    layout
    className="border border-gray-200 rounded-xl mb-4 overflow-hidden shadow-sm hover:shadow-md transition-all"
  >
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full p-5 text-left font-semibold text-gray-800 bg-white hover:bg-gray-50 transition"
    >
      <span className="text-base md:text-lg">{item.q}</span>
      <ChevronDown
        className={`w-5 h-5 ml-4 transition-transform duration-300 ${
          isOpen ? "rotate-180 text-orange-500" : "text-gray-500"
        }`}
      />
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="px-5 overflow-hidden"
    >
      <p className="text-gray-600 text-sm pb-4">{item.a}</p>
    </motion.div>
  </motion.div>
);

// --- MAIN SECTION ---
const AgencySections = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const toggleFaq = (i) => setOpenFaqIndex(openFaqIndex === i ? null : i);

  return (
    <div className="font-inter bg-gray-50 min-h-screen">
      {/* Services Section */}
      <section className="py-8 bg-white">
        <MotionWrapper>
          <div className="container mx-auto px-4 max-w-7xl">
            <header className="text-center mb-12">
              <SectionTitle titleTop="OUR FULL RANGE" titleBottom="OF SERVICES MENU" />
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {mainServices.map((s, i) => (
                <ServiceCard key={i} {...s} large delay={i * 0.2} />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subServices.map((s, i) => (
                <ServiceCard key={i} {...s} delay={i * 0.2} />
              ))}
            </div>

            <div className="text-center">
              <Button className="my-8" text="View all services" href="/services" />
            </div>
          </div>
        </MotionWrapper>
      </section>

      {/* Process Section */}
      <section className="py-2 lg:py- bg-white">
        <MotionWrapper>
          <div className="container mx-auto px-4 max-w-7xl">
            <header className="text-center mb-16">
              <SectionTitle titleTop="WORKING" titleBottom="PROCESS" />
            </header>

            <div className="flex flex-col lg:flex-row justify-between relative">
              {processSteps.map((step, i) => (
                <ProcessStep key={i} {...step} delay={i * 0.2} isLast={i === processSteps.length - 1} />
              ))}
            </div>
          </div>
        </MotionWrapper>
      </section>

      {/* FAQ Section */}
      <section className="py-8 bg-white">
        <MotionWrapper>
          <div className="container mx-auto px-4 max-w-7xl">
            <header className="text-center mb-12">
              <SectionTitle titleTop="Got Questions?" />
            </header>

            <div className="max-w-4xl mx-auto">
              {faqItems.map((item, i) => (
                <FAQItem
                  key={i}
                  item={item}
                  isOpen={openFaqIndex === i}
                  onClick={() => toggleFaq(i)}
                />
              ))}
            </div>
          </div>
        </MotionWrapper>
      </section>
    </div>
  );
};

export default AgencySections;
