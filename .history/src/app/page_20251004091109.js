import React from 'react';
import { ChevronRight, Zap, TrendingUp, Shield, Layers, Lightbulb, Rocket } from 'lucide-react';
import Marquee from './Home/components/Marquee';
import Service from '@/components/Service';
import ScrollingLogos from './Home/components/ScrollingLogos';
import SectionTitle from '@/components/SectionTitle';
import AgencySections from '@/components/AgencySections';
import Testimonials from './Home/components/Testimonials';
// Assuming you'll use lucide-react for the icons.

// Placeholder components for images/logos to keep the code clean. 
// In a real Next.js app, you'd replace these with <Image> components pointing to your assets.
const ImagePlaceholder = ({ children, className = "bg-gray-200 h-full w-full flex items-center justify-center text-gray-500" }) => (
  <div className={className}>{children}</div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">

      {/* 1. Hero / Empowering Digital Presence Section */}
      <section className="relative py-20 px-4 lg:px-20 overflow-hidden">

        {/* Large, transparent background text */}
        <div className="hidden lg:block absolute top-10 md:left-30 w-full h-full pointer-events-none">
          <h1 className="text-[12rem] xl:text-[14rem] font-black leading-none uppercase text-gray-200 opacity-20 whitespace-nowrap -translate-x-10">
            WEBORIA
          </h1>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between">

          {/* Left Content: Title and Image */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 pr-4">
            <p className="text-4xl md:text-6xl font-serif font-extrabold mb-4 text-black leading-tight">
              AI-Powered
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <p className="text-5xl md:text-7xl font-serif font-extrabold text-orange-500">
                Digital Marketing Agency
              </p>
            </div>
            <p className="text-4xl md:text-6xl font-serif font-extrabold text-black leading-tight">
              From Bangladesh
            </p>
          </div>

          {/* Right Content: About Text */}
          <div className="lg:w-1/2 max-w-lg lg:pt-16">
            {/* <p className="text-xl font-bold mb-4 text-orange-500">Visual i</p>
            <p className="text-lg leading-relaxed text-gray-700">
              Visual i is an international **digital marketing agency** with a head office in the UK and a country office in Banani, Dhaka, Bangladesh. We specialize in helping businesses excel online with services like SEO, social media marketing, Google Ads, PR, graphic design, cyber security, web development, and so on. Since our founding, we've worked with companies across the globe to enhance their digital presence.
            </p>
            <p className="text-lg leading-relaxed mt-4 text-gray-700">
              Whether you need to boost online visibility, drive targeted traffic, or increase customer engagement, we craft bespoke strategies to make your brand shine. Join us and take your business to new heights!
            </p> */}
          </div>
        </div>
      </section>

      {/* 2. Experience / Stats Section */}
      <section className="py-20 px-4 lg:px-20 bg-gray-50">
        <div className="flex flex-col lg:flex-row items-center justify-between">

          {/* Left: Years of Experience */}
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
              Result-Driven Digital Marketing Service That Ignites Sales And Drives Traffic.
            </p>
          </div>

          {/* Right: Feature Boxes */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
            {/* Box 1 (Top Left) */}
            <div className="border border-orange-300 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2 text-orange-500">ROI-Oriented</h3>
              <p className="text-gray-600 text-sm mb-4">At Visual i, we focus on ROI-driven results—not just promotion. Every strategy is built to deliver measurable growth, real value, and business success.</p>

              <div className="border-t border-orange-300 pt-4">
                <h4 className="text-xl font-bold mt-2 mb-1 text-black">Conversion Rate</h4>
                <p className="text-gray-600 text-sm">At Visual i, we enhance conversion rates by optimizing strategies that turn visitors into loyal customers, driving real growth and success.</p>
              </div>
            </div>

            {/* Box 2 (Top Right) */}
            <div className="border border-orange-300 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2 text-orange-500">Responsive Design</h3>
              <p className="text-gray-600 text-sm mb-4">At Visual i, we create responsive designs that ensure your website looks perfect on any device, delivering a seamless experience for all users.</p>

              <div className="border-t border-orange-300 pt-4">
                <h4 className="text-xl font-bold mt-2 mb-1 text-black">Creative Design</h4>
                <p className="text-gray-600 text-sm">At Visual i, creative design goes beyond visuals—we build bold, scroll-stopping designs that capture attention, spark emotion, and drive your audience to act.</p>
              </div>
            </div>

            {/* Box 3 (Bottom Left) - Replicating the 3-box structure where the third box is below the first two. */}
            <div className="border border-orange-300 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2 text-orange-500">Data Protection</h3>
              <p className="text-gray-600 text-sm mb-4">At Visual i, we safeguard your data with top-tier security, ensuring protection and confidentiality while you focus on growing your business and 24/7 monitoring.</p>

              <div className="border-t border-orange-300 pt-4">
                <h4 className="text-xl font-bold mt-2 mb-1 text-black">Business Growth</h4>
                <p className="text-gray-600 text-sm">Boost your business growth with a powerful website, app, and SEO. Visual i optimizes every aspect to drive traffic, engagement, and conversions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Marquee Component */}
      <Marquee />

      {/* 3. Services Overview Section */}
      <Service />

      {/* 4. Client Logos Section */}
      <ScrollingLogos />

      {/* 5. Featured Projects Section */}
      <section className="py-20 px-4 lg:px-20">
        <h2 className="text-5xl font-semibold text-black text-center">
          OUR FEATURED 
        </h2>
        <h2 className='text-orange-500 text-5xl lg:ml-[620px]'> PROJECTS</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">

          {/* Project 1: FIBER @ HOME */}
          <div className="flex flex-col p-4">
            <p className="text-6xl font-bold text-gray-300 mb-2">01</p>
            <h3 className="text-4xl font-bold mb-8">FIBER @ HOME</h3>
            <ImagePlaceholder className="relative w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg shadow-xl overflow-hidden">
              {/* Complex mockup with desktop and mobile view */}
              <p className="text-sm">Website Mockup (Desktop/Mobile)</p>
            </ImagePlaceholder>
          </div>

          {/* Project 2: AJWAH TECH */}
          <div className="flex flex-col p-4">
            <p className="text-6xl font-bold text-gray-300 mb-2">02</p>
            <h3 className="text-4xl font-bold mb-8">AJWAH TECH</h3>
            <ImagePlaceholder className="relative w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg shadow-xl overflow-hidden">
              <p className="text-sm">Website Mockup (Desktop/Mobile)</p>
            </ImagePlaceholder>
          </div>

          {/* Project 3: CROWN BANQUETING SUITE */}
          <div className="flex flex-col p-4">
            <p className="text-6xl font-bold text-gray-300 mb-2">03</p>
            <h3 className="text-4xl font-bold mb-8">CROWN BANQUETING SUITE</h3>
            <ImagePlaceholder className="relative w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg shadow-xl overflow-hidden">
              <p className="text-sm">Website Mockup (Desktop/Mobile)</p>
            </ImagePlaceholder>
          </div>

          {/* Project 4: RAINSTONE MONEY */}
          <div className="flex flex-col p-4">
            <p className="text-6xl font-bold text-gray-300 mb-2">04</p>
            <h3 className="text-4xl font-bold mb-8">RAINSTONE MONEY</h3>
            <ImagePlaceholder className="relative w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg shadow-xl overflow-hidden">
              <p className="text-sm">Website Mockup (Desktop/Mobile)</p>
            </ImagePlaceholder>
          </div>

          {/* Project 5: NORTHSOUTH GROUP */}
          <div className="flex flex-col p-4">
            <p className="text-6xl font-bold text-gray-300 mb-2">05</p>
            <h3 className="text-4xl font-bold mb-8">NORTHSOUTH GROUP</h3>
            <ImagePlaceholder className="relative w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg shadow-xl overflow-hidden">
              <p className="text-sm">Website Mockup (Desktop/Mobile)</p>
            </ImagePlaceholder>
          </div>

          {/* Project Text/CTA */}
          <div className="flex flex-col justify-center p-4">
            <p className="text-lg leading-relaxed mb-10 text-gray-700">
              As a leading digital marketing agency in Dhaka, Bangladesh, Visual i delivers result-driven strategies designed for impact. Our portfolio speaks for itself—projects like Fiber@Home, Ajwah Tech, Crown Banqueting Suite, Rainstone Money, and Northsouth Group highlight our ability to elevate brands and drive measurable growth. Have a look at our work and see the difference real expertise makes.
            </p>

            {/* "See More Projects" CTA - large black circle */}
            <div className="relative w-48 h-48 mx-auto">
              <a
                href="/projects"
                className="absolute w-full h-full rounded-full bg-black text-white flex flex-col items-center justify-center text-xl font-semibold hover:bg-gray-800 transition"
              >
                See <ChevronRight className="inline ml-1" size={24} /> More Projects
              </a>
              {/* Yellow dot detail */}
              <div className="absolute top-0 right-0 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>


      {/* 6. Get Free SEO Audit CTA Section */}
      <section className="py-20 px-4 lg:px-20 bg-gray-100 text-center">
        <SectionTitle titleTop={"GET FREE"} titleBottom={"SEO AUDIT?"}></SectionTitle>
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto mt-12">

          {/* Left: Input Form */}
          <div className="lg:w-1/2 p-4 lg:pr-8">
            <p className="text-lg leading-relaxed mb-8 text-gray-700 lg:text-left">
              Visual i, a top-tier digital marketing and SEO agency offers a free SEO audit to evaluate your website's performance. This audit uncovers key opportunities for improvement—from search engine rankings to user experience—and delivers actionable insights to enhance your online visibility, if boosting traffic or strengthening your SEO strategy is your goal, this free SEO audit is the perfect starting point for impactful results.
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
              <button className="btn btn-lg bg-black text-white rounded-md shadow-lg hover:bg-gray-800 transition w-full max-w-sm lg:max-w-none">
                <ChevronRight size={20} className="inline mr-2" /> Submit Now
              </button>
            </div>
          </div>

          {/* Right: Dashboard/Charts Image (Placeholder) */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 p-4">
            {/* The complex SEO chart visual is mocked here using simple boxes and text */}
            <div className="bg-white p-6 shadow-2xl rounded-lg border-t-4 border-orange-500">
              <div className='flex justify-around items-center mb-6'>
                {/* Mock Pie Chart */}
                <div className='w-24 h-24 rounded-full border-8 border-green-500/50 flex items-center justify-center text-xl font-bold'>70%</div>

                {/* Mock Bars/Data */}
                <div className='space-y-2'>
                  <div className='bg-red-600 text-white p-1 px-4 rounded-md text-right font-bold'>30</div>
                  <div className='bg-orange-500 text-white p-1 px-4 rounded-md text-right font-bold'>239</div>
                  <div className='bg-gray-200 text-gray-800 p-1 px-4 rounded-md text-right font-bold text-sm'>Oct 24, 2020</div>
                  <div className='bg-gray-200 text-gray-800 p-1 px-4 rounded-md text-right font-bold text-sm'>582</div>
                </div>
              </div>

              {/* Mock Bar Chart Area */}
              <ImagePlaceholder className="h-32 bg-gray-100 border border-gray-300">
                <p className='text-xs'>Bar Chart Mockup</p>
              </ImagePlaceholder>

              {/* Mock Small Circle Data */}
              <div className='flex justify-around mt-4 text-center'>
                <div className='p-2'><p className='text-xl font-bold text-blue-800'>500</p><p className='text-xs'>Pages Scanned</p></div>
                <div className='p-2'><p className='text-xl font-bold text-green-500'>4</p><p className='text-xs'>Valid</p></div>
                <div className='p-2'><p className='text-xl font-bold text-red-600'>9</p><p className='text-xs'>Invalid</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Full Range of Services Menu (The text part only, as the menu itself is complex) */}
      <AgencySections/>

      <Testimonials/>

    </div>
  );
};

export default Home;