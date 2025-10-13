"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

export default function Mission() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      {/* Intro Section */}
      <div className="py-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 py-10 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="space-y-6 text-center md:text-left">
            <p className="text-lg leading-relaxed text-gray-700">
              <span className="font-semibold text-gray-800">Weboria</span> was founded on the belief
              that a brand's digital presence should be{" "}
              <b className="font-bold text-gray-900">
                a powerful engine for measurable business growth
              </b>
              , not just a beautiful design.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              With over a decade of experience, we've evolved into a{" "}
              <b className="font-bold text-gray-900">360° digital solutions agency</b>,
              partnering with companies across the globe. Our commitment: bespoke strategies
              in web development, SEO, and creative design that elevate your brand and drive{" "}
              <b className="font-bold text-gray-900">commercial success.</b>
            </p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 space-y-20">
        {/* === Row 1: OUR MISSION === */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Title */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <h2 className="text-5xl md:text-7xl md:mt-16 md:ml-8 font-extrabold text-black uppercase tracking-tight">
              OUR MISSION
            </h2>
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          {/* Right: Details */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              At <b>WebOria</b>, our mission is to empower brands with digital excellence.
              We blend creativity, strategy, and technology to help businesses grow smarter and faster in the online world.
              From digital marketing and SEO to web development and brand strategy — every project we take on is built to deliver impact, not just impressions.
              Based in Dhaka, WebOria partners with global clients to transform ideas into measurable success.
              Our goal is simple: to help your brand stand out, connect deeply, and thrive in the ever-evolving digital era.
            </p>
          </motion.div>
        </div>

        {/* === Row 2: OUR VISION === */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Details */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              At <b>WebOria</b>, our vision is to redefine the digital future through innovation, intelligence, and impact.
              We aspire to be a globally trusted name in AI-driven marketing and web solutions — a creative hub where technology and strategy work hand in hand to empower businesses.
              By harnessing data, automation, and design excellence, we aim to help brands not only grow but lead with confidence in the digital era.
              Our vision is simple yet bold — to set new benchmarks in digital transformation and make every brand we work with a story of success.
            </p>
          </motion.div>

          {/* Right: Title */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-start lg:items-end text-left lg:text-right"
          >
            <h2 className="text-5xl md:text-7xl md:mt-16 md:mr-12 font-extrabold text-black uppercase tracking-tight">
              OUR VISION
            </h2>
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mt-4 lg:ml-auto"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
