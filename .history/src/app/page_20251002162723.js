// pages/index.jsx (বা components/Home.jsx, তারপর import করে index.jsx-তে দেখাও)
"use client"
import Head from "next/head";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>VisualiWeb Clone — Home</title>
        <meta name="description" content="VisualiWeb style homepage clone" />
      </Head>

      <main className="w-full overflow-hidden">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center h-screen bg-gradient-to-br from-indigo-50 to-white">
          <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                AI-Powered Digital Marketing Agency <br className="hidden md:block" />
                from Bangladesh
              </h1>
              <p className="mt-6 text-gray-600">
                Result-driven digital marketing services that ignite sales and drive traffic.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Contact Us <ArrowRight size={16} />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Let’s Chat
                </a>
              </div>
            </div>
            <div className="flex-1">
              <div className="w-full h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/hero-image.jpg"
                  alt="Hero image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services / What We Do */}
        <section id="services" className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold text-center text-gray-800">What we do</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-gray-900">Digital Marketing</h3>
              <p className="mt-3 text-gray-600 text-sm">
                ROI-driven strategies across social, PPC, content, and SEO.
              </p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-gray-900">Web Development</h3>
              <p className="mt-3 text-gray-600 text-sm">
                Fast, responsive, SEO-friendly websites and apps.
              </p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-gray-900">Branding & UI/UX</h3>
              <p className="mt-3 text-gray-600 text-sm">
                Visual identity, design systems, and user experience.
              </p>
            </div>
          </div>
        </section>

        {/* Projects / Featured Works */}
        <section id="projects" className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-800">Featured Projects</h2>
            <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-[1.02] transition"
                >
                  <div className="h-48 bg-gray-200">
                    <img
                      src={`/project-${i}.jpg`}
                      alt={`Project ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-semibold text-lg text-gray-900">Project {i}</h4>
                    <p className="mt-2 text-gray-600 text-sm">
                      Short description about project {i}, what was done.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="/projects"
                className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                See More Projects
              </a>
            </div>
          </div>
        </section>

        {/* Free SEO Audit / CTA */}
        <section id="contact" className="container mx-auto px-6 py-20">
          <div className="max-w-md mx-auto text-center p-8 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900">Get Free SEO Audit</h3>
            <p className="mt-4 text-gray-600">
              We’ll analyze your website’s performance and send you a report with opportunities.
            </p>
            <form className="mt-6 space-y-4">
              <input
                type="url"
                placeholder="Your Website URL"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Submit Now
              </button>
            </form>
          </div>
        </section>

        {/* More sections as needed... */}
      </main>
    </>
  );
}
