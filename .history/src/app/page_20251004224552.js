import React from 'react';
import { ChevronRight } from 'lucide-react';
import Marquee from './Home/components/Marquee';
import Service from '@/components/Service';
import ScrollingLogos from './Home/components/ScrollingLogos';
import SectionTitle from '@/components/SectionTitle';
import AgencySections from '@/components/AgencySections';
import Testimonials from './Home/components/Testimonials';
import Button from '@/components/Button';

const ImagePlaceholder = ({ children, className = "bg-gray-200 h-full w-full flex items-center justify-center text-gray-500" }) => (
  <div className={className}>{children}</div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      {/* 1. Hero Section */}
      <section className="relative py-20 px-4 lg:px-20 overflow-hidden">
        <div className="hidden lg:block absolute top-10 md:left-30 w-full h-full pointer-events-none">
          <h1 className="text-[12rem] xl:text-[14rem] font-black leading-none uppercase text-gray-200 opacity-20 whitespace-nowrap -translate-x-10">
            WEBORIA
          </h1>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0 pr-4">
            <div className="uppercase flex flex-wrap items-center gap-3 text-center lg:text-left">
              <span className="text-4xl md:text-6xl font-serif font-extrabold text-black leading-tight">
                AI-Powered
              </span>
              <span className="text-5xl md:text-6xl font-serif font-extrabold text-orange-500 whitespace-nowrap">
                Digital Marketing Agency
              </span>
            </div>
            <div className='mt-10 font-semibold space-x-3'>
              <Button text="Contact Us" href='/contact' />
              <Button text="Let’s Chat" href='/wp' />
            </div>
          </div>

          <div className="lg:w-1/2 max-w-lg lg:pt-16">
            {/* About section here */}
          </div>
        </div>
      </section>

      {/* 2. Experience Section */}
      <section className="py-20 px-4 lg:px-20 bg-gray-50">
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

      {/* 5. Featured Projects */}
      <section className="py-20 px-4 lg:px-20">
        <h2 className="text-5xl font-semibold text-black text-center">
          OUR FEATURED
        </h2>
        <h2 className='text-orange-500 text-5xl lg:ml-[620px]'> PROJECTS</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          {/* Project Items (same as your original code) */}
        </div>
      </section>

      {/* 6. SEO Audit */}
      <section className="py-20 px-4 lg:px-20 bg-gray-100 text-center">
        <SectionTitle titleTop={"GET FREE"} titleBottom={"SEO AUDIT?"}></SectionTitle>
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto mt-12">
          <div className="lg:w-1/2 p-4 lg:pr-8">
            <p className="text-lg leading-relaxed mb-8 text-gray-700 lg:text-left">
              Visual i, a top-tier digital marketing and SEO agency, offers a free SEO audit to evaluate your website&apos;s performance. This audit uncovers key opportunities for improvement—from search engine rankings to user experience—and delivers actionable insights to enhance your online visibility. If boosting traffic or strengthening your SEO strategy is your goal, this free SEO audit is the perfect starting point for impactful results.
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
        </div>
      </section>

      <AgencySections />
      <Testimonials />
    </div>
  );
};

export default Home;
