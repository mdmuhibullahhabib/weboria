import React from 'react';
import {
  ChevronRight,
  CheckCircle,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

export default function Services() {

  const services = [
    'Custom Software Development',
    'Web Application Development',
    'Software Integration',
    'Cloud Software Development',
    'Legacy System Modernization',
    'Software Maintenance & Support',
    'Quality Assurance & Testing',
    'Consulting Services',
  ];

  const whyChooseKeywords = [
    { title: 'EXPERIENCE...', customColor: '#1f2937' },
    { title: 'COLLABORATIVE...', customColor: '#f97316' },
    { title: 'EFFECTIVENESS...', customColor: '#f97316' },
    { title: 'CLIENT-CENTRIC...', customColor: '#f97316' },
  ];

  const faqs = [
    { 
      question: 'HOW MUCH DOES IT COST TO DEVELOP SOFTWARE?', 
      answer: 'Cost depends on project complexity, size, and technology. Detailed quote provided after requirements assessment.' 
    },
    { 
      question: 'HOW LONG DOES IT TAKE TO DEVELOP SOFTWARE?', 
      answer: 'Small projects: 4-8 weeks. Complex enterprise solutions: 6+ months. Timeline clarified in planning phase.' 
    },
    { 
      question: 'WHY CHOOSE CUSTOM SOFTWARE OVER OFF-THE-SHELF?', 
      answer: 'Custom software is tailored to your business, offering better integration, scalability, and competitive edge.' 
    },
  ];

  const ServiceListItem = ({ text }) => (
    <div className="flex items-start mb-4 hover:translate-x-2 transition-transform duration-300">
      <CheckCircle className="w-6 h-6 mr-3 text-orange-500 flex-shrink-0" />
      <p className="text-lg font-medium text-gray-800">{text}</p>
    </div>
  );

  // ---- Hero Section ----
  const HeroSection = () => (
    <section className="relative py-32 bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-700 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
          EMPOWERING BRANDS & <br /> IMPACTFUL SOLUTIONS
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
          We deliver high-performance software solutions that transform your business in the digital era.
        </p>
      </div>
    </section>
  );

  // ---- Stats Section ----
  const StatsSection = () => (
    <section className="bg-gray-50 py-16 -mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          { label: 'Years Experience', value: '12+' },
          { label: 'Completed Projects', value: '200+' },
          { label: 'Satisfied Clients', value: '130+' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-600 flex items-center justify-between mb-4">
              {stat.label} <ChevronRight className="w-5 h-5 text-gray-400 rotate-45" />
            </h3>
            <p className="text-5xl md:text-6xl font-extrabold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );

  // ---- Services Section ----
  const ServiceListSection = () => (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8">
            How Software Development Empowers Your Business
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Custom software solutions streamline operations, enhance efficiency, and improve customer experiences. We deliver innovative, scalable, and secure solutions for all business types.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ServiceListItem key={i} text={service} />
            ))}
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-500">
          <img
            src="https://placehold.co/600x500/1e293b/f97316?text=Software+Development"
            alt="Software Development Illustration"
            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40"></div>
        </div>
      </div>
    </section>
  );

  // ---- Why Choose Us ----
  const WhyChooseUsSection = () => (
    <section className="bg-indigo-50 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-12">
          Why Choose Our Software Development?
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {whyChooseKeywords.map((item, i) => (
              <h3
                key={i}
                className="text-4xl md:text-6xl font-extrabold"
                style={{ color: item.customColor }}
              >
                {item.title}
              </h3>
            ))}
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <p className="text-lg text-gray-700 mb-6">
              Our team has extensive experience across domains and technologies, ensuring the delivery of high-quality software tailored to your business needs.
            </p>
            <button className="btn bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-6 py-3 flex items-center space-x-2 transition-all duration-300">
              <MessageSquare className="w-5 h-5" />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  // ---- FAQ Section ----
  const FAQSection = () => (
    <section className="bg-gray-100 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center mb-12">F.A.Q</h2>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300"
            >
              <summary className="text-lg font-semibold cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );

  // ---- Contact Section ----
  const ContactSection = () => (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-5xl font-extrabold mb-6 text-gray-900">Reach Out to Us</h2>
          <p className="text-gray-600 mb-12">We’d love to hear from you! Fill out the form or contact us directly.</p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Phone className="w-8 h-8 text-orange-500" />
              <div>
                <h4 className="font-bold text-gray-900">Call Us</h4>
                <p className="text-gray-600">+880 189-600-6896</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-8 h-8 text-orange-500" />
              <div>
                <h4 className="font-bold text-gray-900">Email</h4>
                <p className="text-gray-600">hello@visualiweb.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-8 h-8 text-orange-500" />
              <div>
                <h4 className="font-bold text-gray-900">Address</h4>
                <p className="text-gray-600">
                  House # 3, Road # 2/2, Banani, Dhaka-1213, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-4 bg-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" className="input input-bordered rounded-lg p-3 text-gray-800" />
            <input type="email" placeholder="Your Email" className="input input-bordered rounded-lg p-3 text-gray-800" />
          </div>
          <input type="text" placeholder="Subject" className="input input-bordered rounded-lg p-3 text-gray-800" />
          <textarea placeholder="Message..." className="textarea input-bordered rounded-lg p-3 text-gray-800 h-40 resize-none"></textarea>
          <button type="submit" className="btn bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-6 py-3 font-semibold flex items-center space-x-2 transition-all duration-300">
            <ChevronRight className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );

  return (
    <div className="font-sans bg-gray-50">
      <HeroSection />
      <StatsSection />
      <ServiceListSection />
      <WhyChooseUsSection />
      <FAQSection />
      <ContactSection />

      <footer className="bg-gray-900 text-gray-200 text-center py-8 mt-12">
        <p>&copy; 2024 Visual I. All rights reserved.</p>
      </footer>
    </div>
  );
}
