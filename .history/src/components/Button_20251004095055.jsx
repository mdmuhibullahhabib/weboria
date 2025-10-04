"use client";

import Link from 'next/link';
// import { FiArrowRight } from 'react-icons/fi'; // You can change this to any icon you prefer

export default function Button({ text, href = '#', className = '' }) {
  return (
    <Link 
      href={href}
      className={`
        // Base Styling: DaisyUI's btn base, custom padding, relative, overflow hidden
        btn 
        bg-gray-200 text-gray-700 border-none 
        hover:bg-gray-300 transition-colors 
        !p-0 relative overflow-hidden group 
        min-h-0 h-auto 
        ${className}
      `}
    >
      {/* 1. Icon Box - The fixed black/dark part on the left */}
      <span className="
        bg-gray-900 text-white 
        h-full w-12 flex items-center justify-center 
        text-xl font-bold 
        absolute left-0 top-0 z-20
      ">
        <A />
      </span>

      {/* 2. Text Content - Needs a higher z-index to stay visible */}
      <span className="
        py-3 px-6 pl-16 
        font-semibold 
        relative z-20 
        transition-colors
        group-hover:text-gray-900 // Optional: changes text color on hover
      ">
        {text}
      </span>
      
      {/* 3. Hover Background Effect (Sky Blue Wipe) */}
      <span 
        className="
          absolute top-0 left-0 
          w-0 h-full bg-sky-400 
          group-hover:w-full 
          transition-all duration-300 ease-out 
          z-10
        " 
      />
    </Link>
  );
}