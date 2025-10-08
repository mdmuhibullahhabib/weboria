"use client"
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Marquee from './Home/components/Marquee';
import Service from '@/components/Service';
import ScrollingLogos from './Home/components/ScrollingLogos';
import SectionTitle from '@/components/SectionTitle';
import AgencySections from '@/components/AgencySections';
import Testimonials from './Home/components/Testimonials';
import Button from '@/components/Button';
import { motion } from "framer-motion";

// import feature
import aloron from "../../public/assets/images/featured/weboria-web-development-and-marketing-aloron.png"
import choloBangladesh from "../../public/assets/images/featured/weboria-web-development-and-marketing-cholo-bangladesh.png"
import hashi from "../../public/assets/images/featured/weboria-web-development-and-marketing-hashi.png"
import paddy from "../../public/assets/images/featured/weboria-web-development-and-marketing-paddy.png"
import prottaysha from "../../public/assets/images/featured/weboria-web-development-and-marketing-prottaysha.png"
import ProjectCard from './components/ProjectCard';
import CTAButton from './components/CTAButton';
import Image from 'next/image';
import seo from "../../public/assets/images/home/free-seo-audit-by-best-search-engine-optimization-company-in-bangladesh.webp"


const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      {/* 1. Hero Section */}
     <section className="relative py-16 px-6 lg:px-20 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Faint Background Branding Text */}
      <div className="hidden lg:block absolute top-10 left-0 w-full h-full pointer-events-none">
        <h1 className="text-[10rem] xl:text-[14rem] font-black leading-none uppercase text-gray-200 opacity-15 whitespace-nowrap -translate-x-10">
          Weboria
        </h1>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section (Text) */}
        <div className="lg:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-gray-900"
          >
            Transform Your Brand with
            <span className="block bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              AI-Powered Digital Innovation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-xl text-gray-600 max-w-xl"
          >
            At <b>WebOria</b>, we combine technology, creativity, and AI-driven
            strategy to build websites, apps, and marketing campaigns that don’t
            just look stunning — they deliver measurable growth and engagement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button text="Get Started" href="/contact" />
            <Button text="Let’s Talk" href="/wp" variant="outline" />
          </motion.div>
        </div>

        {/* Right Section (Visual / Image Placeholder) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="lg:w-1/2 relative max-w-md mx-auto"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&w=1000&q=80"
              alt="Digital Marketing Team"
              className="object-cover w-full h-[400px]"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
            Since 2012 🚀
          </div>
        </motion.div>
      </div>
    </section>

      {/* 2. Experience Section */}
      <section className="py-6 px-4 lg:px-20 bg-gray-50">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Experience */}
          <div className="lg:w-1/3 mb-10 lg:mb-0 pr-8">
            <p className="text-8xl md:text-9xl font-extrabold text-orange-500 leading-none">
              2+
            </p>
            <p className="text-5xl font-serif font-bold text-gray-800 mt-2">
              YEARS
            </p>
            <p className="text-5xl font-serif font-bold text-gray-800">
              OF EXCELLENCE
            </p>
            <p className="text-xl mt-6 font-light text-gray-600 border-t pt-4 border-gray-300">
              Empowering brands with smart digital solutions that spark growth, boost
              visibility, and deliver measurable success — crafted by WebOria.
            </p>
          </div>

          {/* Right side - Highlights */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
            {/* 1 */}
            <div className="border border-orange-300 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
              <h3 className="text-2xl font-bold mb-2 text-orange-500">
                Growth-Driven Strategy
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                At WebOria, we blend creativity and data to craft strategies that
                maximize ROI. Every campaign is built to attract, engage, and convert.
              </p>
              <div className="border-t border-orange-300 pt-4">
                <h4 className="text-xl font-bold mt-2 mb-1 text-black">
                  Measurable Impact
                </h4>
                <p className="text-gray-600 text-sm">
                  From traffic to revenue, we track every metric that matters — helping
                  you see real growth, not just numbers.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="border border-orange-300 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
              <h3 className="text-2xl font-bold mb-2 text-orange-500">
                Stunning Responsive Design
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Your digital presence deserves perfection on every device. WebOria
                builds responsive, fast, and visually striking designs that connect
                instantly.
              </p>
              <div className="border-t border-orange-300 pt-4">
                <h4 className="text-xl font-bold mt-2 mb-1 text-black">
                  Creative Excellence
                </h4>
                <p className="text-gray-600 text-sm">
                  Our designers turn ideas into digital art — creating interfaces that
                  inspire trust, drive emotion, and boost brand recognition.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="border border-orange-300 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
              <h3 className="text-2xl font-bold mb-2 text-orange-500">
                Security & Reliability
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                WebOria protects your brand with enterprise-grade data security and
                24/7 monitoring — so your business runs safely and smoothly.
              </p>
              <div className="border-t border-orange-300 pt-4">
                <h4 className="text-xl font-bold mt-2 mb-1 text-black">
                  Sustainable Business Growth
                </h4>
                <p className="text-gray-600 text-sm">
                  Through digital strategy, SEO, and modern tech, we help your business
                  rise above competition and stay ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />
      <Service />
      <ScrollingLogos />

      {/* 5. Featured Projects Section */}
      <section className="py-8 px-4 lg:px-20">
        <SectionTitle titleTop={"OUR FEATURED"} titleBottom={"PROJECTS"}></SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <ProjectCard number="01" title="ALORON" image={aloron} />
          <ProjectCard number="02" title="CHOLO BANGLADESH" image={choloBangladesh} />
          <ProjectCard number="03" title="HASHI DENTAL" image={hashi} />
          <ProjectCard number="04" title="PADDY" image={paddy} />
          <ProjectCard number="05" title="PROTTAYSHA" image={prottaysha} />

          {/* ---------- CTA Section ---------- */}
          <div className="flex flex-col justify-center p-4">
            <p className="text-lg leading-relaxed mb-10 text-gray-700">
              As a leading{" "}
              <span className="font-semibold text-gray-900">
                digital marketing agency in Dhaka, Bangladesh
              </span>
              ,<span className="text-orange-500 font-semibold"> WebOria</span> empowers businesses with
              <span className="font-medium"> data-driven strategies</span> that deliver real results.
              From innovative startups to enterprise brands, our success stories — including projects
              like <span className="font-semibold">Fiber@Home</span>,{" "}
              <span className="font-semibold">Ajwah Tech</span>,{" "}
              <span className="font-semibold">Rainstone Money</span>, and{" "}
              <span className="font-semibold">NorthSouth Group</span> — showcase how we transform
              digital potential into measurable growth.
              <br />
              <br />
              Discover how WebOria’s expertise in{" "}
              <span className="font-medium text-gray-900">SEO</span>,{" "}
              <span className="font-medium text-gray-900">Social Media Marketing</span>, and{" "}
              <span className="font-medium text-gray-900">Branding</span> can help your business stand
              out and scale faster in today’s competitive market.
            </p>

            {/* CTA Button */}
            <CTAButton></CTAButton>

          </div>
        </div>

      </section>

      {/* 6. SEO Audit */}
      <section className="py-8 px-4 lg:px-20 bg-gray-100 text-center">
        <SectionTitle titleTop={"GET FREE"} titleBottom={"SEO AUDIT?"}></SectionTitle>
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto mt-12">
          <div className="lg:w-1/2 p-4 lg:pr-8">
            <p className="text-lg leading-relaxed mb-8 text-gray-700 lg:text-left">
              <span className="font-semibold text-orange-500">WebOria</span>, a leading
              <span className="font-medium text-gray-900"> digital marketing and SEO agency in Bangladesh</span>,
              offers a <span className="font-semibold">free SEO audit</span> to assess your website’s performance.
              Our audit reveals key opportunities to improve your
              <span className="font-medium"> search visibility, site speed, and user experience</span>,
              helping you understand exactly what’s holding your growth back.
              Whether you want to boost traffic, rank higher on Google, or strengthen your overall digital strategy,
              WebOria’s <span className="font-semibold">free SEO audit</span> is your perfect first step toward
              measurable online success.
            </p>
            <div className="space-y-4 max-w-sm lg:max-w-none mx-auto lg:mx-0">
              <input
                type="url"
                placeholder="ENTER YOUR WEB-URL"
                className="input w-full p-3 border-2 border-gray-300 focus:border-black rounded-md bg-white text-lg"
              />
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="input w-full p-3 border-2 border-gray-300 focus:border-black rounded-md bg-white text-lg"
              />
              <Button text={"Submit"} href='' />
            </div>
          </div>

          {/* --- Right Image --- */}
          <div className="lg:w-1/2 flex justify-center items-center p-4">
            <div className="relative w-full max-w-lg bg-white rounded-xl shadow-xl overflow-hidden flex items-center justify-center">
              <Image
                src={seo}
                alt="SEO Audit Illustration"
                width={600}
                height={450}
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      <AgencySections />
      <Testimonials />
    </div>
  );
};

export default Home;
