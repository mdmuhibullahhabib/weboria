// "use client";
// import { useState } from "react";
// import Portfolio from "../Home/components/Portfolio";

// // Portfolio page with project cards and category filtering
// export default function PortfolioPage() {
//   const [activeFilter, setActiveFilter] = useState("All");

//   const portfolioItems = [
//     {
//       id: 1,
//       title: "E-commerce Platform",
//       description:
//         "Modern online shopping platform with advanced features including real-time inventory, secure payments, and responsive design.",
//       image:
//         "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
//       category: "Web Development",
//       technologies: ["React", "Node.js", "Stripe", "MongoDB"],
//       liveUrl: "https://example.com",
//       githubUrl: "https://github.com/example",
//     },
//     {
//       id: 2,
//       title: "Fitness Tracking App",
//       description:
//         "Comprehensive fitness application with workout tracking, nutrition monitoring, and social features for motivation.",
//       image:
//         "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
//       category: "Mobile App",
//       technologies: ["React Native", "Firebase", "Redux", "Node.js"],
//       liveUrl: "https://example.com",
//     },
//     {
//       id: 3,
//       title: "Restaurant Website",
//       description:
//         "Beautiful restaurant website with online reservations, menu management, and integrated payment processing.",
//       image:
//         "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
//       category: "Web Development",
//       technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
//       liveUrl: "https://example.com",
//     },
//     {
//       id: 4,
//       title: "Task Management App",
//       description:
//         "Productivity application with team collaboration, project tracking, and deadline management features.",
//       image:
//         "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
//       category: "Mobile App",
//       technologies: ["Flutter", "Node.js", "Express", "MySQL"],
//       liveUrl: "https://example.com",
//       githubUrl: "https://github.com/example",
//     },
//     {
//       id: 5,
//       title: "Marketing Campaign",
//       description:
//         "Comprehensive digital marketing campaign that increased brand awareness by 300% and generated 50% more leads.",
//       image:
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
//       category: "Digital Marketing",
//       technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEO"],
//       liveUrl: "https://example.com",
//     },
//     {
//       id: 6,
//       title: "Corporate Website",
//       description:
//         "Professional corporate website with SEO optimization that improved search rankings by 200% within 3 months.",
//       image:
//         "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
//       category: "SEO",
//       technologies: ["WordPress", "Yoast SEO", "Google Analytics", "Schema"],
//       liveUrl: "https://example.com",
//     },
//     {
//       id: 7,
//       title: "SaaS Dashboard",
//       description:
//         "Complex dashboard application with real-time analytics, user management, and subscription billing integration.",
//       image:
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
//       category: "Web Development",
//       technologies: ["Vue.js", "Python", "Django", "PostgreSQL"],
//       liveUrl: "https://example.com",
//       githubUrl: "https://github.com/example",
//     },
//     {
//       id: 8,
//       title: "Travel Booking App",
//       description:
//         "Mobile application for travel bookings with flight search, hotel reservations, and itinerary management.",
//       image:
//         "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
//       category: "Mobile App",
//       technologies: ["Swift", "Kotlin", "Firebase", "Stripe"],
//       liveUrl: "https://example.com",
//     },
//   ];

//   const categories = [
//     "All",
//     "Web Development",
//     "Mobile App",
//     "Digital Marketing",
//     "SEO",
//   ];

//   const filteredItems =
//     activeFilter === "All"
//       ? portfolioItems
//       : portfolioItems.filter((item) => item.category === activeFilter);

//   return (
//     <div className="min-h-screen pt-16">
//       {/* Hero Section */}
//       <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
//               Our <span className="text-primary">Portfolio</span>
//             </h1>
//             <p className="text-xl text-gray-600 leading-relaxed">
//               Explore our diverse collection of successful projects that
//               showcase our expertise across web development, mobile apps, and
//               digital marketing.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Filter Buttons */}
//       <section className="py-12 bg-base-100 border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap justify-center gap-4">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveFilter(category)}
//                 className={`btn ${
//                   activeFilter === category
//                     ? "btn-primary"
//                     : "btn-outline hover:btn-primary"
//                 } transition-all duration-300`}
//                 data-testid={`button-filter-${category
//                   .toLowerCase()
//                   .replace(/\s+/g, "-")}`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Grid */}
//       <section className="py-24 bg-base-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {filteredItems.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredItems.map((item) => (
//                 <Portfolio key={item.id} {...item} />
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-16">
//               <p className="text-xl text-gray-500">
//                 No projects found in this category.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-24 bg-base-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
//               Project <span className="text-primary">Results</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Real metrics from our successful projects that demonstrate our
//               commitment to delivering results
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
//                 500+
//               </div>
//               <div className="text-gray-600 font-medium">Projects Completed</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
//                 98%
//               </div>
//               <div className="text-gray-600 font-medium">On-Time Delivery</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
//                 150%
//               </div>
//               <div className="text-gray-600 font-medium">Avg. ROI Increase</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
//                 24/7
//               </div>
//               <div className="text-gray-600 font-medium">Support Available</div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import React, { useState, useMemo } from 'react';

// --- Icon Placeholders (Simulating react-icons using inline SVGs for single-file constraint) ---

// Arrow Right Icon
const ArrowRight = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// --- Mock Data ---

const categories = ['All Projects', 'Web Design', 'Branding', 'SEO', 'Mobile App', 'UI/UX'];

const projectsData = [
    { id: 1, category: 'Web Design', title: 'Luxury Hotel Booking Portal', client: 'The Grand Hyatt', imageUrl: 'https://placehold.co/600x450/3b82f6/ffffff?text=Web+Design' },
    { id: 2, category: 'Branding', title: 'Global Tech Startup Identity', client: 'NovaLink', imageUrl: 'https://placehold.co/600x450/f97316/ffffff?text=Branding' },
    { id: 3, category: 'SEO', title: 'E-commerce Traffic Boost (300% ROI)', client: 'FashionHub', imageUrl: 'https://placehold.co/600x450/10b981/ffffff?text=SEO+Case' },
    { id: 4, category: 'Mobile App', title: 'Fitness Tracker App UI/UX', client: 'GymPro', imageUrl: 'https://placehold.co/600x450/8b5cf6/ffffff?text=Mobile+App' },
    { id: 5, category: 'Web Design', title: 'Creative Agency Showcase', client: 'Artisan Studio', imageUrl: 'https://placehold.co/600x450/ef4444/ffffff?text=Agency+Site' },
    { id: 6, category: 'Branding', title: 'Sustainable Coffee Packaging', client: 'EcoBrew', imageUrl: 'https://placehold.co/600x450/374151/ffffff?text=Packaging' },
    { id: 7, category: 'UI/UX', title: 'Fintech Dashboard Redesign', client: 'MoneyFlow', imageUrl: 'https://placehold.co/600x450/06b6d4/ffffff?text=Dashboard+UX' },
    { id: 8, category: 'SEO', title: 'B2B Lead Generation Campaign', client: 'Industrial Corp', imageUrl: 'https://placehold.co/600x450/f59e0b/ffffff?text=B2B+SEO' },
    { id: 9, category: 'Web Design', title: 'Corporate Services Website', client: 'Innovate Solutions', imageUrl: 'https://placehold.co/600x450/1e40af/ffffff?text=Corporate+Web' },
];


// --- Helper Components ---

const SectionHeader = ({ mainText, subText, align = 'center' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">
      {mainText.toUpperCase()}
    </h2>
    <p className="text-3xl sm:text-4xl font-extrabold text-orange-500 tracking-tight mt-1">
      {subText.toUpperCase()}
    </p>
  </div>
);

// --- Sections ---

// 1. Hero Section
const PortfolioHero = () => (
    <div className="relative overflow-hidden bg-gray-50 py-24 font-['Inter'] border-b border-gray-200">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl font-semibold text-indigo-600 mb-2">Our Work</p>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">
                Our Stunning Portfolio
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto">
                Discover the power of design and strategy through our latest projects. We turn ideas into digital realities that drive measurable results.
            </p>
        </div>
    </div>
);

// 2. Filter Buttons
const FilterButtons = ({ activeFilter, setFilter }) => (
    <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-12">
        {categories.map((category) => (
            <button
                key={category}
                onClick={() => setFilter(category)}
                className={`
                    px-5 py-2 m-1 text-sm font-medium rounded-full transition-all duration-300
                    ${activeFilter === category
                        ? 'bg-orange-500 text-white shadow-lg hover:bg-orange-600'
                        : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100'
                    }
                `}
            >
                {category}
            </button>
        ))}
    </div>
);

// 3. Project Card Component
const ProjectCard = ({ project }) => (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer">
        {/* Image Container */}
        <div className="w-full h-64 overflow-hidden">
            <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x450/374151/FFFFFF?text=Project+Image" }}
            />
        </div>

        {/* Overlay for details */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex items-end p-6 transition-opacity duration-500 group-hover:bg-opacity-70">
            <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                <p className="text-sm font-semibold text-orange-400 mb-1 uppercase tracking-wider">{project.category}</p>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300">Client: {project.client}</p>
                <div className="mt-4 inline-flex items-center text-white font-medium group-hover:text-orange-300">
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2"/>
                </div>
            </div>
        </div>
    </div>
);


// 4. Project Grid Section
const ProjectGrid = ({ activeFilter }) => {
    // Filter projects based on the active category
    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All Projects') {
            return projectsData;
        }
        return projectsData.filter(project => project.category === activeFilter);
    }, [activeFilter]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};


// 5. Final CTA Section (Reused style from AboutPage for consistency)
const FinalCTASection = () => (
    <section className="py-16 bg-indigo-600 font-['Inter'] mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to Start Your Success Story?
            </h2>
            <p className="mt-4 text-xl text-indigo-200">
                Let's discuss how we can turn your vision into the next featured project in our portfolio.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-indigo-600 bg-white hover:bg-gray-100 transition shadow-lg">
                    Book a Free Consultation
                </button>
                <button className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-indigo-600 transition">
                    View All Services
                </button>
            </div>
        </div>
    </section>
);


/**
 * Main App component for the Portfolio page.
 */
const App = () => {
    const [activeFilter, setActiveFilter] = useState('All Projects');

    return (
        <div className="min-h-screen bg-white font-['Inter']">
            <PortfolioHero />

            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        mainText="OUR LATEST"
                        subText="PROJECTS"
                    />

                    <FilterButtons activeFilter={activeFilter} setFilter={setActiveFilter} />

                    <ProjectGrid activeFilter={activeFilter} />
                </div>
            </section>

            <FinalCTASection />
        </div>
    );
};

export default App;
