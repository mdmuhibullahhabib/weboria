"use client";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";


// --- Icon Placeholders (Simulated SVGs) ---
const ArrowRight = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-arrow-right"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ArrowLeft = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-arrow-left"
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const Briefcase = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-briefcase"
  >
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V19c0-1.105-.895-2-2-2h-4c-1.105 0-2 .895-2 2v2" />
  </svg>
);

const Target = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-target"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const Clock = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-clock"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// --- Data ---
const statsData = [
  { label: "Years Experience", value: "2+", icon: Briefcase },
  { label: "Completed Projects", value: "30+", icon: Target },
  { label: "Satisfied Clients", value: "30+", icon: Briefcase },
];

const testimonials = [
  {
    id: 1,
    quote:
      "We recently partnered with webOria for the design and development of Paddy official website. From day one, the Visual i team demonstrated a strong understanding of our industry, translating complex technical offerings into a clean, modern, and user-friendly digital experience.",
    author: "Mohammad Mosabbir Rana",
    title: "Senior Manager & Business Revenue",
    avatarUrl: "https://placehold.co/100x100/2563EB/FFFFFF?text=MMR",
    logoUrl: "https://placehold.co/120x60/000000/FFF?text=Paddy",
  },
  {
    id: 2,
    quote:
      "We recently had the pleasure of working with WebOria for the development of Aloron Limited's official website. They delivered the project within the committed timeline, ensuring 100% interactive and proactive support throughout the process. Their team demonstrated exceptional professionalism, responsiveness, and a clear understanding of our requirements.",
    author: "Razu Rahman",
    title: "Branding & Communications",
    avatarUrl: "https://placehold.co/100x100/F59E0B/FFFFFF?text=RR",
    logoUrl: "https://placehold.co/120x60/2563EB/FFF?text=Aloron",
  },
];

const blogPosts = [
  {
    id: 1,
    category: "AWARENESS",
    title: "TOP WEB DEVELOPMENT SERVICE IN BANGLADESH.",
    date: "AUG 20, 2025",
    imageUrl:
      "https://placehold.co/400x250/374151/FFFFFF?text=Website+Design",
  },
  {
    id: 2,
    category: "BRANDING",
    title: "VISUAL I'S SEO STRATEGY TOOK CROWN BANQU...",
    date: "JUN 15, 2025",
    imageUrl: "https://placehold.co/400x250/F59E0B/FFFFFF?text=Case+Study",
  },
  {
    id: 3,
    category: "AWARENESS",
    title: "WHY YOU SHOULD BUILD A MOBILE APP FOR YO...",
    date: "JUN 02, 2025",
    imageUrl: "https://placehold.co/400x250/10B981/FFFFFF?text=Mobile+App",
  },
];

// --- Helpers ---
const SectionHeader = ({ mainText, subText }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-wide">
      {mainText.toUpperCase()}
    </h2>
    <p className="text-3xl sm:text-4xl font-extrabold text-orange-500 tracking-wide mt-1">
      {subText.toUpperCase()}
    </p>
  </div>
);

// --- Testimonial ---
const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextSlide = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  // Auto-scroll every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="relative w-full py-8 bg-gradient-to-r from-white via-gray-50 to-orange-50 font-['Inter'] overflow-hidden">
      {/* Decorative Blur Shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-40 -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionTitle titleTop="Weboria" titleBottom="Client Testimonials" />

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          aria-label="Previous Testimonial"
          className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-md hover:bg-orange-100 transition z-20"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Testimonial"
          className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-md hover:bg-orange-100 transition z-20"
        >
          <ArrowRight className="w-5 h-5 text-gray-700" />
        </button>

        {/* Testimonial Card */}
        <div className="relative mt-10 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-5/6 lg:w-4/5 xl:w-3/4 bg-white p-10 md:p-14 rounded-3xl shadow-2xl border border-gray-100 text-center md:text-left"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0"
                >
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.author}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover ring-4 ring-orange-400 shadow-md"
                  />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 relative italic">
                    <span className="text-6xl text-orange-400 absolute -top-10 left-0 opacity-30">
                      “
                    </span>
                    {testimonial.quote}
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>

                {/* Company Logo */}
                {testimonial.logoUrl && (
                  <div className="flex-shrink-0 hidden md:block">
                    <img
                      src={testimonial.logoUrl}
                      alt="Company Logo"
                      className="h-12 object-contain opacity-70"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-orange-500 w-6" : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Stats ---
const StatsSection = () => (
  <section className="relative lg:py-8 py-6 bg-gradient-to-br from-white via-gray-50 to-orange-50 font-['Inter'] overflow-hidden">
    {/* Decorative Gradient Shape */}
    <div className="absolute top-0 right-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40 -z-10"></div>
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-40 -z-10"></div>

    <div className="max-w-7xl mx-auto px-6 text-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <p className="text-orange-500 font-semibold tracking-widest uppercase mb-3">
          Weboria
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          In Numbers
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg leading-relaxed">
          Empowering brands with measurable growth — our success is reflected
          through innovation, strategy, and proven results.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {statsData.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            viewport={{ once: true }}
            className="group bg-white p-10 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Header Row */}
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-600 group-hover:text-orange-500 transition-colors duration-300">
                {stat.label}
              </h3>
              <ArrowRight className="w-5 h-5 text-gray-400 rotate-45 group-hover:text-orange-500 transition-colors duration-300" />
            </div>

            {/* Main Stat */}
            <p className="text-5xl md:text-6xl font-extrabold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
              {stat.value}
            </p>

            {/* Icon */}
            <div className="flex justify-end mt-6">
              <div className="p-3 bg-orange-100 rounded-full group-hover:bg-orange-500 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Blog ---
const BlogCard = ({ post }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:scale-[1.02] duration-300">
    <div className="h-48 overflow-hidden">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x250/D1D5DB/1F2937?text=No+Image";
        }}
      />
    </div>
    <div className="p-5">
      <p className="text-xs font-semibold text-indigo-600 mb-2 tracking-widest">
        {post.category}
      </p>
      <h4 className="text-lg font-bold text-gray-800 mb-4 line-clamp-2">
        {post.title}
      </h4>
      <div className="flex justify-between items-center pt-2 border-t">
        <span className="flex items-center text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-1" />
          {post.date}
        </span>
        <button className="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 group">
          Read More
          <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition" />
        </button>
      </div>
    </div>
  </div>
);

const BlogSection = () => (
  <section className="py-5 md:py-8 bg-white font-['Inter']">
    <div className="max-w-7xl mx-auto px-6">
      <SectionTitle titleTop={"Our Blog &"} titleBottom={"Stories"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <div className="text-center">
        <Button
          text={"See All Blogs"}
          href='/blogs'
        />
      </div>
    </div>
  </section>
);

// --- Main ---
const Testimonials = () => {
  return (
    <div className="min-h-screen bg-white">
      <TestimonialSection />
      <StatsSection />
      {/* <BlogSection /> */}
    </div>
  );
};

export default Testimonials;
