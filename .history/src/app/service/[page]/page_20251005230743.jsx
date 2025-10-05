"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
    ChevronRight,
    CheckCircle,
    MessageSquare,
    Phone,
    Mail,
    MapPin,
} from "lucide-react";

import image from "../../api/"
// fixed data
const processSteps = [
    { number: '01', title: 'DISCOVERY & PLANNING', position: 'top-left' },
    { number: '02', title: 'DESIGN & ARCHITECTURE', position: 'mid-left' },
    { number: '03', title: 'DEPLOYMENT & TESTING', position: 'mid-right' },
    { number: '04', title: 'POST-DEPLOYMENT SUPPORT & MAINTENANCE', position: 'bottom-center' },
];

// 🔹 JSON Data
const serviceData = {
    page: "software-development",
    heroSection: {
        title: "SOFTWARE DEVELOPMENT",
        subtitle: "Services",
        services: [
            "Custom Software Development",
            "Web Application Development",
            "Software Integration",
            "Cloud Software Development",
            "Legacy System Modernization",
            "Software Maintenance & Support",
            "Quality Assurance & Testing",
            "Consulting Services",
        ],
    },
    serviceListSection: {
        title: "Best Software Development Service in Dhaka, Bangladesh",
        description:
            "In today's digital landscape, powerful, scalable software is a must for business success. As a leading Software Development Company in Dhaka, Bangladesh, Visual I specializes in crafting custom software solutions that drive growth. From web applications to enterprise software and AI-driven solutions, our expert developers ensure seamless functionality, robust security, and innovative designs. We deliver high-performance, user-focused software that keeps your business ahead of the competition. Let us turn your vision into reality with cutting-edge technology tailored to your needs.",
        headline: "HOW SOFTWARE DEVELOPMENT EMPOWERS YOUR BUSINESS?",
        paragraph:
            "Custom software solutions streamline operations, enhance efficiency, and improve customer experiences. Tailored systems automate tasks, save time, and reduce costs, allowing your business to scale faster and make data-driven decisions. With the right software, you gain a competitive edge, boosting productivity and ultimately securing a higher return on investment (ROI).",
        images: [
            {
                url: "https://placehold.co/600x400/f2f2f2/1f2937?text=Collaborative+Development+Team",
                alt: "Team working on code",
            },
            {
                url: "https://placehold.co/300x200/f2f2f2/1f2937?text=Dedicated+Programmer",
                alt: "Dedicated Programmer",
            },
            {
                url: "https://placehold.co/300x200/f2f2f2/1f2937?text=Dedicated+Programmer",
                alt: "Dedicated Programmer",
            },
        ],
    },
    whyChooseUsSection: {
        title: "WHY CHOOSE OUR SOFTWARE DEVELOPMENT?",
        highlightColor: "#f97316",
        leftCard: {
            iconColor: "#1f2937",
            innerDotColor: "#f97316",
            heading: "PROVEN EXPERTISE AND EXPERIENCE",
            description:
                "Our seasoned software developers have extensive knowledge and experience in various domains, including web development, mobile app development, and custom software solutions.",
            buttonText: "Send Your Message",
        },
        keywords: [
            { title: "EXPERIENCE...", customColor: "#1f2937" },
            { title: "COLLABORATIVE...", customColor: "#f97316" },
            { title: "EFFECTIVENESS...", customColor: "#f97316" },
            { title: "CLIENT-CENTRIC...", customColor: "#f97316" },
        ],
    },
    faqSection: {
        title: "F.A.Q",
        faqs: [
            {
                question: "HOW MUCH DOES IT COST TO DEVELOP SOFTWARE?",
                answer:
                    "The cost of software development can vary depending on several factors, including the size and complexity of the project and the technologies used. We will provide you with a detailed quote after gathering your requirements and understanding your project needs.",
            },
            {
                question: "HOW LONG DOES IT TAKE TO DEVELOP SOFTWARE?",
                answer:
                    "Project duration varies widely. A small application might take 4-8 weeks, while complex enterprise solutions can take 6 months or more. We establish clear timelines during the planning phase.",
            },
            {
                question:
                    "WHY SHOULD I CHOOSE CUSTOM SOFTWARE DEVELOPMENT OVER OFF-THE-SHELF SOLUTIONS?",
                answer:
                    "Custom software is tailored exactly to your unique business processes, providing a competitive edge, better integration, and greater scalability, unlike generic off-the-shelf products.",
            },
        ],
    },
};


export default async function Service({ params }) {
    const { heroSection, serviceListSection, whyChooseUsSection, faqSection } =
        serviceData;
    const p = await params;
    console.log(p)

      const [services, setServices] = useState([]);
console.log(services)
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

    // Dynamic section
    const HeroSection = () => (
        <section className="relative pt-4 pb-4 md:pt-8 md:pb-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-extrabold leading-none tracking-tighter text-gray-900 mb-8">
                            {heroSection.title}
                        </h1>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                            {heroSection.subtitle}
                        </h2>

                        <div className="grid lg:grid-cols-2">
                            {heroSection.services.map((service, index) => (
                                <div
                                    key={index}
                                    className="flex items-center mb-3 hover:translate-x-1 transition-transform duration-300"
                                >
                                    <span
                                        className="text-2xl font-bold mr-2"
                                        style={{ color: "#f97316" }}
                                    >
                                        +
                                    </span>
                                    <p className="text-lg font-medium text-gray-700">{service}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const ServiceListSection = () => (
        <div className="bg-white py-6 md:py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                    {serviceListSection.title}
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                    {serviceListSection.description}
                </p>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <h3 className="text-5xl md:text-6xl font-extrabold text-gray-900">
                        {serviceListSection.headline}
                    </h3>
                    <p className="text-gray-600">{serviceListSection.paragraph}</p>
                </div>

                <div className="mt-8 space-y-4">
                    <img
                        src={serviceListSection.images[0].url}
                        alt={serviceListSection.images[0].alt}
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-lg shadow-xl"
                    />
                    <div className="grid grid-cols-2 gap-1">
                        {serviceListSection.images.slice(1).map((img, idx) => (
                            <img
                                key={idx}
                                src={img.url}
                                alt={img.alt}
                                width={600}
                                height={200}
                                className="rounded-lg shadow-md"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const WhyChooseUsSection = () => (
        <section className="py-6 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-16 text-center">
                    {whyChooseUsSection.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="p-8 border-r-4 border-gray-200">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-12 h-12 border-2 border-gray-900 rounded-full flex items-center justify-center">
                                <div
                                    className="w-8 h-8 bg-gray-900 rounded-full relative"
                                    style={{
                                        backgroundColor: whyChooseUsSection.leftCard.iconColor,
                                    }}
                                >
                                    <div
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4"
                                        style={{
                                            backgroundColor: whyChooseUsSection.leftCard.innerDotColor,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">
                            {whyChooseUsSection.leftCard.heading}
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                            {whyChooseUsSection.leftCard.description}
                        </p>
                        <button className="btn btn-neutral btn-lg rounded-lg shadow-xl flex items-center gap-2">
                            <MessageSquare className="w-5 h-5" />
                            {whyChooseUsSection.leftCard.buttonText}
                        </button>
                    </div>

                    <div className="space-y-4">
                        {whyChooseUsSection.keywords.map((item, idx) => (
                            <h3
                                key={idx}
                                className="text-5xl md:text-7xl font-extrabold leading-tight"
                                style={{ color: item.customColor }}
                            >
                                {item.title}
                            </h3>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

    const FAQSection = () => (
        <section className="py-8 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">
                    {faqSection.title}
                </h2>
                {faqSection.faqs.map((faq, index) => (
                    <details
                        key={index}
                        className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 cursor-pointer"
                    >
                        <summary className="font-semibold text-lg text-gray-800">
                            {faq.question}
                        </summary>
                        <p className="text-gray-600 mt-2">{faq.answer}</p>
                    </details>
                ))}
            </div>
        </section>
    );


    // Fixed section
    const WorkingProcessSection = () => {
        // Component to render the step boxes
        const StepBox = ({ step }) => (
            <div className="flex items-center space-x-4 bg-white shadow-lg p-4 rounded-lg w-fit">
                <div className="text-2xl font-extrabold p-2 rounded" style={{ backgroundColor: '#1f2937', color: 'white' }}>
                    {step.number}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 tracking-wider">
                    {step.title}
                </h4>
            </div>
        );


        return (
            <div className=" py-6 lg:py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Title from Screenshot 110 */}
                    <h2 className="text-6xl md:text-8xl font-extrabold mb-16" style={{ color: '#f97316' }}>
                        WORKING PROCESS
                    </h2>


                    {/* Mimicking the Diagram Layout from Screenshot 111 using relative positioning and Tailwind for the lines */}
                    <div className="bg-gray-50 relative h-[600px] md:h-[800px] flex items-center justify-center">


                        {/* Background Lines (Dotted lines in the original image) */}
                        {/* 1 -> 2 (Vertical line) */}
                        <div className="absolute top-0 left-1/4 h-[50%] w-0 border-l-2 border-dashed border-gray-400 transform -translate-x-1/2 md:top-[10%] md:left-[25%] md:h-[30%]" style={{ top: '10%', left: '25%', height: '30%' }}></div>
                        {/* 2 -> 3 (Horizontal line) */}
                        <div className="absolute h-0 w-[50%] border-t-2 border-dashed border-gray-400 transform -translate-y-1/2" style={{ top: '40%', left: '25%', width: '50%' }}></div>
                        {/* 3 -> 4 (Vertical line) */}
                        <div className="absolute top-0 right-1/4 h-[50%] w-0 border-r-2 border-dashed border-gray-400 transform translate-x-1/2 md:top-[40%] md:right-[25%] md:h-[30%]" style={{ top: '40%', right: '25%', height: '30%' }}></div>


                        {/* Step Boxes positioned absolutely to mimic the flow */}
                        <div className="absolute" style={{ top: '5%', left: '25%', transform: 'translateX(-50%)' }}>
                            <StepBox step={processSteps[0]} />
                        </div>
                        <div className="absolute" style={{ top: '35%', left: '5%', transform: 'translateX(0%)' }}>
                            <StepBox step={processSteps[1]} />
                        </div>
                        <div className="absolute" style={{ top: '35%', right: '5%', transform: 'translateX(0%)' }}>
                            <StepBox step={processSteps[2]} />
                        </div>
                        <div className="absolute" style={{ bottom: '20%', left: '55%', transform: 'translateX(-50%)' }}>
                            <StepBox step={processSteps[3]} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const StatsSection = () => (
        <div className="bg-white py-12 -mt-16 md:-mt-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card Style from Screenshot 113 */}
                    {[
                        { label: 'Years Experience', value: '12+' },
                        { label: 'Completed Projects', value: '200+' },
                        { label: 'Satisfied Clients', value: '130+' },
                    ].map((stat, index) => (
                        <div key={index} className="card bg-white p-6 shadow-xl border border-gray-100 rounded-xl hover:shadow-2xl transition duration-300">
                            <div className="flex justify-between items-start mb-8">
                                <h3 className="text-lg font-semibold text-gray-700">{stat.label}</h3>
                                <ChevronRight className="w-5 h-5 text-gray-400 rotate-45" />
                            </div>
                            <p className="text-6xl md:text-7xl font-extrabold text-gray-900">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const ContactSection = () => (
        <div className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Left Side: Contact Info (Screenshot 115) */}
                    <div>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                            DON'T HESITATE TO
                            <br />
                            REACH OUT TO US
                        </h2>
                        <p className="text-lg text-gray-600 mb-12 max-w-lg">
                            We welcome the opportunity to connect with you! Feel free to contact us using the details provided or by filling out the contact form. As a leading advertising agency in Bangladesh, our dedicated team is here to provide expert assistance and answer any questions you may have.
                        </p>

                        <div className="space-y-8">
                            {/* Call Us At */}
                            <div className="flex items-start">
                                <Phone className="w-8 h-8 text-gray-900 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">CALL US AT</h4>
                                    <p className="text-lg text-gray-600">+88 0189-600-6896</p>
                                </div>
                            </div>

                            {/* Email Us On */}
                            <div className="flex items-start">
                                <Mail className="w-8 h-8 text-gray-900 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">EMAIL US ON</h4>
                                    <p className="text-lg text-gray-600">hello@visualiweb.com</p>
                                </div>
                            </div>

                            {/* Find Us */}
                            <div className="flex items-start">
                                <MapPin className="w-8 h-8 text-gray-900 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">FIND US</h4>
                                    <p className="text-lg text-gray-600">
                                        House # 3, Road # 2/2, Banani,
                                        <br />
                                        Dhaka-1213, Bangladesh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form (Screenshot 115) */}
                    <div>
                        <h2 className="text-5xl font-extrabold text-gray-900 mb-8">
                            SEND US A MESSAGE
                        </h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input type="text" placeholder="YOUR NAME" className="input input-lg input-bordered w-full rounded-lg text-gray-800 placeholder-gray-500" />
                                <input type="email" placeholder="YOUR EMAIL" className="input input-lg input-bordered w-full rounded-lg text-gray-800 placeholder-gray-500" />
                            </div>
                            <input type="text" placeholder="YOUR SUBJECT" className="input input-lg input-bordered w-full rounded-lg text-gray-800 placeholder-gray-500" />
                            <textarea placeholder="WRITE MESSAGE..." className="textarea textarea-lg textarea-bordered w-full h-40 rounded-lg text-gray-800 placeholder-gray-500 resize-none"></textarea>
                            <button type="submit" className="btn btn-neutral btn-lg rounded-lg shadow-xl mt-4">
                                <ChevronRight className="w-5 h-5" />
                                Send a message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );


    //  Main 
    return (
        <main className="bg-white text-gray-900 font-sans">
            <HeroSection />
            <ServiceListSection />
            <WhyChooseUsSection />

            <WorkingProcessSection />
            <StatsSection />
            <FAQSection />
            <ContactSection />
        </main>
    );
}
