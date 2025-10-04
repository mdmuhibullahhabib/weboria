"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
    <nav className="sticky top-0 z-50 bg-base-100/95 backdrop-blur-md border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <h1 className="text-2xl font-bold text-primary">Weboria</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} data-testid={`link-${item.name.toLowerCase()}`}>
                <span
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.href)
                      ? "bg-primary text-primary-content"
                      : "text-base-content hover:text-primary"
                    }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}

            {/* CTA Button */}
            <div className="w-3">
            <Button
              text={"Get Started"}
              href="/contact"
            />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="btn btn-ghost btn-square"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2 border-t">
            <div className="flex flex-col space-y-1 px-2 py-3">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} data-testid={`link-mobile-${item.name.toLowerCase()}`}>
                  <span
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.href)
                        ? "bg-primary text-primary-content"
                        : "text-base-content hover:text-primary"
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
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
