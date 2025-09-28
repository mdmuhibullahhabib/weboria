"use client";

import { ExternalLink, Github } from "lucide-react";

// Portfolio card component
export default function PortfolioCard({ 
  title, 
  description, 
  image, 
  category, 
  technologies = [], 
  liveUrl, 
  githubUrl 
}) {
  return (
    <div className="group relative overflow-hidden bg-base-100 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" data-testid={`card-portfolio-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      
      {/* Image with hover overlay */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {liveUrl && (
            <button 
              className="p-2 bg-white rounded-full text-primary hover:scale-110 transition"
              onClick={() => window.open(liveUrl, "_blank")}
              data-testid={`button-view-live-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <ExternalLink className="w-5 h-5" />
            </button>
          )}
          {githubUrl && (
            <button 
              className="p-2 bg-white rounded-full text-primary hover:scale-110 transition"
              onClick={() => window.open(githubUrl, "_blank")}
              data-testid={`button-view-github-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Github className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Category Badge */}
        {category && (
          <span className="absolute top-4 right-4 bg-chart-2 text-black px-2 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-base-200 text-foreground px-2 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
