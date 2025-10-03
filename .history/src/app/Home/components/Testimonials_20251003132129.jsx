"use client";
import React from "react";

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
  { label: "Years Experience", value: "12+", icon: Briefcase },
  { label: "Completed Projects", value: "200+", icon: Target },
  { label: "Satisfied Clients", value: "130+", icon: Briefcase },
];

const testimonialData = {
  quote:
    "We recently had the pleasure of working with Visual i for the development of Fiber@Home Limited's official website. They delivered the project within the committed timeline, ensuring 100% interactive and proactive support throughout the process. Their team demonstrated exceptional professionalism, responsiveness, and a clear understanding of our requirements.",
  author: "Razu Rahman",
  title: "Branding & Communications",
  logoText: "Fiber@Home",
  avatarUrl: "https://placehold.co/80x80/2563EB/FFFFFF?text=RR",
};

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
const TestimonialSection = () => (
  <section className="py-16 md:py-24 bg-gradient-to-r from-gray-50 to-white font-['Inter']">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader mainText="Reactions From" subText="Delighted Clients" />

      <div className="relative flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-4xl mx-auto border-t-4 border-yellow-400 hover:shadow-2xl transition">
          <div className="flex flex-col lg:flex-row items-start lg:space-x-8">
            {/* Avatar & Arrows */}
            <div className="order-2 lg:order-1 flex flex-col items-center justify-center w-full lg:w-1/4">
              <img
                src={testimonialData.avatarUrl}
                alt={testimonialData.author}
                className="w-20 h-20 rounded-full object-cover ring-4 ring-yellow-400 mb-4"
              />
              <p className="font-bold text-gray-900 text-lg">
                {testimonialData.author}
              </p>
              <p className="text-sm text-gray-500">{testimonialData.title}</p>

              {/* Arrows */}
              <div className="flex space-x-4 mt-6">
                <button className="p-3 rounded-full bg-white border hover:bg-gray-100 transition shadow-md hover:scale-105">
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-3 rounded-full bg-white border hover:bg-gray-100 transition shadow-md hover:scale-105">
                  <ArrowRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Quote */}
            <div className="order-1 lg:order-2 w-full lg:w-3/4">
              <p className="text-gray-600 leading-relaxed italic text-lg mb-6 relative">
                <span className="text-4xl font-serif text-yellow-400 absolute -top-4 -left-3">
                  “
                </span>
                {testimonialData.quote}
              </p>
              <div className="flex justify-end">
                <span className="px-4 py-1 text-sm font-semibold text-gray-800 border rounded-full">
                  {testimonialData.logoText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Stats ---
const StatsSection = () => (
  <section className="py-16 md:py-24 bg-gray-50 font-['Inter']">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader mainText="Visual I" subText="In Numbers" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {statsData.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-600/50 hover:scale-[1.03] hover:shadow-2xl transition duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-600">
                {stat.label}
              </h3>
              <ArrowRight className="w-5 h-5 text-gray-400 rotate-45" />
            </div>
            <p className="text-6xl font-extrabold text-indigo-600 my-4">
              {stat.value}
            </p>
            <div className="flex justify-end">
              <stat.icon className="w-10 h-10 text-indigo-400" />
            </div>
          </div>
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
  <section className="py-16 md:py-24 bg-white font-['Inter']">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader mainText="Our Blog &" subText="Stories" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <div className="text-center">
        <button className="inline-flex items-center px-8 py-3 rounded-lg text-white bg-gray-800 hover:bg-gray-900 transition shadow-lg hover:scale-105">
          <span className="mr-2">See All Blogs</span>
          <ArrowRight className="w-5 h-5" />
        </button>
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
      <BlogSection />
    </div>
  );
};

export default Testimonials;
