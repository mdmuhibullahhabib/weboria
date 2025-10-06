"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./Button";
import Image from "next/image";
import Logo from "../../public/assets/icons/weboria-marketing-agency-web-development.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Weboria brand palette
  // Primary: #FF6B00 (orange)
  // Secondary: #0B0F19 (dark navy)
  // Accent: gradient orange-pink
  const subServices = [
    { name: "Web Development", href: "/service/web-development" },
    { name: "E-Commerce Solutions", href: "/service/ecommerce" },
    { name: "Digital Marketing", href: "/service/digital-marketing" },
    // { name: "SEO Optimization", href: "/service/seo" },
    // { name: "UI/UX Design", href: "/service/ui-ux" },
    // { name: "API & Cloud", href: "/service/api-cloud" },
  ];

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", dropdown: subServices }, // href: "/services",
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
      <div className="max-w-7xl mx-auto lg:py-1 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <div className="w-12 h-12 relative">
              <Image
                src="Logo"
                alt="Weboria Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navigation.map((item) =>
              item.dropdown ? (
                // Services Dropdown
                <div
                  key={item.name}
                  className="relative group"
                >
                  <div className="flex items-center space-x-1 cursor-pointer">
                    <span
                      className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive(item.href)
                          ? "text-orange-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-orange-500"
                          : "text-gray-700 hover:text-orange-600 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-orange-500"
                        }`}
                    >
                      {item.name}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-600 group-hover:text-orange-500 transition-transform duration-200 group-hover:rotate-180" />
                  </div>

                  {/* Dropdown menu */}
                  <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ul className="py-2">
                      {item.dropdown.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.href}
                            className={`block px-4 py-2 text-sm transition-colors duration-200 ${isActive(sub.href)
                                ? "bg-orange-50 text-orange-600 font-semibold"
                                : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                              }`}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                // Regular Links
                <Link
                  key={item.name}
                  href={item.href}
                  data-testid={`link-${item.name.toLowerCase()}`}
                >
                  <span
                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive(item.href)
                        ? "text-orange-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-orange-500"
                        : "text-gray-700 hover:text-orange-600 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-orange-500"
                      }`}
                  >
                    {item.name}
                  </span>
                </Link>
              )
            )}

            {/* CTA Button */}
            <Button
              className="ml-16"
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
                <div key={item.name}>
                  <Link
                    href={item.href}
                    data-testid={`link-mobile-${item.name.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.href)
                          ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                          : "text-gray-800 hover:bg-orange-50 hover:text-orange-600"
                        }`}
                    >
                      {item.name}
                    </span>
                  </Link>

                  {/* Mobile dropdown for services */}
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-1 text-sm text-gray-700 hover:text-orange-600 transition"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA Button */}
              <Button
                text={"Get Started"}
                href="/contact"
                className="mt-3"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
