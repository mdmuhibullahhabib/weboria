"use client";
import React from "react";
import { motion } from "framer-motion";

// --- Icon Components (SVG) ---
const CheckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
);
const TargetIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
);
const GlobeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
);
const Briefcase = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V19c0-1.105-.895-2-2-2h-4c-1.105 0-2 .895-2 2v2" /></svg>
);
const UserIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);

// --- Mock Data ---
const statsData = [
  { label: "Years Experience", value: "12+", icon: Briefcase },
  { label: "Completed Projects", value: "200+", icon: CheckIcon },
  { label: "Satisfied Clients", value: "130+", icon: UserIcon },
];
const teamMembers = [
  { name: "John Doe", role: "Founder & CEO", avatarUrl: "https://placehold.co/150x150/1F2937/FFFFFF?text=CEO" },
  { name: "Jane Smith", role: "Head of Strategy", avatarUrl: "https://placehold.co/150x150/2563EB/FFFFFF?text=Jane" },
  { name: "Alex Lee", role: "Lead Developer", avatarUrl: "https://placehold.co/150x150/F97316/FFFFFF?text=Alex" },
  { name: "Sara Khan", role: "Creative Director", avatarUrl: "https://placehold.co/150x150/10B981/FFFFFF?text=Sara" },
];
const coreValues = [
  { title: "ROI-Oriented Focus", description: "Strategies built to fuel measurable growth and long-term value.", icon: Briefcase, color: "text-indigo-600" },
  { title: "Responsive & Creative Design", description: "We deliver bold visuals and fast, seamless websites for all devices.", icon: CheckIcon, color: "text-orange-500" },
  { title: "Enterprise-Grade Security", description: "Your data stays private with top-tier protection and 24/7 monitoring.", icon: UserIcon, color: "text-green-600" },
  { title: "Global Digital Presence", description: "Partnering worldwide to sharpen digital footprint and visibility.", icon: GlobeIcon, color: "text-yellow-500" },
];

// --- Helper Component ---
const SectionHeader = ({ mainText, subText, align = "center" }) => (
  <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">{mainText.toUpperCase()}</h2>
    <p className="text-3xl sm:text-4xl font-extrabold text-orange-500 mt-1">{subText.toUpperCase()}</p>
  </div>
);

// --- Main Component ---
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter'] overflow-hidden">

      {/* Hero */}
      <section className="relative bg-gray-900 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/80"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://placehold.co/1920x600/1F2937/FFFFFF?text=About+Us')" }}></div>
        <motion.div
          className="relative max-w-7xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl font-semibold text-orange-500 mb-2">Our Story</p>
          <h1 className="text-6xl sm:text-7xl font-extrabold text-white">About Visual i</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering Your Digital Presence with result-driven solutions since 2012.
          </p>
        </motion.div>
      </section>

      {/* Story + Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <SectionHeader mainText="OUR" subText="ORIGIN STORY" align="left" />
            <p className="text-lg text-gray-600">
              Visual i was founded on the belief that digital presence should be
              <b className="text-gray-800"> a powerful engine for business growth</b>.
            </p>
            <p className="text-lg text-gray-600">
              With a decade of experience, we’ve evolved into a 360° agency, delivering web, SEO & design strategies for
              <b className="text-gray-800"> commercial success.</b>
            </p>

            <div className="pt-8 flex gap-4">
              <a href="/contact" className="px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition shadow-md">Contact Us</a>
              <a href="/chat" className="px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 transition shadow-md">Let’s Chat</a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            className="relative p-8 bg-gray-100 rounded-xl shadow-lg border-t-8 border-gray-900 lg:mt-[100px]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-4 right-4 text-gray-400">
              <TargetIcon className="w-12 h-12" />
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-inner hover:shadow-xl transition">
                <h4 className="text-2xl font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1 flex items-center">
                  <span className="w-4 h-4 rounded-full bg-yellow-400 mr-3"></span>Our Mission
                </h4>
                <p className="text-gray-700">
                  To <b>empower ambitious brands</b> with high-performance digital strategies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-inner hover:shadow-xl transition">
                <h4 className="text-2xl font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1 flex items-center">
                  <span className="w-4 h-4 rounded-full bg-orange-500 mr-3"></span>Our Vision
                </h4>
                <p className="text-gray-700">
                  To be the <b>global catalyst for digital transformation</b> and innovation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader mainText="WHY" subText="CHOOSE US" />
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {coreValues.map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 transition-transform hover:-translate-y-2">
                <value.icon className={`w-8 h-8 ${value.color} mb-4`} />
                <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader mainText="VISUAL I" subText="IN NUMBERS" />
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {statsData.map((stat, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-xl text-center border-b-4 border-orange-500 shadow-xl hover:scale-105 transition">
                <stat.icon className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                <p className="text-6xl font-extrabold text-white">{stat.value}</p>
                <h3 className="text-lg font-semibold text-gray-300 mt-2">{stat.label}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader mainText="MEET OUR" subText="EXPERT TEAM" />
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {teamMembers.map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 rounded-xl group hover:shadow-2xl transition">
                <div className="overflow-hidden rounded-full w-32 h-32 ring-4 ring-indigo-500/50 mb-4 shadow-lg">
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    className="w-32 h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                <p className="text-sm text-orange-500 font-medium">{member.role}</p>
              </div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 text-base font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition shadow-lg">
              Join Our Dynamic Team
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <motion.section
        className="py-16 bg-indigo-600 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to Boost Your Digital Presence?</h2>
          <p className="mt-4 text-xl text-indigo-200">
            Let’s discuss your next project and craft a winning strategy.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="px-6 py-3 rounded-lg text-indigo-600 bg-white hover:bg-gray-100 transition shadow-lg">
              Get a Free Audit
            </button>
            <button className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-indigo-600 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
