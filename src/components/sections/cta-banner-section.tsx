"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CtaBannerSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
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

      {/* Left Building - Hidden on mobile, visible on larger screens */}
      <div className="absolute left-0 bottom-0 z-10 w-1/4 lg:w-1/3 max-w-sm lg:max-w-md hidden sm:block">
        <Image
          src="https://framerusercontent.com/images/EKClaT86SnFHH8YZXua5PIZif4.png"
          alt="Modern house with pool and landscaping"
          width={400}
          height={500}
          className="w-full h-auto object-contain object-bottom"
          priority
        />
      </div>

      {/* Right Building - Hidden on mobile, visible on larger screens */}
      <div className="absolute right-0 bottom-0 z-10 w-1/4 lg:w-1/3 max-w-sm lg:max-w-md hidden sm:block">
        <Image
          src="https://framerusercontent.com/images/vPrN2k22PI3OqgbVnGiJ3QVtM9o.png"
          alt="Modern house with pool and landscaping"
          width={400}
          height={500}
          className="w-full h-auto object-contain object-bottom"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
            One Platform. Two Services. Endless Value.
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-800 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Why juggle multiple companies when FRMI offers both mortgages and real estate brokerage in one place? Our integrated model means fewer delays, better communication, and a smoother experience.
          </p>
          
          <Link
            href="/apply"
            className="inline-block bg-white text-blue-900 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-opacity-90 transition-all hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Experience the FRMI Advantage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaBannerSection;
