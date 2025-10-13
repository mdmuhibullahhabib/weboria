"use client";
import React from "react";
import {
  Rocket,
  Lightbulb,
  Monitor,
  Check,
  PhoneCall,
  Zap,
} from "lucide-react";
import Image from "next/image";
import PRESENCE from "../../public/assets/EMPOWERING.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

const Service = () => {
  const serviceData = [
    {
      title: "DIGITAL MARKETING & SEO SOLUTIONS",
      icon: Rocket,
      iconColor: "text-red-500",
      image:
        "https://i.ibb.co.com/zhKpDgY6/digital-marketing-seo-rocket.webp",
      expertise: [
        "Increase Website Traffic",
        "Rank Higher on Google",
        "Generate More Leads & Sales",
        "Optimize Content Strategy",
      ],
    },
    {
      title: "ENTERPRISE SOLUTIONS",
      icon: Lightbulb,
      iconColor: "text-yellow-500",
      image: "https://i.ibb.co.com/yF4dXf88/ENTERPRISE-SOLUTIONS.jpg",
      expertise: [
        "Optimize Operations",
        "Boost Productivity",
        "Scale Securely",
        "Grow Smart",
      ],
    },
    {
      title: "WEBSITE DEVELOPMENT SERVICES",
      icon: Monitor,
      iconColor: "text-blue-500",
      image: "https://i.ibb.co.com/T3Z0VCn/WEBSITE-DEVELOPMENT-SERVICES.jpg",
      expertise: [
        "Website Design and Development",
        "Web Application Development",
        "Custom CMS",
        "E-commerce Platforms",
      ],
    },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 * i, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-6 lg:py-8 flex flex-col lg:flex-row items-center lg:space-x-12">
        {/* Left Column */}
        <motion.div
          className="lg:w-1/2 mb-10 lg:mb-0 pr-4"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-5xl md:text-7xl font-serif font-extrabold mb-4 text-black leading-tight"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            EMPOWERING
          </motion.p>

          <div className="flex items-center space-x-4 mb-4">
            <motion.div
              className="relative w-48 h-24 rounded-md overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={PRESENCE}
                alt="presence image"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.p
              className="text-3xl md:text-4xl font-serif font-extrabold text-orange-500"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              YOUR DIGITAL
            </motion.p>
          </div>

          <p className="text-4xl md:text-6xl font-serif font-extrabold text-black leading-tight">
            PRESENCE
          </p>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="lg:w-1/2 pt-16 lg:pt-0 text-gray-700 space-y-4"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p>
            <span className="font-bold text-orange-500">WebOria</span> is a
            results-driven digital agency that helps brands stand out in the
            online world. From SEO and social media marketing to web
            development, branding, and automation — we create strategies that
            convert clicks into loyal customers.
          </p>
          <p>
            With a passion for innovation and design, we craft tailored digital
            experiences that amplify visibility, boost engagement, and drive
            measurable growth. At WebOria, your brand isn’t just seen — it’s
            remembered.
          </p>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href={"/contact"}>
              <button className="flex items-center mt-6 px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition">
                <PhoneCall className="h-5 w-5 mr-2" />
                Let’s Talk Strategy
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Service Cards Section */}
      <section className="container mx-auto px-4 py-6 lg:py-12">
        <motion.header
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center mb-4">
            <motion.div
              className="w-10 h-10 border-4 border-gray-400 rounded-full flex items-center justify-center mr-2"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            >
              <Zap size={20} className="text-gray-700" />
            </motion.div>
            <p className="text-xl font-semibold uppercase text-gray-700">
              webOria Provides
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-black">
            360° <span className="text-orange-500">DIGITAL SOLUTIONS</span>
          </h2>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
        >
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index}
              whileHover={{
                scale: 1.05,
                rotate: 0.5,
                boxShadow: "0px 12px 25px rgba(0,0,0,0.1)",
              }}
              className="shadow-xl bg-white rounded-2xl overflow-hidden border-t-4 border-blue-600 transition-all"
            >
              <figure className="h-48 relative bg-gray-100 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/400x300/cccccc/333333?text=Visuals";
                  }}
                />
                <div className="absolute top-4 left-4 flex items-center">
                  <service.icon
                    className={`h-8 w-8 ${service.iconColor} drop-shadow-md`}
                  />
                </div>
              </figure>

              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 text-gray-800">
                  {service.title}
                </h2>
                <div
                  className={`text-sm font-semibold mb-2 ${service.iconColor}`}
                >
                  OUR EXPERTISE:
                </div>
                <ul className="space-y-2">
                  {service.expertise.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-600 text-sm"
                    >
                      <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="ml-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Service;
