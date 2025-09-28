"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { 
    label: "About", 
    href: "#", 
    hasDropdown: true,
    dropdownItems: [
      { label: "About Us", href: "/about" },
      { label: "Compliance & QC", href: "/compliance" }
    ]
  },
  { 
    label: "Mortgage", 
    href: "#", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Residential Loans", href: "/mortgage/residential" },
      { label: "Commercial Loans", href: "/mortgage/commercial" },
      { label: "Refinancing", href: "/mortgage/refinancing" }
    ]
  },
  { 
    label: "Real Estate", 
    href: "#", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Buyers", href: "/real-estate/buyers" },
      { label: "Sellers", href: "/real-estate/sellers" },
      { label: "Property Valuation", href: "/real-estate/valuation" },
      { label: "Transaction Support", href: "/real-estate/transaction" }
    ]
  },
  { label: "Resources", href: "/resources" },
  { 
    label: "Partners", 
    href: "#", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Real Estate Agents", href: "/partners/agents" },
      { label: "Developers", href: "/partners/developers" },
      { label: "Attorneys", href: "/partners/attorneys" }
    ]
  },
  { 
    label: "Funding", 
    href: "#", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Structured Settlements", href: "/funding/structured-settlements" },
      { label: "Annuities", href: "/funding/annuities" },
      { label: "Pre-Settlement Funding", href: "/funding/pre-settlement" },
      { label: "Lottery Winnings", href: "/funding/lottery" }
    ]
  },
];

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const handleDropdownEnter = (label: string) => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    // Add a small delay before hiding the dropdown
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay
    setHoverTimeout(timeout);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 py-5 px-[30px] transition-colors duration-300 ${isScrolled ? 'bg-[rgba(10,10,10,0.7)] backdrop-blur-sm' : 'bg-transparent'}`}
      >
        <div className="mx-auto flex justify-between items-center max-w-[1219px] h-[45.59px]">
          <Link href="/" className="flex items-center gap-2" aria-label="First Rate Mortgage Inc. homepage">
            <Image
              src="/image.png"
              alt="First Rate Mortgage Logo"
              width={35}
              height={35}
              priority
              className="object-contain"
            />
            <span className="text-white text-xl sm:text-2xl font-bold tracking-tight">FRMI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center bg-[rgba(25,25,25,0.2)] rounded-md px-4 py-2.5 gap-x-[20px]">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative dropdown-container"
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={item.href}
                      className="navigation-link flex items-center gap-1.5 text-white hover:text-opacity-80 transition-opacity py-2 px-2"
                    >
                      {item.label}
                      <ChevronDown size={14} className="mt-0.5" />
                    </Link>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[60] before:absolute before:-top-1 before:left-0 before:right-0 before:h-1 before:bg-transparent">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors text-sm"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="navigation-link text-white hover:text-opacity-80 transition-opacity py-2 px-2"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Special CTA Button */}
          <Link
            href="/apply"
            className="hidden lg:inline-flex items-center justify-center bg-primary text-dark-gray px-6 py-3 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg"
          >
            Get Pre-Approved
          </Link>

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
        className={`fixed inset-0 bg-dark-gray z-[70] lg:hidden transition-opacity duration-300 ease-in-out ${
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
              <div key={item.label} className="flex flex-col items-center">
                {item.hasDropdown ? (
                  <div className="flex flex-col items-center gap-4">
                    <div className="text-white text-xl font-medium">
                      {item.label}
                    </div>
                    <div className="flex flex-col gap-3">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white/80 text-lg hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white text-xl font-medium hover:text-opacity-80 transition-opacity px-4 py-2 rounded-lg hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <Link
            href="/apply"
            onClick={() => setIsMenuOpen(false)}
            className="bg-primary text-dark-gray px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Get Pre-Approved
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;