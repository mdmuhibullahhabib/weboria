"use client"
import React from "react";
import HandshakeImg from "../../../../public/assets/images/portfolio/team-heading-shape.png";
import Image from "next/image";

const FeaturedProjects = () => {
    return (
        <section className="w-full bg-white py-4 px-4 md:px-20">
            {/* Small heading */}
            <p className="text-lg font-semibold uppercase tracking-widest mb-4 flex items-center">
                FRAME WORK FOR SUCCESS
                <span className="ml-2 w-3 h-3 bg-black rounded-full"></span>
            </p>

            {/* Main content */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Image */}
                <div className="flex-shrink-0">
                    <Image
                        src={HandshakeImg}
                        alt="Handshake"
                        className="w-40 md:w-56 lg:w-64 object-contain"
                    />
                </div>

                {/* Text content */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                        OUR FEATURED PROJECTS IN <br />
                        DIGITAL MARKETING COMPANY
                    </h2>
                </div>
            </div>

            <div className="">
                <p className="text-gray-700 text-base md:text-lg lg:text-xl
                 leading-relaxed md:leading-7 lg:leading-8 mx-auto">
                    At <span className="font-semibold text-blue-600">Weboria</span>,
                     real success is measured by the results we deliver. As a leading Digital Marketing
                      Company, we proudly partner with businesses across industries to create impactful
                       digital experiences. From custom websites and mobile apps to SEO campaigns and
                        full brand transformations, our projects showcase the power of strategy, creativity,
                         and technology working together.

                    Each project reflects our commitment to innovation, performance, and client success.
                     Explore how our tailored solutions help brands grow, engage audiences, and stay ahead
                      in today’s fast-evolving digital world. Ready to elevate your business? Let’s create 
                      something <span className="font-semibold text-blue-600">exceptional</span> together.
                </p>
            </div>
        </section>
    );
};

export default FeaturedProjects;
