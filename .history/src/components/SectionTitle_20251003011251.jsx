"use client";

import React from 'react';

/**
 * Renders a large, two-line, centered section title component.
 * It mimics the visual style from the agency website screenshots.
 * @param {string} titleTop - The text for the top line (usually blue).
 * @param {string} titleBottom - The text for the bottom line (usually orange/yellow).
 */
export default function SectionTitle({ titleTop, titleBottom }) {
  return (
    <div className="text-center my-10 px-4">
      <h2 className="
        text-4xl md:text-5xl lg:text-6xl 
        font-extrabold 
        leading-tight 
        tracking-wide
      ">
        {/* Top line in blue (e.g., "REACTIONS FROM") */}
        <span className="text-blue-600 uppercase">
          {titleTop}
        </span>
        
        <br className="block"/>

        {/* Bottom line in orange/yellow (e.g., "DELIGHTED CLIENTS") */}
        <span className="text-yellow-600 uppercase">
          {titleBottom}
        </span>
      </h2>
    </div>
  );
}
