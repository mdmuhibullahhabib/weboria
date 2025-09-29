"use client";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function CTASection({
  title = "Ready to Transform Your Digital Presence?",
  subtitle = "Join hundreds of successful businesses that trust Weboria to deliver exceptional digital solutions.",
  benefits = [
    "Free consultation and project planning",
    "Dedicated project manager",
    "30-day money-back guarantee",
    "Ongoing support and maintenance",
  ],
  primaryButtonText = "Start Your Project",
  secondaryButtonText = "Schedule a Call",
  onPrimaryClick,
  onSecondaryClick,
}) {
  const handlePrimaryClick = () => {
    console.log("Primary CTA clicked");
    if (onPrimaryClick) onPrimaryClick();
  };

  const handleSecondaryClick = () => {
    console.log("Secondary CTA clicked");
    if (onSecondaryClick) onSecondaryClick();
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-white/90">
                <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button */}
            <button
              className="btn btn-primary flex items-center px-8 py-4 text-lg"
              onClick={handlePrimaryClick}
              data-testid="button-cta-primary"
            >
              {primaryButtonText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>

            {/* Secondary Button */}
            <button
              className="btn btn-outline text-white border-white hover:bg-white hover:text-primary flex items-center px-8 py-4 text-lg"
              onClick={handleSecondaryClick}
              data-testid="button-cta-secondary"
            >
              {secondaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
