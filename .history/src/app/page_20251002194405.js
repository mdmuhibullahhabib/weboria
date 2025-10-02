"use client";
import React from "react";
import {
  ChevronRight,
  Zap,
  Layers,
  Lightbulb,
  Rocket,
} from "lucide-react";

// Placeholder component for image mocks
const ImagePlaceholder = ({
  children,
  className = "bg-gray-200 h-full w-full flex items-center justify-center text-gray-500",
}) => <div className={className}>{children}</div>;

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      {/* ================= HERO ================= */}
      <section className="relative py-20 px-4 lg:px-20 overflow-hidden">
        <div className="hidden lg:block absolute top-10 left-0 w-full h-full pointer-events-none">
          <h1 className="text-[12rem] xl:text-[14rem] font-black leading-none uppercase text-gray-200 opacity-20 whitespace-nowrap -translate-x-10">
            APP WEB APPLICATION
          </h1>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 pr-4">
            <p className="text-7xl md:text-9xl font-serif font-extrabold mb-4 text-black leading-tight">
              EMPOWERING
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <ImagePlaceholder className="w-24 h-24 rounded-md bg-gray-300">
                <Layers size={32} />
              </ImagePlaceholder>
              <p className="text-4xl md:text-6xl font-serif font-extrabold text-orange-500">
                YOUR DIGITAL
              </p>
            </div>
            <p className="text-7xl md:text-9xl font-serif font-extrabold text-black leading-tight">
              PRESENCE
            </p>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 max-w-lg lg:pt-16">
            <p className="text-xl font-bold mb-4 text-orange-500">Visual i</p>
            <p className="text-lg leading-relaxed text-gray-700">
              Visual i is an international <b>digital marketing agency</b> with a head office
              in the UK and a country office in Dhaka, Bangladesh. We specialize
              in SEO, Google Ads, social media, PR, design, cyber security, and
              web development.
            </p>
            <p className="text-lg leading-relaxed mt-4 text-gray-700">
              Whether you need to boost online visibility or increase customer
              engagement, we craft bespoke strategies to make your brand shine.
            </p>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-20 px-4 lg:px-20 bg-gray-50">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/3 mb-10 lg:mb-0 pr-8">
            <p className="text-8xl md:text-9xl font-extrabold text-orange-500 leading-none">
              12+
            </p>
            <p className="text-5xl font-serif font-bold text-gray-800 mt-2">
              YEARS
            </p>
            <p className="text-5xl font-serif font-bold text-gray-800">
              EXPERIENCE
            </p>
            <p className="text-xl mt-6 font-light text-gray-600 border-t pt-4 border-gray-300">
              Result-driven digital marketing that ignites sales and drives
              traffic.
            </p>
          </div>

          {/* Feature Boxes */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
            <div className="border border-orange-300 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2 text-orange-500">
                ROI-Oriented
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We build ROI-focused strategies that drive measurable growth.
              </p>
            </div>
            <div className="border border-orange-300 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2 text-orange-500">
                Responsive Design
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Websites that look perfect on any device, seamless experience.
              </p>
            </div>
            <div className="border border-orange-300 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2 text-orange-500">
                Data Protection
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We secure your data with 24/7 monitoring and confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 px-4 lg:px-20 text-center">
        <div className="mb-12">
          <div className="flex justify-center items-center mb-4">
            <div className="w-10 h-10 border-4 border-gray-400 rounded-full flex items-center justify-center mr-2">
              <Zap size={20} className="text-gray-700" />
            </div>
            <p className="text-xl font-semibold uppercase text-gray-700">
              Visual i Provides
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-black">
            360° <span className="text-orange-500">DIGITAL SOLUTIONS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 shadow-xl rounded-lg border">
            <Rocket size={80} className="text-orange-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-bold">Digital Marketing & SEO</h3>
          </div>
          <div className="p-8 shadow-xl rounded-lg border">
            <Lightbulb size={80} className="text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-bold">Enterprise Solutions</h3>
          </div>
          <div className="p-8 shadow-xl rounded-lg border">
            <Layers size={80} className="text-green-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-bold">Website Development</h3>
          </div>
        </div>
      </section>

      {/* ================= CLIENT LOGOS ================= */}
      <section className="py-16 px-4 lg:px-20 text-center">
        <div className="border-t border-b py-10 flex flex-wrap justify-around items-center gap-6">
          <p className="text-3xl font-extrabold text-blue-700">Pico</p>
          <p className="text-3xl font-extrabold text-gray-700">Frontpose</p>
          <p className="text-xl font-bold text-green-700">North South Group</p>
          <p className="text-3xl font-extrabold text-yellow-500">Paylakes</p>
          <p className="text-xl font-bold text-gray-700">Rainstone</p>
          <p className="text-xl font-bold text-gray-700">TSG Accountants</p>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-20 px-4 lg:px-20">
        <h2 className="text-6xl font-extrabold text-center">
          OUR FEATURED <span className="text-orange-500">PROJECTS</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {["Fiber @ Home", "Ajwah Tech", "Crown Banqueting", "Rainstone Money", "NorthSouth Group"].map((project, idx) => (
            <div key={idx} className="flex flex-col p-4">
              <p className="text-6xl font-bold text-gray-300 mb-2">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <h3 className="text-4xl font-bold mb-6">{project}</h3>
              <ImagePlaceholder className="w-full h-80 rounded-lg shadow-xl">
                Website Mockup
              </ImagePlaceholder>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SEO AUDIT CTA ================= */}
      <section className="py-20 px-4 lg:px-20 bg-gray-100 text-center">
        <h2 className="text-6xl font-extrabold">
          GET FREE <span className="text-orange-500">SEO AUDIT?</span>
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto mt-12">
          <div className="lg:w-1/2 p-4">
            <input
              type="url"
              placeholder="Enter your website URL"
              className="w-full p-3 border rounded mb-4"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded mb-4"
            />
            <button className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 w-full">
              Submit Now
            </button>
          </div>
          <div className="lg:w-1/2 p-4">
            <ImagePlaceholder className="h-64 rounded-lg shadow-lg">
              SEO Chart / Mock Data
            </ImagePlaceholder>
          </div>
        </div>
      </section>

      {/* ================= FULL RANGE ================= */}
      <section className="py-20 px-4 lg:px-20 text-center">
        <h2 className="text-6xl font-extrabold text-black">OUR FULL RANGE</h2>
        <h2 className="text-6xl font-extrabold text-orange-500 mb-8">
          OF SERVICES MENU
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          From high-impact SEO to dynamic social media strategies and custom
          websites—we handle everything your business needs to thrive online.
        </p>
      </section>
    </div>
  );
};

export default Home;
