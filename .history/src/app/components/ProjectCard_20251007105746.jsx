"use client";
import React from "react";
import Image from "next/image";

const ProjectCard = ({ number, title, image }) => {
  return (
    <div className="flex flex-col p-4">
      <p className="text-6xl font-bold text-gray-300 mb-2">{number}</p>
      <h3 className="text-4xl font-bold mb-8">{title}</h3>

      <div className="relative w-full h-86 rounded-lg shadow-xl overflow-hidden bg-gray-100 group">
        {/* Project Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          priority
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
