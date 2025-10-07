"use client"
import React from "react";
import { Rocket, Lightbulb, Monitor, Check, PhoneCall, Zap, Layers } from "lucide-react";
import Image from "next/image";
import PRESENCE from "../../public/assets/EMPOWERING.jpg";

import seo from "../../public/assets/images/home/digital-marketing-seo-rocket.webp";
import seo from "../../public/assets/images/home/digital-marketing-seo-rocket.webp";

const Service = () => {
    // Mock data for the service cards
    const serviceData = [
        {
            title: "DIGITAL MARKETING & SEO SOLUTIONS",
            icon: Rocket,
            iconColor: "text-red-500",
            image: "https://placehold.co/400x300/e0f2ff/0071c2?text=SEO+Rocket",
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
            image: "https://placehold.co/400x300/fffbeb/d97706?text=Enterprise+Idea",
            expertise: ["Optimize Operations", "Boost Productivity", "Scale Securely", "Grow Smart"],
        },
        {
            title: "WEBSITE DEVELOPMENT SERVICES",
            icon: Monitor,
            iconColor: "text-blue-500",
            image: "https://placehold.co/400x300/f3e8ff/7c3aed?text=Web+Monitor",
            expertise: [
                "Website Design and Development",
                "Web Application Development",
                "Custom CMS",
                "E-commerce Platforms",
            ],
        },
    ];

    return (
        <div className="font-sans bg-gray-50 min-h-screen">
            <section className="container mx-auto px-4 py-6 lg:py-8 flex flex-col lg:flex-row items-center lg:space-x-12">
                {/* Left Column */}
                <div className="lg:w-1/2 mb-10 lg:mb-0 pr-4">
                    <p className="text-5xl md:text-7xl font-serif font-extrabold mb-4 text-black leading-tight">
                        EMPOWERING
                    </p>
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="relative w-48 h-24 rounded-md overflow-hidden shadow-lg">
                            <Image
                                src={PRESENCE} 
                                alt="presence image"
                                fill 
                                className="object-cover"
                            />
                        </div>
                        <p className="text-3xl md:text-4xl font-serif font-extrabold text-orange-500">
                            YOUR DIGITAL
                        </p>
                    </div>
                    <p className="text-4xl md:text-6xl font-serif font-extrabold text-black leading-tight">
                        PRESENCE
                    </p>
                </div>

                {/* Right Column */}
                <div className="lg:w-1/2 pt-16 lg:pt-0 text-gray-700 space-y-4">
                    <p>
                        <span className="font-bold text-orange-500">WebOria</span> is a results-driven digital agency that helps brands stand out in the online world.
                        From SEO and social media marketing to web development, branding, and automation — we create strategies that convert clicks into loyal customers.
                    </p>
                    <p>
                        With a passion for innovation and design, we craft tailored digital experiences that amplify visibility, boost engagement, and drive measurable growth.
                        At WebOria, your brand isn’t just seen — it’s remembered.
                    </p>
                    <button className="flex items-center mt-6 px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition">
                        <PhoneCall className="h-5 w-5 mr-2" />
                        Let’s Talk Strategy
                    </button>
                </div>
            </section>

            <section className="container mx-auto px-4 py-6 lg:py-8">
                <header className="text-center mb-12">
                    <div className="mb-12">
                        <div className="flex justify-center items-center mb-4">
                            <div className="w-10 h-10 border-4 border-gray-400 rounded-full flex items-center justify-center mr-2">
                                <Zap size={20} className="text-gray-700" />
                            </div>
                            <p className="text-xl font-semibold uppercase text-gray-700">webOria Provides</p>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-black">
                            360° <span className='text-orange-500'>DIGITAL SOLUTIONS</span>
                        </h2>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceData.map((service, index) => (
                        <div
                            key={index}
                            className="shadow-xl bg-white rounded-2xl overflow-hidden transition-transform hover:scale-105 duration-300 border-t-4 border-blue-600"
                        >
                            <figure className="h-48 relative bg-gray-100">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://placehold.co/400x300/cccccc/333333?text=Visuals";
                                    }}
                                />
                                <div className="absolute top-4 left-4 flex items-center">
                                    <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                                    <span className="text-sm font-semibold ml-2 text-gray-700">WebOria</span>
                                </div>
                            </figure>
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h2>
                                <div className={`text-sm font-semibold mb-2 ${service.iconColor}`}>OUR EXPERTISE:</div>
                                <ul className="space-y-2">
                                    {service.expertise.map((item, i) => (
                                        <li key={i} className="flex items-start text-gray-600 text-sm">
                                            <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                            <span className="ml-2">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Service;
