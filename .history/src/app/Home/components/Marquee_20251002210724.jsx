"use client"
import React from 'react';

// Using the Diamond icon for the separator, which closely matches the image.
const DiamondSeparator = () => (
    <span 
      className="inline-block text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-8 align-middle"
      style={{ transform: 'rotate(45deg)', opacity: 0.7 }}
    >
      &#9670; {/* Unicode for a diamond */}
    </span>
);

const Marquee = () => {
  // Repeating a list of services/keywords
  const marqueeText = [
    "DIGITAL MARKETING",
    "SEO",
    "GRAPHIC DESIGN",
    "WEB DEVELOPMENT",
    "CYBER SECURITY",
    "PR"
  ];

  // Duplicate the content to ensure seamless loop
  const fullMarqueeContent = [...marqueeText, ...marqueeText];

  return (
    <div className="relative w-full overflow-hidden bg-white py-6 sm:py-8 border-y border-gray-100">
      {/* This div is set to animate using the custom CSS keyframes defined below. 
        It needs to be wider than its parent to scroll.
      */}
      <div className="animate-marquee whitespace-nowrap inline-block">
        {fullMarqueeContent.map((text, index) => (
          <React.Fragment key={index}>
            <span 
              className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-sans tracking-wide mx-4 uppercase"
              style={{ 
                  // Custom styling for the outlined/hollow text effect
                  WebkitTextStroke: '2px #333', // Dark outline
                  WebkitTextFillColor: 'transparent', // Transparent fill
                  color: 'transparent', // Fallback for standard browsers
                  fontFamily: 'Oswald, sans-serif' // Suggesting a suitable bold font style
              }}
            >
              {text}
            </span>
            {/* Add separator between all elements */}
            {index < fullMarqueeContent.length - 1 && (
                <DiamondSeparator />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Global CSS for the Marquee Animation */}
      {/* Note: In a real Next.js app, this should often go into a global CSS file, 
          but for single-file component generation, we use a style tag. */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } /* Scrolls through one full set of content */
        }
        .animate-marquee {
          animation: marquee 35s linear infinite; /* Adjust duration to control speed */
          display: inline-block;
          will-change: transform; /* Performance optimization */
        }
      `}</style>
    </div>
  );
};

export default Marquee;
