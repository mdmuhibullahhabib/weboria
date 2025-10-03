"use client"

import React, { useState } from 'react';
import { 
  Aperture, Settings, Zap, Users, Shield, Code, Globe, ArrowRight, ChevronDown, CheckCircle, MessageSquare, BarChart, ExternalLink 
} from 'lucide-react';
import SectionTitle from './SectionTitle';

// --- DATA STRUCTURES ---

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
  { step: "01", title: "PLANNING & SKETCHING", description: "We strategize and outline a clear roadmap to bring your vision to life with precision and creativity." },
  { step: "02", title: "DESIGN & DEVELOPMENT", description: "Our experts craft stunning, high-performing websites tailored to your brand with seamless functionality." },
  { step: "03", title: "DIGITAL & CONSULTING", description: "We implement AI-powered marketing, SEO, and digital strategies to enhance visibility and business growth." },
  { step: "04", title: "USER EXPERIENCE TESTING", description: "We refine and optimize every element to ensure a smooth, engaging, and conversion-driven user experience." },
];

const stats = [
  { title: "Years Experience", value: "12+" },
  { title: "Completed Projects", value: "200+" },
  { title: "Satisfied Clients", value: "130+" },
];

const partners = [
  { name: "AWS", logo: "https://placehold.co/120x60/FF9900/ffffff?text=AWS" },
  { name: "Azure", logo: "https://placehold.co/120x60/0078D4/ffffff?text=Azure" },
  { name: "Pico", logo: "https://placehold.co/120x60/000000/ffffff?text=Pico" },
  { name: "Google Partner", logo: "https://placehold.co/120x60/4285F4/ffffff?text=Google" },
  { name: "ISO Certified", logo: "https://placehold.co/120x60/5CB85C/ffffff?text=ISO" },
  { name: "BASIS", logo: "https://placehold.co/120x60/800080/ffffff?text=BASIS" },
  { name: "GoodFirms", logo: "https://placehold.co/120x60/606060/ffffff?text=GoodFirms" },
  { name: "Trustpilot", logo: "https://placehold.co/120x60/00B67A/ffffff?text=Trustpilot" },
  { name: "DesignRush", logo: "https://placehold.co/120x60/000000/ffffff?text=DesignRush" },
  { name: "Clutch", logo: "https://placehold.co/120x60/F58220/ffffff?text=Clutch" },
];

const testimonials = [
  {
    quote: "We recently partnered with Visual i for the design and development of Pico's official website. From day one, the Visual i team demonstrated a strong understanding of our industry.",
    name: "Mohammad Mosabbir Rana",
    title: "Senior Manager & Business Revenue",
    companyLogo: "https://placehold.co/80x40/000000/ffffff?text=Pico",
    image: "https://placehold.co/80x80/2563eb/ffffff?text=MR",
  },
  {
    quote: "Their friendly approach and deep knowledge of digital marketing strategy made our campaign a huge success.",
    name: "Jane Doe",
    title: "Head of Marketing",
    companyLogo: "https://placehold.co/80x40/10b981/ffffff?text=BizCorp",
    image: "https://placehold.co/80x80/ef4444/ffffff?text=JD",
  },
];

const blogPosts = [
  { category: "AWARENESS", title: "TOP WEB DEVELOPMENT SERVICE IN BANGLADESH...", image: "https://placehold.co/400x250/fff/2563eb?text=Smart+Website+%26+Mobile" },
  { category: "BRANDING", title: "VISUAL I'S SEO STRATEGY TOOK CROWN BANQU...", image: "https://placehold.co/400x250/fff/f59e0b?text=Case+Study+Performance" },
  { category: "AWARENESS", title: "WHY YOU SHOULD BUILD A MOBILE APP FOR YO...", image: "https://placehold.co/400x250/fff/ef4444?text=Mobile+App+Development" },
];

const faqItems = [
  { q: "WHY SHOULD YOU HIRE A DIGITAL MARKETING AGENCY?", a: "A digital marketing agency knows how to grow your business online." },
  { q: "WHAT DOES A DIGITAL MARKETING AGENCY DO?", a: "Digital marketing agencies handle everything from SEO, PPC, content creation, and more." },
  { q: "HOW DO I GET STARTED WITH VISUAL I'S SERVICES?", a: "Getting started is easy! Click the 'Contact Us' button or fill our form." },
  { q: "CAN VISUAL I HELP IMPROVE MY WEBSITE'S RANKING?", a: "We specialize in high-impact SEO packages with keyword research and optimization." },
  { q: "HOW TRANSPARENT IS VISUAL I IN ITS PROCESSES?", a: "Transparency is a core value. We provide detailed reports and direct access to project managers." },
];

// --- REUSABLE COMPONENTS ---

const ServiceCard = ({ title, icon: Icon, subtitle, large = false }) => (
  <div className={`${large ? 'p-10' : 'p-6'} bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-blue-500 flex flex-col items-center text-center h-full`}>
    <div className={`${large ? 'p-4 mb-4 bg-gray-100 rounded-full' : 'p-2 mb-2'}`}>
      <Icon className={`${large ? 'w-16 h-16 text-gray-700' : 'w-12 h-12 text-gray-700'} hover:text-blue-600 transition-colors`} />
    </div>
    <div className={`text-xs font-semibold uppercase tracking-widest text-gray-400 ${large ? 'mb-4' : 'mb-2'}`}>{subtitle}</div>
    <h3 className={`${large ? 'text-xl' : 'text-lg'} font-bold text-gray-800 leading-snug`}>{title}</h3>
  </div>
);

const ProcessStep = ({ step, title, description, isLast }) => (
  <div className={`flex-1 min-w-[200px] relative pb-12 ${!isLast ? 'lg:pr-8' : ''}`}>
    <div className="flex flex-col items-center">
      <div className="relative z-10 w-16 h-16 flex items-center justify-center bg-gray-50 border-2 border-gray-300 rounded-full">
        <span className="text-4xl font-extrabold text-gray-400">{step}</span>
      </div>
      {!isLast && <div className="absolute top-8 left-[50%] transform -translate-x-1/2 w-full lg:w-[calc(100%+2rem)] h-px border-t border-dashed border-gray-300 hidden lg:block"></div>}
      <div className="absolute top-16 w-px h-12 bg-gray-300 block lg:hidden"></div>
      <div className="mt-8 text-center px-4">
        <h3 className="text-lg font-bold text-gray-800 tracking-wider mb-2">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  </div>
);

const FAQItem = ({ item, isOpen, onClick }) => (
  <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden">
    <button
      className="flex justify-between items-center w-full p-5 text-left font-semibold text-gray-800 bg-white hover:bg-gray-50 transition duration-150"
      onClick={onClick}
    >
      <span className="text-base md:text-lg">{item.q}</span>
      <ChevronDown className={`w-5 h-5 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : 'text-gray-500'}`} />
    </button>
    <div className={`px-5 pt-0 transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`} style={{ transition: 'max-height 0.5s ease-in-out' }}>
      <p className="text-gray-600 text-sm">{item.a}</p>
    </div>
  </div>
);

// --- MAIN COMPONENT ---

const AgencySections = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  return (
    <div className="font-inter bg-gray-50 min-h-screen">
      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <header className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600">OUR FULL RANGE</h2>
            <p className="text-4xl md:text-5xl font-extrabold text-yellow-600 mt-1">OF SERVICES MENU</p>
 <SectionTitle titleTop={"OUR FULL RANGE"} titleBottom={"OF SERVICES MENU"}/>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {mainServices.map((s,i) => <ServiceCard key={i} {...s} large />)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subServices.map((s,i) => <ServiceCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <header className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600">WORKING</h2>
            <p className="text-4xl md:text-5xl font-extrabold text-yellow-600 mt-1">PROCESS</p>
          </header>
          <div className="flex flex-col lg:flex-row justify-between relative">
            {processSteps.map((step,i) => <ProcessStep key={i} {...step} isLast={i===processSteps.length-1}/>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <header className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600">Got Questions?</h2>
          </header>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item,i) => <FAQItem key={i} item={item} isOpen={openFaqIndex===i} onClick={()=>toggleFaq(i)} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgencySections;
