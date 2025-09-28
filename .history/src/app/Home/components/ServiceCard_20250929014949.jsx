
import { CheckCircle } from "lucide-react";

// Service card component
export default function ServiceCard({ icon: Icon, title, description, features = [] }) {
  return (
    <div className="h-full bg-base-100 shadow-lg rounded-lg p-6 flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Icon */}
      {Icon && (
        <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>

      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-2 mt-auto">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
import React from 'react';
import { CheckCircle, Zap, Shield, Globe, TrendingUp, Cpu } from "lucide-react";

// --- ServiceCard Component (from your request) ---
// This component displays a single service with an icon, title, description, and features.
function ServiceCard({ icon: Icon, title, description, features = [] }) {
  // Define custom colors for the icons to make it more visually appealing
  const iconColor = title.includes("AI") ? "text-red-500" : title.includes("Security") ? "text-blue-500" : "text-green-500";

  return (
    <div className="h-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg rounded-xl p-6 flex flex-col transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
      {/* Icon */}
      {Icon && (
        <div className="flex items-center justify-center w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-full mb-5">
          <Icon className={`w-7 h-7 ${iconColor}`} />
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed flex-grow">{description}</p>

      {/* Features List */}
      {features.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// --- Main App Component ---
export default function App() {
  const services = [
    {
      icon: Zap,
      title: "Lightning Fast Deployment",
      description: "Our infrastructure is built for speed, ensuring your applications are live instantly and perform optimally under high load.",
      features: ["Instant Setup", "Global CDN", "99.99% Uptime SLA"],
    },
    {
      icon: Shield,
      title: "Advanced Security Protocols",
      description: "Protect your data with multi-layered security measures, including WAF, DDoS protection, and continuous threat monitoring.",
      features: ["Real-time Monitoring", "Automated Backups", "End-to-End Encryption"],
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth Solutions",
      description: "Seamlessly scale your resources up or down based on demand without any service interruptions or performance degradation.",
      features: ["Auto-scaling Compute", "Elastic Database Pool", "Pay-as-you-grow Model"],
    },
    {
      icon: Globe,
      title: "Worldwide Connectivity",
      description: "Leverage our vast network of data centers to provide low-latency service delivery to your users, wherever they are.",
      features: ["20+ Global Regions", "Dedicated Fiber Links", "Localized Caching"],
    },
    {
      icon: Cpu,
      title: "Integrated AI Analytics",
      description: "Harness the power of AI to gain deep insights into user behavior, performance bottlenecks, and future trends.",
      features: ["Predictive Modeling", "Anomaly Detection", "Custom Dashboard Builder"],
    },
    {
      icon: CheckCircle,
      title: "24/7 Premium Support",
      description: "Access our team of expert engineers any time, day or night, for immediate assistance and technical guidance.",
      features: ["Dedicated Account Manager", "15-Minute Response Time", "Multi-channel Access"],
    },
  ];

  return (
    // Main container with full responsiveness and dark mode support
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-8 font-inter">
      <div className="max-w-7xl mx-auto py-12">
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Our Core Services
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Innovate with confidence. We provide the essential technological foundations your business needs to thrive.
          </p>
        </header>

        {/* Responsive Grid Layout for Cards */}
        {/* The key to responsiveness is using Tailwind's grid prefixes: 1 column on mobile, 
            2 on small screens (sm), and 3 on large screens (lg). */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}
