"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Logo from "../../public/assets/icons/weboria-marketing-agency-web-development.png";


export default function Footer() {
  // ✅ CTA function in plain JS
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    console.log("Newsletter signup:", email);
    e.target.reset();
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service/web-development" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Web Development", href: "/service/web-development" },
    { name: "E-Commerce", href: "/service/ecommerce" },
    { name: "Digital Marketing", href: "/service/digital-marketing" },
    { name: "UI/UX Design", href: "/service/ui-ux" },
    { name: "SEO Services", href: "/service/seo" },
    { name: "Api & Cloud", href: "/service/api-cloud" },
  ];

  const socialLinks = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#2C68B3] ">
      <div className="bg-[#2C68B3] py-8 lg:py-20 px-6 text-center md:text-left border-b border-gray-200">
        <h1 className="text-white font-bold text-5xl md:text-8xl leading-tight tracking-tight">
          LET’S <span className="text-white">BUILD</span>
        </h1>
        <h2 className="text-white font-serif text-5xl md:text-8xl italic mt-2 tracking-wide">
          SOMETHING GREAT.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
                <Link href="/" data-testid="link-home">
      <div className="flex items-center">
        {/* Logo Image */}
        <div className="w-16 h-16 relative">
          <Image
            src={Logo}
            alt="Weboria Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Brand Name */}
        <h1 className="text-l font-semibold text-gray-900 tracking-tight hover:text-orange-500 transition-colors">
          Weboria
        </h1>
      </div>
    </Link>

            <p className="leading-relaxed text-gray-200">
              Transforming businesses through innovative digital solutions.
              We create experiences that inspire, engage, and convert.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-gray-200">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">weboria.tech@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">01577118273</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="text-gray-200 hover:text-white transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href}>
                    <span className="text-gray-200 hover:text-white transition-colors">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-200 text-sm mb-4">
              Get the latest insights and updates on digital trends.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-white/10 border-white/20 text-white placeholder-gray-300 focus:outline-none"
                required
              />
              <button type="submit" className="btn bg-white text-black w-full hover:bg-gray-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-ghost text-white hover:bg-white/10"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm">
                © 2025 Weboria. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
