"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Brand color palette for Weboria
  // Primary: #FF6B00 (vibrant orange)
  // Secondary: #0B0F19 (dark blue-black)
  // Accent: gradient orange-pink
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-lg px-2 py-1 rounded-md shadow-sm">
                W
              </div>
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight hover:text-orange-500 transition-colors">
                Weboria
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                data-testid={`link-${item.name.toLowerCase()}`}
              >
                <span
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-orange-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-orange-500 after:rounded-full"
                      : "text-gray-700 hover:text-orange-600 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-orange-500 hover:after:rounded-full"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}

            {/* CTA Button */}
            <Button
              className="ml-8 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2.5 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
              text={"Get Started"}
              href="/contact"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-md text-gray-800 hover:bg-gray-100 transition"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-orange-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2 border-t border-gray-100 bg-white/90 rounded-lg shadow-lg backdrop-blur-md transition-all">
            <div className="flex flex-col space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  <span
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                        : "text-gray-800 hover:bg-orange-50 hover:text-orange-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}

              {/* Mobile CTA Button */}
              <Button
                text={"Get Started"}
                href="/contact"
                className="mt-3 "
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
