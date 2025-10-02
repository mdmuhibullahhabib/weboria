""
import React, { useState, useEffect, useRef } from 'react';

// Visualiweb-style Navbar (React + TailwindCSS)
// - Single-file React component (default export)
// - Uses Tailwind classes for layout & responsiveness
// - Desktop: horizontal menu with dropdowns on hover
// - Mobile: hamburger that toggles a slide-down menu with accordion submenus
// - Replace logoSrc with your logo path or component

export default function Navbar({ logoSrc = '/logo.png' }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClick(e) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        setMobileOpen(false);
        setServicesOpenMobile(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '/services',
      children: [
        { label: 'Web Development', href: '/services/web-development' },
        { label: 'Mobile Apps', href: '/services/mobile-apps' },
        { label: 'UI/UX Design', href: '/services/ui-ux-design' },
        { label: 'E‑commerce', href: '/services/ecommerce' },
      ],
    },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed w-full z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md bg-white/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-3">
              <img src={logoSrc} alt="Logo" className="h-10 w-auto object-contain" />
              <span className="hidden sm:inline-block font-semibold text-lg">Visualiweb</span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {!link.children ? (
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-primary-600 px-2 py-2 font-medium transition"
                  >
                    {link.label}
                  </a>
                ) : (
                  <>
                    <button
                      className="flex items-center gap-1 text-gray-700 hover:text-primary-600 px-2 py-2 font-medium transition"
                      aria-expanded="false"
                    >
                      {link.label}
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.656a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* Dropdown (appear on hover using group) */}
                    <div className="absolute left-0 mt-2 w-56 rounded-lg bg-white shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transform transition-all duration-200 scale-95 group-hover:scale-100">
                      <ul className="py-2">
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <a
                              href={child.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            ))}

            <a
              href="/quote"
              className="ml-4 inline-flex items-center px-4 py-2 rounded-md bg-primary-600 text-white font-medium shadow-sm hover:opacity-95 transition"
            >
              Request Quote
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center lg:hidden">
            <a href="/quote" className="mr-3 hidden sm:inline-block px-3 py-1 rounded-md bg-primary-600 text-white text-sm font-medium">
              Quote
            </a>

            <button
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
              className="p-2 inline-flex items-center justify-center rounded-md focus:outline-none"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden transition-max-height duration-300 overflow-hidden bg-white ${
          mobileOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {!link.children ? (
                  <a href={link.href} className="block px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-50">
                    {link.label}
                  </a>
                ) : (
                  <>
                    <button
                      onClick={() => setServicesOpenMobile((s) => !s)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-50"
                    >
                      <span>{link.label}</span>
                      <svg className={`w-4 h-4 transform transition ${servicesOpenMobile ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.656a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                      </svg>
                    </button>

                    <div className={`${servicesOpenMobile ? 'block' : 'hidden'} mt-1 ml-2 border-l border-gray-100 pl-3`}>
                      {link.children.map((child) => (
                        <a key={child.label} href={child.href} className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50">
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}

            <div className="mt-3">
              <a href="/contact" className="block w-full text-center px-4 py-2 rounded-md bg-primary-600 text-white font-medium">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/*
Notes:
- Tailwind configuration: make sure you have 'primary-600' in your theme or replace with an existing color like 'bg-blue-600'.
- Logo: swap logoSrc prop for your logo path or pass a <Logo/> component instead.
- Dropdowns: desktop dropdowns rely on the `group` hover trick; if you prefer JS control, convert to onMouseEnter/onMouseLeave handlers.
- Accessibility: there are basic aria attributes; if you need full A11y compliance, add keyboard handlers and proper aria-expanded states.
*/