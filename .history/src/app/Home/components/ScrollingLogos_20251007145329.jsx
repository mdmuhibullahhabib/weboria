"use client"
import React from "react";

const logos = [
    { name: "Aloron", color: "text-blue-700", size: "text-3xl", weight: "font-extrabold" },
    { name: "cholo Bangladesh", color: "text-gray-700", size: "text-3xl", weight: "font-extrabold" },
    { name: "HASHI", color: "text-green-700", size: "text-xl", weight: "font-bold" },
    { name: "PADDY", color: "text-yellow-500", size: "text-3xl", weight: "font-extrabold" },
    { name: "RAINSTONE MONEY", color: "text-gray-700", size: "text-xl", weight: "font-bold" },
    { name: "TSG Accountants", color: "text-gray-700", size: "text-xl", weight: "font-bold" },
];

const ScrollingLogos = () => {
    return (
        <section className="py-6 px-4 lg:px-20 overflow-hidden">
            <div className="border-t border-b border-gray-200 py-10">
                <div className="flex animate-marquee space-x-2">
                    {/** Repeat logos twice for seamless scroll */}
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex-shrink-0 w-1/3 md:w-1/6 p-1">
                            <p className={`${logo.size} ${logo.weight} ${logo.color} text-center`}>
                                {logo.name.includes(" ") ? logo.name.split(" ")[0] : logo.name}
                                {logo.name.includes(" ") && <span className="font-light"> {logo.name.split(" ").slice(1).join(" ")}</span>}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default ScrollingLogos;
