"use client";

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
