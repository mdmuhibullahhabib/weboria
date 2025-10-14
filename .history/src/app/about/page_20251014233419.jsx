"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Mission from "./components/Mission";
import Aboutbg from "../../../public/assets/images/about/weboria-software-and-marketing-agency.avif";

// --- Icon Placeholders ---
const CheckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const GlobeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
  </svg>
);
const Briefcase = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V19c0-1.105-.895-2-2-2h-4c-1.105 0-2 .895-2 2v2" />
  </svg>
);
const UserIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

// --- Data ---
const statsData = [
  { label: "Years Experience", value: "2+", icon: Briefcase },
  { label: "Completed Projects", value: "30+", icon: CheckIcon },
  { label: "Satisfied Clients", value: "30+", icon: UserIcon },
];
const coreValues = [
  { title: "ROI-Oriented Focus", description: "Strategies built to fuel measurable growth and ROI.", icon: Briefcase, color: "text-indigo-600" },
  { title: "Responsive & Creative Design", description: "Bold visuals and seamless UX across devices.", icon: CheckIcon, color: "text-orange-500" },
  { title: "Enterprise-Grade Security", description: "Private, secure, and continuously monitored.", icon: UserIcon, color: "text-green-600" },
  { title: "Global Digital Presence", description: "Working with clients worldwide to amplify reach.", icon: GlobeIcon, color: "text-yellow-500" },
];
const teamMembers = [
  { name: "Muhibullah Habib", role: "Founder & CEO", avatarUrl: "https://placehold.co/150x150/1F2937/FFFFFF?text=CEO" },
  { name: "Mustak Ahmed", role: "Head of Strategy", avatarUrl: "https://placehold.co/150x150/2563EB/FFFFFF?text=Mustak" },
  { name: "Nahin Hasan", role: "Lead Developer", avatarUrl: "https://placehold.co/150x150/F97316/FFFFFF?text=Nahin" },
  { name: "Sara Khan", role: "Creative Director", avatarUrl: "https://placehold.co/150x150/10B981/FFFFFF?text=Sara" },
];

// --- Section Header ---
const SectionHeader = ({ mainText, subText }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-12 text-center"
  >
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">
      {mainText.toUpperCase()}
    </h2>
    <p className="text-3xl sm:text-4xl font-extrabold text-orange-500 tracking-tight mt-1">
      {subText.toUpperCase()}
    </p>
  </motion.div>
);

export default function AboutPage() {
  return (
    <>
      <title>About - Weboria</title>
      <div className="relative min-h-screen bg-white font-['Inter'] overflow-hidden">

        {/* 🔸 Floating Graphics */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900 py-36">
          <Image src={Aboutbg} alt="About WebOria" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/70"></div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-6xl mx-auto px-6 text-center z-10"
          >
            <p className="text-lg md:text-xl font-semibold text-orange-400 mb-3 uppercase">
              Our Story
            </p>
            <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight">
              About <span className="text-orange-500">WebOria</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
              Since <span className="text-orange-400 font-semibold">2024</span>, WebOria has been
              empowering brands to rise above the noise — crafting AI-powered digital strategies
              that drive measurable growth and transform ideas into impact.
            </p>
            <motion.
              whileHover={{ scale: 1.05 }}
              href="/contact"
              className="inline-block mt-10 px-8 py-4 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition"
            >
              Let’s Build Something Great
            </motion.a>
          </motion.div>
        </div>

        <Mission />

        {/* Core Values */}
        <section className="lg:py-6 py-4 bg-gradient-to-b from-white via-gray-50 to-white relative">
          <SectionHeader mainText="WHY" subText="CHOOSE US" />
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <value.icon className={`w-10 h-10 ${value.color} mb-4`} />
                <h4 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="md:py-6 py-4 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3"
            >
              WebOria in Numbers
            </motion.h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
              Empowering growth and delivering measurable success through innovation and technology.
            </p>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {statsData.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-2xl border shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex justify-center">
                    <div className="p-4 bg-orange-100 rounded-full mb-5">
                      <stat.icon className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>
                  <p className="text-5xl font-extrabold text-gray-900">{stat.value}</p>
                  <h3 className="text-lg font-semibold text-gray-600 mt-2">{stat.label}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-white">
          <SectionHeader mainText="MEET OUR" subText="EXPERT TEAM" />
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-xl shadow-md hover:shadow-2xl transition"
              >
                <div className="overflow-hidden rounded-full w-32 h-32 mx-auto ring-4 ring-orange-400/50 mb-4">
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    className="w-32 h-32 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                <p className="text-sm text-orange-500 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-20 bg-indigo-600 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Ready to Boost Your Digital Presence?
          </h2>
          <p className="mt-4 text-lg text-indigo-200">
            Let’s discuss your next project and craft a strategy for unmatched online success.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium shadow-lg hover:bg-gray-100">
              Get a Free Audit
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition">
              Contact Sales
            </button>
          </div>
        </motion.section>
      </div>
    </>
  );
}
