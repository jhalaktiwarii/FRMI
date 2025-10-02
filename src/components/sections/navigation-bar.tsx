"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      { label: "Property Valuation", href: "/real-estate/valuation" }
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
      { label: "Pre-Settlement", href: "/funding/pre-settlement" },
      { label: "Lottery Winnings", href: "/funding/lottery" }
    ]
  },
];

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Initialize scroll state immediately
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Check initial scroll position immediately
    handleScroll();
    
    // Also check after a small delay to catch any race conditions
    const timeoutId = setTimeout(handleScroll, 100);

    // Animate navigation on scroll
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: 'power2.out' 
        }
      );
    }

    // Animate logo
    if (logoRef.current) {
      gsap.fromTo(logoRef.current,
        { scale: 0.8, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.6, 
          ease: 'back.out(1.7)',
          delay: 0.2
        }
      );
    }

    // Animate navigation items
    if (navItemsRef.current) {
      gsap.fromTo(navItemsRef.current.children,
        { y: -20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          ease: 'power2.out',
          stagger: 0.1,
          delay: 0.4
        }
      );
    }

    // Animate CTA button
    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current,
        { scale: 0.8, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.6, 
          ease: 'back.out(1.7)',
          delay: 0.6
        }
      );
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
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
      <motion.header
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 py-5 transition-all duration-500"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="mx-auto flex justify-center items-center max-w-7xl px-4 sm:px-6 lg:px-8 h-[45.59px] relative">
          {/* Logo positioned absolutely on the left */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0"
          >
            <Link 
              ref={logoRef}
              href="/" 
              className="flex items-center gap-2" 
              aria-label="First Rate Mortgage Inc. homepage"
            >
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isScrolled ? 0 : 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex items-center gap-2 sm:gap-3"
              >
                <div className="bg-white text-dark-gray w-6 h-6 sm:w-8 sm:h-8 rounded-md flex items-center justify-center">
                  <span className="font-bold text-lg sm:text-xl leading-none">F</span>
                </div>
                <span className="text-white text-xl sm:text-2xl font-semibold">FRMI</span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav 
            ref={navItemsRef}
            className={`hidden lg:flex items-center rounded-md px-4 py-2.5 gap-x-[20px] transition-all duration-300 ${
              isScrolled 
                ? 'bg-black' 
                : 'bg-[rgba(25,25,25,0.2)]'
            }`}
          >
            {navItems.map((item, index) => (
              <motion.div 
                key={item.label} 
                className="relative"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                {item.hasDropdown ? (
                  <div 
                    className="relative dropdown-container"
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={item.href}
                        className="navigation-link flex items-center gap-1.5 text-white hover:text-primary transition-all duration-300 py-2 px-2"
                      >
                        {item.label}
                        <motion.div
                          animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={14} className="mt-0.5" />
                        </motion.div>
                      </Link>
                    </motion.div>
                    
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[60] before:absolute before:-top-1 before:left-0 before:right-0 before:h-1 before:bg-transparent"
                        >
                          {item.dropdownItems?.map((dropdownItem, idx) => (
                            <motion.div
                              key={dropdownItem.label}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: idx * 0.05 }}
                            >
                              <Link
                                href={dropdownItem.href}
                                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors text-sm"
                              >
                                {dropdownItem.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      className="navigation-link text-white hover:text-primary transition-all duration-300 py-2 px-2"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Button positioned absolutely on the right */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0"
            initial={{ opacity: 1 }}
            animate={{ opacity: isScrolled ? 0 : 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Link
              ref={ctaRef}
              href="/apply"
              className="hidden lg:inline-flex items-center justify-center bg-primary text-dark-gray px-6 py-3 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 cursor-pointer"
            >
              Get Pre-Approved
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="lg:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="text-white p-2" 
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </motion.div>
        </div>
      </motion.header>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-dark-gray z-[70] lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-dark-gray w-full h-full p-4 sm:p-6 md:p-8 flex flex-col items-center justify-start pt-20 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button 
                onClick={() => setIsMenuOpen(false)} 
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white p-2 z-10" 
                aria-label="Close menu"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} className="sm:w-8 sm:h-8" />
              </motion.button>
          
              <motion.nav 
                className="flex flex-col gap-3 sm:gap-4 text-center mb-6 sm:mb-8 w-full max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {navItems.map((item, index) => (
                  <motion.div 
                    key={item.label} 
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    {item.hasDropdown ? (
                      <div className="flex flex-col items-center gap-1 w-full">
                        <motion.div 
                          className="text-white text-base sm:text-lg font-medium mb-1"
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.label}
                        </motion.div>
                        <div className="flex flex-col gap-0.5 w-full">
                          {item.dropdownItems?.map((dropdownItem, idx) => (
                            <motion.div
                              key={dropdownItem.label}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                              className="w-full"
                            >
                              <Link
                                href={dropdownItem.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors px-2 py-1 rounded hover:bg-white/10 block w-full text-center"
                              >
                                {dropdownItem.label}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white text-base sm:text-lg font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-white/10 block w-full text-center"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full max-w-xs"
              >
                <Link
                  href="/apply"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-primary text-dark-gray px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg cursor-pointer block w-full text-center"
                >
                  Get Pre-Approved
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationBar;