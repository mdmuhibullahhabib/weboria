"use"
import React from 'react';

// You would typically import Google Fonts in your global CSS (tailwind.css or globals.css)
// For example, if using Next.js with @next/font/google:
// import { Oswald } from 'next/font/google';
// const oswald = Oswald({ subsets: ['latin'], weight: ['200', '400', '700'] });

// For this example, I'll use a generic font-sans but suggest one that works visually.
// If you want to use a specific font like 'Oswald' or 'Rajdhani' which have a bold, condensed look,
// make sure to import it in your main CSS or using @next/font.

const Marquee = () => {
  // The actual text content
  const marqueeText = [
    "DIGITAL MARKETING",
    "SEO",
    "GRAPHIC DESIGN",
    "WEB DEVELOPMENT",
    "CYBER SECURITY",
    "PR",
    "BRANDING",
    "CONSULTING"
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white py-4 sm:py-6 border-y border-gray-200">
      <div className="animate-marquee whitespace-nowrap">
        {marqueeText.map((text, index) => (
          <React.Fragment key={index}>
            <span 
              className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent 
                         bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 
                         text-stroke-2 text-stroke-gray-400 font-sans tracking-wide mx-8 uppercase"
              style={{ 
                  // This is a CSS trick for outline text. 
                  // Webkit-text-stroke works well in Chrome/Safari. 
                  // For Firefox/others, a text-shadow based outline is an alternative or using SVG text.
                  WebkitTextStroke: '1px #a0a0a0', // Outline color and width
                  color: 'transparent', // Make the fill transparent
                  fontFamily: 'Oswald, sans-serif' // Suggesting Oswald for a similar look
              }}
            >
              {text}
            </span>
            {index < marqueeText.length -1 && ( // Add diamond icon between words
                <span className="inline-block text-gray-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-8 -translate-y-1">
                    ◆
                </span>
            )}
          </React.Fragment>
        ))}
        {/* Duplicate the content to ensure seamless loop */}
        {marqueeText.map((text, index) => (
          <React.Fragment key={`dup-${index}`}>
            <span 
              className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent 
                         bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 
                         text-stroke-2 text-stroke-gray-400 font-sans tracking-wide mx-8 uppercase"
              style={{ 
                  WebkitTextStroke: '1px #a0a0a0', 
                  color: 'transparent',
                  fontFamily: 'Oswald, sans-serif' 
              }}
            >
              {text}
            </span>
            {index < marqueeText.length -1 && (
                <span className="inline-block text-gray-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-8 -translate-y-1">
                    ◆
                </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Tailwind CSS for marquee animation (add to your global CSS or styles file) */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } /* Half of the duplicated content */
        }
        .animate-marquee {
          animation: marquee 30s linear infinite; /* Adjust duration as needed */
          display: inline-block; /* Essential for the animation to work horizontally */
        }
        /* Fallback for text-stroke if -webkit-text-stroke is not supported (less ideal) */
        /* You might need to use a library for SVG text for perfect cross-browser outline */
        @supports not (-webkit-text-stroke: 1px black) {
            .text-stroke-gray-400 {
                text-shadow: 
                    -1px -1px 0 #a0a0a0,  
                     1px -1px 0 #a0a0a0,
                    -1px  1px 0 #a0a0a0,
                     1px  1px 0 #a0a0a0;
                color: #a0a0a0; /* For browsers that only support text-shadow, make the fill the outline color */
            }
        }
      `}</style>
    </div>
  );
};

export default Marquee;