import React from 'react';
import Image from 'next/image';

const CtaSection = () => {
  return (
    <section className="relative w-full bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/dFol0F6lVSF6XLFt63C7VOOrp1w-18.png"
          alt="Bg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-5 sm:px-20 py-20 md:py-[120px] flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-[56px] font-bold text-dark-gray tracking-[-0.5px] md:tracking-[-1px] leading-[1.2] max-w-[680px]">
          Ready to find your home?
        </h2>
        <p className="mt-5 text-base md:text-lg text-dark-gray leading-[1.5] md:leading-[1.6] max-w-[680px]">
          Guiding principles that shape our approach to luxury real estate, ensuring unparalleled service and exceptional experiences.
        </p>
        <div className="mt-10">
          <a
            href="https://finestdevs.com/buy-houseplus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-dark-gray font-medium text-base py-4 px-8 rounded-lg transition-transform duration-100 ease-in-out hover:scale-105"
          >
            Get This Template
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;