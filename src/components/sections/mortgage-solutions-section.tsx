"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const mortgageSolutions = [
  {
    id: "residential",
    icon: "https://framerusercontent.com/images/qy2EcDsrxcRVoJsUJ9gIIyxZX2k.svg",
    title: "Residential Loans",
    description: "Conventional, FHA, VA, and Jumbo loans tailored for California homebuyers.",
    features: ["Conventional Loans", "FHA Loans", "VA Loans", "Jumbo Loans"],
    cta: "Start Application",
    href: "/mortgage/residential"
  },
  {
    id: "commercial",
    icon: "https://framerusercontent.com/images/tBLVXEN81k4UZn51pFiI3lbgkyQ.svg",
    title: "Commercial Loans",
    description: "Financing for California businesses and investors with flexible structures.",
    features: ["5-20 Year Terms", "Balloon Structures", "Investor Loans", "Development Funding"],
    cta: "Apply Now",
    href: "/mortgage/commercial"
  },
  {
    id: "refinancing",
    icon: "https://framerusercontent.com/images/SSJHvYHyGkuNORQRvL2H423fBw.svg",
    title: "Refinancing",
    description: "Smarter refinancing for better rates and improved cash flow.",
    features: ["Lower Interest Rates", "Cash-Out Refinancing", "Adjustable to Fixed", "Rate Reduction"],
    cta: "Refinance Now",
    href: "/mortgage/refinancing"
  },
  {
    id: "process",
    icon: "https://framerusercontent.com/images/Tpg3e18kWkg9itNKePSQc77Yl44.svg",
    title: "Loan Process",
    description: "Streamlined process from application to closing with expert guidance.",
    features: ["Pre-Approval", "Documentation", "Underwriting", "Closing"],
    cta: "Learn More",
    href: "/mortgage/process"
  }
];

const MortgageSolutionsSection = () => {
  return (
    <section 
      className="py-16 bg-white relative mortgage-solutions-section" 
      style={{ 
        position: 'static',
        transform: 'none',
        willChange: 'auto',
        isolation: 'isolate'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Mortgage Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of mortgage products designed to meet your unique financial needs.
          </p>
        </div>

        {/* Cards Grid - Single Row Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mortgageSolutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto mt-6">
                <Image
                  src={solution.icon}
                  alt={`${solution.title} icon`}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>

              {/* Content */}
              <div className="px-6 pb-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed text-center">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {solution.features.slice(0, 2).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 rounded-full mr-3 bg-green-500 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button - Always at bottom */}
                <Link
                  href={solution.href}
                  className="block w-full text-center bg-green-500 text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors duration-200 mt-auto"
                >
                  {solution.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            Not sure which loan is right for you? Our experts are here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Speak with a Mortgage Expert
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MortgageSolutionsSection;