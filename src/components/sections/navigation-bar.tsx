"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { label: "All Pages", href: "#", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-20 py-5 px-[30px] transition-colors duration-300 ${isScrolled ? 'bg-[rgba(10,10,10,0.7)] backdrop-blur-sm' : 'bg-transparent'}`}
      >
        <div className="mx-auto flex justify-between items-center max-w-[1219px] h-[45.59px]">
          <Link href="/" className="flex items-center gap-2" aria-label="Houseplus homepage">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/icons/Obi3JOZXtPCv2r93v1AsVEUz0M-1.png"
              alt="Houseplus Logo Icon"
              width={31}
              height={31}
              priority
            />
            <span className="text-white text-3xl font-bold tracking-tight">Houseplus</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center bg-[rgba(25,25,25,0.2)] rounded-md px-5 py-2.5 gap-x-[20px]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="navigation-link flex items-center gap-1.5 text-white hover:text-opacity-80 transition-opacity"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={18} className="mt-0.5" />}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://finestdevs.com/buy-houseplus"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center justify-center bg-primary text-dark-gray px-6 py-[13px] rounded-lg button-text hover:bg-opacity-90 transition-colors"
          >
            Get This Template
          </a>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="text-white p-2" aria-label="Open menu">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-dark-gray z-50 lg:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className="bg-dark-gray w-full h-full p-8 flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-7 right-7 text-white p-2" aria-label="Close menu">
            <X size={30} />
          </button>
          
          <nav className="flex flex-col gap-8 text-center mb-12">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 text-white text-2xl font-medium"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={24} />}
              </Link>
            ))}
          </nav>

          <a
            href="https://finestdevs.com/buy-houseplus"
             target="_blank"
             rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="bg-primary text-dark-gray px-8 py-4 rounded-lg text-lg font-medium"
          >
            Get This Template
          </a>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;