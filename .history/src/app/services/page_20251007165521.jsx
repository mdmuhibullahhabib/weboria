"use client";
import { Code, Smartphone, TrendingUp, Search, CheckCircle } from 'lucide-react';
import CTASection from '../Home/components/CTASection';
import Service from '../Home/components/Service';
import { motion } from "framer-motion";
import Hero from './components/Hero';

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

     <section className="py-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-orange-500 font-semibold tracking-widest uppercase mb-3"
        >
          WebOria
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4"
        >
          Our <span className="text-blue-600">Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Empowering your business with strategic, result-driven digital
          solutions — from branding to AI-powered marketing. At WebOria, we
          create experiences that inspire growth, innovation, and success.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mt-8 rounded-full origin-left"
        />
      </div>
    </section>

      {/* Services Grid */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div 
                key={index} 
                className="card bg-base-100 shadow-md hover:shadow-xl transition text-center"
                data-testid={`card-process-${item.step}`}
              >
                <div className="card-body p-8">
                  <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-primary">Weboria</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're not just another digital agency. We're your partners in success, 
              committed to delivering solutions that drive real business results.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-secondary mr-3" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600">Projects Delivered</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Get Started?"
        subtitle="Let's discuss your project and create a solution that drives your business forward."
        primaryButtonText="Start Your Project"
        secondaryButtonText="Get Free Consultation"
        onPrimaryClick={() => console.log('Navigate to contact form')}
        onSecondaryClick={() => console.log('Schedule free consultation')}
      />
    </div>
  );
}
