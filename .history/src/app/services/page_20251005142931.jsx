"use client";
import React, { useEffect, useState } from "react";
import {
  ChevronRight,
  CheckCircle,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Services() {
  const [data, setData] = useState({
    stats: [],
    services: [],
    faqs: [],
    partners: [],
  });

  useEffect(() => {
    setTimeout(() => {
      setData({
        stats: [
          { _id: "1", label: "Years Experience", value: "12+" },
          { _id: "2", label: "Completed Projects", value: "200+" },
          { _id: "3", label: "Satisfied Clients", value: "130+" },
        ],
        services: [
          "Digital Marketing",
          "SEO Optimization",
          "Web Development",
          "Brand Strategy",
          "Performance Analytics",
          "Cyber Security",
          "Software Integration",
          "Consulting Services",
        ],
        partners: [
          { _id: "p1", name: "AWS", icon: "https://placehold.co/100x60?text=AWS" },
          { _id: "p2", name: "Azure", icon: "https://placehold.co/100x60?text=Azure" },
          { _id: "p3", name: "Google Partner", icon: "https://placehold.co/100x60?text=Google" },
          { _id: "p4", name: "ISO Certified", icon: "https://placehold.co/100x60?text=ISO" },
        ],
        faqs: [
          {
            _id: "f1",
            question: "How much does software development cost?",
            answer:
              "Cost varies depending on project complexity and requirements. We provide a detailed quote after understanding your needs.",
          },
          {
            _id: "f2",
            question: "How long does it take to develop software?",
            answer:
              "A small project may take 4-8 weeks, while enterprise solutions can take several months depending on scope.",
          },
          {
            _id: "f3",
            question: "Why choose custom software?",
            answer:
              "Custom software is built for your business processes, offering flexibility, scalability, and a competitive edge.",
          },
        ],
      });
    }, 500);
  }, []);

  // ---------- UI SECTIONS ----------

  const HeroSection = () => (
    <section
      className="relative bg-cover bg-center text-white py-32"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80')",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Empowering Brands with <br /> Impactful Digital Services
        </h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          From strategy to execution, we deliver modern digital solutions that
          accelerate your business growth and brand impact.
        </p>
      </div>
    </section>
  );

  const StatsSection = () => (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {data.stats.map((s) => (
          <div
            key={s._id}
            className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition"
          >
            <h3 className="text-gray-600 text-lg font-medium mb-4">{s.label}</h3>
            <p className="text-6xl font-extrabold text-gray-900">{s.value}</p>
          </div>
        ))}
      </div>
    </section>
  );

  const ServiceSection = () => (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-8">
          Explore Our Services
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-4xl">
          At Weboria, we bring together technology, creativity, and strategy to
          help your brand dominate the digital space.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {data.services.map((service, i) => (
            <div key={i} className="flex items-center space-x-3">
              <CheckCircle className="text-orange-500 w-6 h-6 flex-shrink-0" />
              <span className="text-lg text-gray-800">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const PartnerSection = () => (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-12">
          Trusted Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {data.partners.map((p) => (
            <div
              key={p._id}
              className="p-6 border rounded-xl bg-gray-50 hover:shadow-md transition"
            >
              <img src={p.icon} alt={p.name} className="mx-auto" />
              <p className="mt-4 font-semibold text-gray-700">{p.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const FAQSection = () => (
    <section className="bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {data.faqs.map((f) => (
            <details
              key={f._id}
              className="bg-white border rounded-lg p-6 shadow-sm"
            >
              <summary className="font-semibold text-lg cursor-pointer text-gray-900">
                {f.question}
              </summary>
              <p className="mt-2 text-gray-600">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let’s bring your vision to life. Contact us today for a free
            consultation.
          </p>
          <div className="space-y-6">
            <div className="flex items-start">
              <Phone className="w-6 h-6 mr-3 text-gray-900" />
              <p>+880 189-600-6896</p>
            </div>
            <div className="flex items-start">
              <Mail className="w-6 h-6 mr-3 text-gray-900" />
              <p>hello@weboria.com</p>
            </div>
            <div className="flex items-start">
              <MapPin className="w-6 h-6 mr-3 text-gray-900" />
              <p>Banani, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full rounded-lg p-3 border-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full rounded-lg p-3 border-gray-300"
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full rounded-lg p-3 h-40 border-gray-300"
          ></textarea>
          <button
            type="submit"
            className="btn bg-gray-900 text-white hover:bg-orange-500 w-full py-3 rounded-lg font-semibold flex justify-center items-center"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );

  return (
    <div className="font-sans text-gray-900">
      <HeroSection />
      <StatsSection />
      <ServiceSection />
      <PartnerSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
