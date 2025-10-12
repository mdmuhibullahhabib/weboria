"use client";
import { useState } from "react";
import Portfolio from "../Home/components/Portfolio";
import FeaturedProjects from "./components/FeaturedProjects";

// Portfolio page with project cards and category filtering
export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Modern online shopping platform with advanced features including real-time inventory, secure payments, and responsive design.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: "Web Development",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      description:
        "Comprehensive fitness application with workout tracking, nutrition monitoring, and social features for motivation.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      liveUrl: "https://example.com",
    },
    {
      id: 3,
      title: "Restaurant Website",
      description:
        "Beautiful restaurant website with online reservations, menu management, and integrated payment processing.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      category: "Web Development",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
      liveUrl: "https://example.com",
    },
    {
      id: 4,
      title: "Task Management App",
      description:
        "Productivity application with team collaboration, project tracking, and deadline management features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      category: "Mobile App",
      technologies: ["Flutter", "Node.js", "Express", "MySQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 5,
      title: "Marketing Campaign",
      description:
        "Comprehensive digital marketing campaign that increased brand awareness by 300% and generated 50% more leads.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      category: "Digital Marketing",
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEO"],
      liveUrl: "https://example.com",
    },
    {
      id: 6,
      title: "Corporate Website",
      description:
        "Professional corporate website with SEO optimization that improved search rankings by 200% within 3 months.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      category: "SEO",
      technologies: ["WordPress", "Yoast SEO", "Google Analytics", "Schema"],
      liveUrl: "https://example.com",
    },
    {
      id: 7,
      title: "SaaS Dashboard",
      description:
        "Complex dashboard application with real-time analytics, user management, and subscription billing integration.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      category: "Web Development",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 8,
      title: "Travel Booking App",
      description:
        "Mobile application for travel bookings with flight search, hotel reservations, and itinerary management.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
      category: "Mobile App",
      technologies: ["Swift", "Kotlin", "Firebase", "Stripe"],
      liveUrl: "https://example.com",
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Mobile App",
    "Digital Marketing",
    "SEO",
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
         <>
      <title>a - WebOria</title>
    <div className="min-h-screen pt-6">
      {/* Hero Section */}
      <FeaturedProjects />

      {/* Filter Buttons - Light Theme */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${activeFilter === category
                    ? "bg-sky-600 text-white border-sky-600 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-sky-50 hover:border-sky-400 hover:text-sky-700"
                  }`}
                data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid - Light Theme */}
      <section className="py-8 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <Portfolio key={item.id} {...item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-heading font-bold mb-6">
              Project <span className="text-primary">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real metrics from our successful projects that demonstrate our
              commitment to delivering results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                98%
              </div>
              <div className="text-gray-600 font-medium">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                150%
              </div>
              <div className="text-gray-600 font-medium">Avg. ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
