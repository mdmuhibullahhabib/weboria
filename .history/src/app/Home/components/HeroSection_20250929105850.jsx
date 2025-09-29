"use client";

import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  // Scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    console.log("Scroll to contact triggered");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-chart-1/10">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-chart-1/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Transform Your
            <span className="block text-chart-2">Digital Presence</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            We craft innovative digital solutions that drive growth, enhance user experience,
            and elevate your brand to new heights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              className="btn btn-primary flex items-center gap-2 px-8 py-4 text-lg text-black"
              onClick={scrollToContact}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
              onClick={() => console.log("View portfolio triggered")}
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
