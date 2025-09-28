"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CtaBannerSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://framerusercontent.com/images/06rJd5sKHjmEQdmcgFghvVrOJ4.png?lossless=1"
          alt="Blue gradient background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
        />
      </div>

      {/* Left Building */}
      <div className="absolute left-0 bottom-0 z-10 w-1/3 max-w-md">
        <Image
          src="https://framerusercontent.com/images/EKClaT86SnFHH8YZXua5PIZif4.png"
          alt="Modern house with pool and landscaping"
          width={400}
          height={500}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Right Building */}
      <div className="absolute right-0 bottom-0 z-10 w-1/3 max-w-md">
        <Image
          src="https://framerusercontent.com/images/vPrN2k22PI3OqgbVnGiJ3QVtM9o.png"
          alt="Modern house with pool and landscaping"
          width={400}
          height={500}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-900 mb-6 sm:mb-8">
            One Platform. Two Services. Endless Value.
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-800 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">
            Why juggle multiple companies when FRMI offers both mortgages and real estate brokerage in one place? Our integrated model means fewer delays, better communication, and a smoother experience.
          </p>
          
          <Link
            href="/apply"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-opacity-90 transition-all hover:shadow-xl"
          >
            Experience the FRMI Advantage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaBannerSection;
