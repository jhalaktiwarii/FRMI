"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const mortgageSolutions = [
  {
    id: "residential",
    icon: "https://framerusercontent.com/images/qy2EcDsrxcRVoJsUJ9gIIyxZX2k.svg",
    title: "Residential Loans",
    description: "Conventional, FHA, VA, and Jumbo loans tailored for California homebuyers. Flexible terms from 10-30 years with competitive rates.",
    features: ["Conventional Loans", "FHA Loans", "VA Loans", "Jumbo Loans"],
    cta: "Start My Home Loan Application",
    href: "/mortgage/residential"
  },
  {
    id: "commercial",
    icon: "https://framerusercontent.com/images/tBLVXEN81k4UZn51pFiI3lbgkyQ.svg",
    title: "Commercial Loans",
    description: "Financing for California businesses and investors. Flexible loan structures with competitive rates for commercial property purchases.",
    features: ["5-20 Year Terms", "Balloon Structures", "Investor Loans", "Development Funding"],
    cta: "Apply for Commercial Loan",
    href: "/mortgage/commercial"
  },
  {
    id: "refinancing",
    icon: "https://framerusercontent.com/images/SSJHvYHyGkuNORQRvL2H423fBw.svg",
    title: "Refinancing",
    description: "Smarter refinancing for better rates and cash flow. Lower your monthly payments or tap into your home's equity.",
    features: ["Lower Interest Rates", "Cash-Out Refinancing", "Adjustable to Fixed", "Rate Reduction"],
    cta: "Refinance My Mortgage",
    href: "/mortgage/refinancing"
  },
  {
    id: "process",
    icon: "https://framerusercontent.com/images/Tpg3e18kWkg9itNKePSQc77Yl44.svg",
    title: "Loan Process",
    description: "Our streamlined process makes getting a mortgage simple and transparent. From application to closing, we guide you every step.",
    features: ["Pre-Approval", "Documentation", "Underwriting", "Closing"],
    cta: "Learn About Our Process",
    href: "/mortgage/process"
  }
];

const MortgageSolutionsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Animate section header
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children,
        { 
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Animate cards with stagger
    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children,
        { 
          opacity: 0,
          y: 80,
          scale: 0.9,
          rotationY: 15,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Mortgage Solutions
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Choose from our comprehensive range of mortgage products designed to meet your unique financial needs and goals.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {mortgageSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group"
              style={{ backgroundColor: '#F9F7F2' }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {/* Icon */}
              <div className="mb-6">
                <motion.div 
                  className="w-24 h-24 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={solution.icon}
                    alt={`${solution.title} icon`}
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
              </div>

              {/* Description */}
              <div className="mb-6 min-h-[80px]">
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {solution.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0 bg-primary"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-auto">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={solution.href}
                    className="group inline-block w-full text-center bg-primary text-dark-gray px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg hover:shadow-primary/25 border border-transparent hover:border-primary/20 cursor-pointer"
                  >
                    <span className="relative z-10">{solution.cta}</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Not sure which loan is right for you? Our experts are here to help.
          </p>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/contact"
              className="group inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/25 border border-transparent hover:border-gray-700/20 cursor-pointer"
            >
              <span className="relative z-10">Speak with a Mortgage Expert</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MortgageSolutionsSection;
