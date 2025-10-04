"use client"
import React from "react";
import HandshakeImg from "../../../../public/assets/images/portfolio/team-heading-shape.png";

const FeaturedProjects = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-20">
      {/* Small heading */}
      <p className="text-sm font-semibold uppercase tracking-widest mb-4 flex items-center">
        FRAME WORK FOR SUCCESS
        <span className="ml-2 w-3 h-3 bg-black rounded-full"></span>
      </p>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={HandshakeImg}
            alt="Handshake"
            className="w-40 md:w-56 lg:w-64 object-contain"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-6 leading-tight">
            OUR FEATURED PROJECTS IN <br />
            DIGITAL MARKETING COMPANY
          </h2>
          </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
