"use client";
import { Code, Smartphone, TrendingUp, Search, CheckCircle } from 'lucide-react';
import Service from '../Home/components/Service';
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
      features: ["Responsive Design", "Modern Frameworks", "SEO Optimized", "Fast Loading", "Security First", "Scalable Architecture"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android", "Cross-Platform", "App Store Optimization", "Push Notifications", "Offline Functionality", "Performance Optimization"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that increase brand visibility and drive targeted traffic to your business.",
      features: ["Social Media Marketing", "Content Strategy", "Email Campaigns", "Brand Development", "PPC Advertising", "Analytics & Reporting"]
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Search engine optimization that improves your website's visibility and drives organic traffic from your target audience.",
      features: ["Keyword Research", "Technical SEO", "Content Optimization", "Local SEO", "Link Building", "Performance Tracking"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements to create a comprehensive strategy."
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Our team creates intuitive designs and develops robust solutions using the latest technologies and best practices."
    },
    {
      step: "03",
      title: "Testing & Optimization",
      description: "Rigorous testing ensures quality and performance, while optimization guarantees the best user experience."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We handle the launch process and provide ongoing support to ensure your solution continues to perform excellently."
    }
  ];

  const benefits = [
    "Dedicated project manager",
    "Regular progress updates",
    "Quality assurance testing",
    "Post-launch support",
    "Scalable solutions",
    "Modern technologies"
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative bg-cover bg-center text-white py-32"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80')",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Empowering Brands with <br /> Impactful Digital Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            From strategy to execution, we deliver modern digital solutions that
            accelerate your business growth and brand impact.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-6 lg:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <Service {...service} />
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.8rem,5vw,2.8rem)] font-bold mb-4 text-gray-900">
              Our <span className="text-orange-500">Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-[clamp(1rem,2vw,1.2rem)]">
              A proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 text-center p-8"
              >
                <div className="text-4xl font-extrabold text-orange-500 mb-3">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-6 lg:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[clamp(1.8rem,5vw,2.5rem)] font-bold mb-6 text-gray-900">
              Why Choose <span className="text-orange-500">Weboria</span>?
            </h2>
            <p className="text-gray-600 mb-8 text-[clamp(1rem,2vw,1.1rem)] leading-relaxed">
              We're not just another digital agency — we're your partners in success,
              committed to delivering solutions that drive real business growth.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "5+", label: "Years Experience" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-md text-center transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="text-3xl font-bold text-orange-500 mb-1">{stat.value}</div>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 lg:py-8 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,5vw,2.8rem)] font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Let's discuss your project and create a solution that drives your business forward.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => console.log("Navigate to contact form")}
              className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition"
            >
              Start Your Project
            </button>
            <button
              onClick={() => console.log("Schedule free consultation")}
              className="px-8 py-3 border-2 border-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
