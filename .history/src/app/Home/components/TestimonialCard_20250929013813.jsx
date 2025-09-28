
import { Star } from "lucide-react";

// Testimonial card component with stars, quote, and author info
export default function TestimonialCard({ name, company, role, content, rating = 5, avatar }) {
  return (
    <div className="h-full bg-base-100 shadow-lg rounded-lg p-6 flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl" data-testid={`card-testimonial-${name.toLowerCase().replace(/\s+/g, "-")}`}>
      
      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating ? "text-chart-2 fill-chart-2" : "text-muted stroke-muted"
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <div className="relative mb-6 pl-6">
        <svg
          className="absolute -top-2 -left-1 w-8 h-8 text-chart-2/20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-muted-foreground italic leading-relaxed">
          "{content}"
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center mt-auto">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
            <span className="text-primary font-heading font-semibold text-lg">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className="font-heading font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}
