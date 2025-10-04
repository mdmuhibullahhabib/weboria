"use client";
import React from 'react';
import Mission from './components/Mission';

// --- Icon Placeholders (inline SVGs for single-file constraint) ---
const CheckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const TargetIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const GlobeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const Briefcase = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V19c0-1.105-.895-2-2-2h-4c-1.105 0-2 .895-2 2v2" />
  </svg>
);

const UserIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// --- Mock Data ---
const statsData = [
  { label: 'Years Experience', value: '12+', icon: Briefcase },
  { label: 'Completed Projects', value: '200+', icon: CheckIcon },
  { label: 'Satisfied Clients', value: '130+', icon: UserIcon },
];

const teamMembers = [
  { name: 'John Doe', role: 'Founder & CEO', avatarUrl: 'https://placehold.co/150x150/1F2937/FFFFFF?text=CEO' },
  { name: 'Jane Smith', role: 'Head of Strategy', avatarUrl: 'https://placehold.co/150x150/2563EB/FFFFFF?text=Jane' },
  { name: 'Alex Lee', role: 'Lead Developer', avatarUrl: 'https://placehold.co/150x150/F97316/FFFFFF?text=Alex' },
  { name: 'Sara Khan', role: 'Creative Director', avatarUrl: 'https://placehold.co/150x150/10B981/FFFFFF?text=Sara' },
];

const coreValues = [
  { title: 'ROI-Oriented Focus', description: 'Strategies built to fuel measurable growth, long-term value, and reliable return on investment for every client.', icon: Briefcase, color: 'text-indigo-600' },
  { title: 'Responsive & Creative Design', description: 'We deliver bold visuals and fast, seamless websites that look flawless on mobile, tablet, or desktop.', icon: CheckIcon, color: 'text-orange-500' },
  { title: 'Enterprise-Grade Security', description: 'We guarantee your data stays private and your mind at ease with top-tier security and 24/7 monitoring.', icon: UserIcon, color: 'text-green-600' },
  { title: 'Global Digital Presence', description: 'An international agency partnering with clients worldwide to sharpen their digital footprint and enhance visibility.', icon: GlobeIcon, color: 'text-yellow-500' },
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

// --- Main About Us Page ---
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white font-['Inter']">
      {/* Hero */}
      {/* <div className="relative overflow-hidden bg-gray-900 py-32">
        <div className="absolute inset-0 bg-gray-900/80"></div>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url('https://placehold.co/1920x600/1F2937/FFFFFF?text=About+Us+Header')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl font-semibold text-orange-500 mb-2">Our Story</p>
          <h1 className="text-6xl sm:text-7xl font-extrabold text-white">About Weboria</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering Your Digital Presence with strategic, result-driven solutions since 2012.
          </p>
        </div>
      </div> */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900 py-36">
  {/* Background Overlay with Image */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1920&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>

  {/* Glow Gradient at Bottom */}
  <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
    <p className="text-lg md:text-xl font-semibold text-orange-400 mb-3 tracking-wider uppercase">
      Our Story
    </p>

    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
      About <span className="text-orange-500">WebOria</span>
    </h1>

    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
      Since <span className="text-orange-400 font-semibold">2012</span>, WebOria has been
      empowering brands to rise above the noise — crafting AI-powered digital strategies
      that drive measurable growth, ignite engagement, and transform ideas into impact.
    </p>

    {/* Call to Action */}
    <div className="mt-10 flex justify-center">
      <a
        href="/contact"
        className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 hover:scale-105 transition-transform duration-300"
      >
        Let’s Build Something Great
      </a>
    </div>
  </div>
</div>

      <Mission/>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader mainText="WHY" subText="CHOOSE US" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 transition">
                <value.icon className={`w-8 h-8 ${value.color} mb-4`} />
                <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
<section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-14">
      <p className="text-orange-500 font-semibold tracking-widest uppercase mb-2">
        Visual i
      </p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        In Numbers
      </h2>
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
        Empowering growth and delivering measurable success through innovation,
        technology, and results that speak louder than words.
      </p>
    </div>

    {/* Stats Grid */}
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {statsData.map((stat, i) => (
        <div
          key={i}
          className="group bg-white p-10 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
        >
          <div className="flex justify-center">
            <div className="p-4 bg-orange-100 rounded-full mb-5 group-hover:bg-orange-500 transition-colors duration-300">
              <stat.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
            </div>
          </div>
          <p className="text-5xl font-extrabold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
            {stat.value}
          </p>
          <h3 className="text-lg font-semibold text-gray-600 mt-2">
            {stat.label}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader mainText="MEET OUR" subText="EXPERT TEAM" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 rounded-xl group transition hover:shadow-2xl">
                <div className="overflow-hidden rounded-full w-32 h-32 ring-4 ring-indigo-500/50 mb-4 shadow-xl">
                  <img src={member.avatarUrl} alt={member.name}
                    className="w-32 h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.target.src = "https://placehold.co/150x150/6366F1/FFFFFF?text=Team" }} />
                </div>
                <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                <p className="text-sm text-orange-500 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-3 text-base font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition shadow-lg">
              Join Our Dynamic Team
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-indigo-600 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to Boost Your Digital Presence?</h2>
          <p className="mt-4 text-xl text-indigo-200">
            Let's discuss your next project and craft a strategy for unmatched online success.
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
      </section>
    </div>
  );
};

export default AboutPage;
