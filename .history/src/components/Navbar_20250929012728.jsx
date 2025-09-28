"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const [currentPath, setCurrentPath] = useState("");

  // Update current path on load
  if (typeof window !== "undefined" && !currentPath) {
    setCurrentPath(window.location.pathname);
  }

  const isActive = (href) => {
    if (href === "/" && currentPath === "/") return true;
    if (href !== "/" && currentPath.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-base-100/95 backdrop-blur border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary btn text-red-600">Weboria</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-primary hover:text-white ${
                    isActive(item.href)
                      ? "bg-primary text-white"
                      : "text-base-content"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}

            {/* CTA Button */}
            <button className="btn btn-primary ml-4">Get Started</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost btn-circle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2 border-t pt-2 space-y-2">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-primary hover:text-white ${
                    isActive(item.href)
                      ? "bg-primary text-white"
                      : "text-base-content"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}

            {/* CTA Button */}
            <button className="btn btn-primary w-full mt-2">Get Started</button>
          </div>
        )}
      </div>
    </nav>
  );
}
