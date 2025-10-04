"use client";
import React, { useState, useMemo } from "react";

// Arrow Right Icon
const ArrowRight = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// --- Categories & Mock Data ---
const categories = [
  "All Projects",
  "Web Development",
  "Mobile App",
  "Branding",
  "SEO",
  "Digital Marketing",
  "UI/UX",
];

const projectsData = [
  {
    id: 1,
    category: "Web Development",
    title: "E-commerce Platform",
    client: "FashionHub",
    description:
      "Modern online shopping platform with real-time inventory, secure payments, and responsive design.",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    category: "Mobile App",
    title: "Fitness Tracking App",
    client: "GymPro",
    description:
      "Fitness app with workout tracking, nutrition monitoring, and social features.",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    category: "Branding",
    title: "Global Tech Startup Identity",
    client: "NovaLink",
    description:
      "Complete branding package for a global tech startup, including logo, typography, and visuals.",
    imageUrl: "https://placehold.co/600x400/f97316/ffffff?text=Branding",
  },
  {
    id: 4,
    category: "SEO",
    title: "Corporate Website SEO",
    client: "Innovate Solutions",
    description:
      "SEO optimization that improved organic traffic and boosted ranking by 200%.",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
  },
];

// --- Hero Section ---
const PortfolioHero = () => (
  <section className="py-24 bg-gradient-to-br from-indigo-50 to-orange-50 border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
        Our <span className="text-orange-500">Portfolio</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Explore our diverse collection of projects that showcase expertise across web development, mobile apps, branding, and digital marketing.
      </p>
    </div>
  </section>
);

// --- Filter Buttons ---
const FilterButtons = ({ activeFilter, setFilter }) => (
  <div className="flex flex-wrap justify-center gap-4 mb-12">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setFilter(category)}
        className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300
          ${
            activeFilter === category
              ? "bg-orange-500 text-white shadow-lg"
              : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-100"
          }`}
      >
        {category}
      </button>
    ))}
  </div>
);

// --- Project Card ---
const ProjectCard = ({ project }) => (
  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer">
    <div className="w-full h-64 overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex items-end p-6 transition duration-500 group-hover:bg-opacity-70">
      <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-sm font-semibold text-orange-400 uppercase mb-1">
          {project.category}
        </p>
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-200">{project.description}</p>
        <p className="text-sm text-gray-400 mt-1">Client: {project.client}</p>
        <div className="mt-4 inline-flex items-center text-white font-medium group-hover:text-orange-300">
          View Case Study <ArrowRight className="ml-2" />
        </div>
      </div>
    </div>
  </div>
);

// --- Project Grid ---
const ProjectGrid = ({ activeFilter }) => {
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") return projectsData;
    return projectsData.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

// --- Stats Section ---
const StatsSection = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Project <span className="text-orange-500">Results</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Real metrics from our projects that demonstrate our commitment to delivering outstanding results.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-4xl font-bold text-orange-500">500+</p>
          <p className="text-gray-600">Projects Completed</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-orange-500">98%</p>
          <p className="text-gray-600">On-Time Delivery</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-orange-500">150%</p>
          <p className="text-gray-600">Avg. ROI Increase</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-orange-500">24/7</p>
          <p className="text-gray-600">Support Available</p>
        </div>
      </div>
    </div>
  </section>
);

// --- Final CTA Section ---
const FinalCTASection = () => (
  <section className="py-16 bg-indigo-600 text-center text-white">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Ready to Start Your Success Story?
    </h2>
    <p className="text-lg text-indigo-200 mb-6">
      Let’s turn your vision into the next featured project in our portfolio.
    </p>
    <div className="flex justify-center gap-4">
      <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg shadow hover:bg-gray-100">
        Book a Free Consultation
      </button>
      <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-indigo-600 transition">
        View All Services
      </button>
    </div>
  </section>
);

// --- Main Portfolio Page ---
export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  return (
    <div className="min-h-screen bg-white">
      <PortfolioHero />

      {/* Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FilterButtons activeFilter={activeFilter} setFilter={setActiveFilter} />
          <ProjectGrid activeFilter={activeFilter} />
        </div>
      </section>

      <StatsSection />
      <FinalCTASection />
    </div>
  );
}

