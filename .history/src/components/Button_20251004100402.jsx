// Button.jsx
"use client";

import { ArrowBigRight } from "lucide-react";
import Link from "next/link";

export default function Button({ text, href = "#", className = "" }) {
  return (
    <Link
      href={href}
      className={`
        relative inline-flex items-center overflow-hidden group rounded-md font-semibold
        bg-gray-200 text-gray-700 border-none hover:bg-gray-300 transition-colors
        ${className}
      `}
    >
      {/* বাম পাশে আইকন বক্স */}
      <span
        className="
          absolute left-0 top-0 h-full w-12 flex items-center justify-center
          bg-gray-900 text-white text-xl font-bold z-20
        "
      >
        <ArrowBigRight />
      </span>

      {/* মূল টেক্সট */}
      <span
        className="
          relative z-20 py-3 px-6 pl-16 transition-colors
          group-hover:text-gray-900
        "
      >
        {text}
      </span>

      {/* Hover effect (Sky Blue wipe) */}
      <span
        className="
          absolute top-0 left-0 w-0 h-full bg-sky-400
          group-hover:w-full transition-all duration-300 ease-out z-10
        "
      />
    </Link>
  );
}
