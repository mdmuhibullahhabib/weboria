"use client";

import { useState } from "react";
import Portfolio from "../Home/components/Portfolio"; // Ensure this path is correct

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern online shopping platform with advanced features including real-time inventory, secure payments, and responsive design.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: "Web Development",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      description: "Comprehensive fitness application with workout tracking, nutrition monitoring, and social features for motivation.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      liveUrl: "https://example.com",
    },
    // Add other items...
  ];

  const categories = ["All", "Web Development", "Mobile App", "Digital Marketing", "SEO"];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Explore our diverse collection of successful projects that showcase our expertise across web development, mobile apps, and digital marketing.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-base-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`btn ${activeFilter === category ? "btn-primary" : "btn-outline"} transition-all duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => <Portfolio key={item.id} {...item} />)
          ) : (
            <div className="text-center py-16 col-span-full">
              <p className="text-xl text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
