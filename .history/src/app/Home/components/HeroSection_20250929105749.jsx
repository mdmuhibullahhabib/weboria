"use client";

import { ArrowRight } from "lucide-react";

export default function HeroSection() {
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
            Transform Your
            <span className="block text-chart-2">Digital Presence</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            We craft innovative digital solutions that drive growth, enhance user experience, 
            and elevate your brand to new heights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button */}
            <button
              className="btn btn-primary flex items-center px-8 py-4 text-lg"
              onClick={scrollToContact}
              data-testid="button-start-project"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>

            {/* Secondary Button */}
            <button
              className="btn btn-outline btn-white flex items-center px-8 py-4 text-lg "
              onClick={() => console.log("View portfolio triggered")}
              data-testid="button-view-portfolio"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
