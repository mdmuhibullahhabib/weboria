import React from "react";

const MarqueeComponent = () => {
  const marqueeText = [
    "DIGITAL MARKETING",
    "SEO",
    "GRAPHIC DESIGN",
    "WEB DEVELOPMENT",
    "CYBER SECURITY",
    "PR",
    "BRANDING",
    "CONSULTING",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white py-4 sm:py-6 border-y border-gray-200">
      <div className="animate-marquee whitespace-nowrap">
        {marqueeText.map((text, index) => (
          <React.Fragment key={index}>
            <span
              className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent 
                         bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 tracking-wide mx-8 uppercase"
              style={{
                WebkitTextStroke: "1px #a0a0a0",
                color: "transparent",
                fontFamily: "Oswald, sans-serif",
              }}
            >
              {text}
            </span>
            {index < marqueeText.length - 1 && (
              <span className="inline-block text-gray-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-8 -translate-y-1">
                ◆
              </span>
            )}
          </React.Fragment>
        ))}

        {/* Duplicate content for infinite scroll effect */}
        {marqueeText.map((text, index) => (
          <React.Fragment key={`dup-${index}`}>
            <span
              className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent 
                         bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 tracking-wide mx-8 uppercase"
              style={{
                WebkitTextStroke: "1px #a0a0a0",
                color: "transparent",
                fontFamily: "Oswald, sans-serif",
              }}
            >
              {text}
            </span>
            {index < marqueeText.length - 1 && (
              <span className="inline-block text-gray-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-8 -translate-y-1">
                ◆
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: inline-block;
        }

        @supports not (-webkit-text-stroke: 1px black) {
          .text-stroke-gray-400 {
            text-shadow: -1px -1px 0 #a0a0a0, 1px -1px 0 #a0a0a0,
              -1px 1px 0 #a0a0a0, 1px 1px 0 #a0a0a0;
            color: #a0a0a0;
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
