import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const InfoItem = ({ children, href, isLast = false }: { children: React.ReactNode; href?: string; isLast?: boolean }) => {
  const isExternal = href?.startsWith('http');
  return (
    <div className={`px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 ${!isLast ? 'border-r border-white/10' : ''}`}>
      {href ? (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="font-navigation text-xs sm:text-sm md:text-base font-medium text-white transition-colors hover:text-primary"
        >
          {children}
        </a>
      ) : (
        <span className="font-navigation text-xs sm:text-sm md:text-base font-medium text-white">
          {children}
        </span>
      )}
    </div>
  );
};

export default function HeroSection() {
  const bgImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/9Fne8ZwUbGLXpexr9WeYNDdyDF0-1.png";

  return (
    <div className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[840px] text-white">
      <Image
        src={bgImageUrl}
        alt="Modern house with large windows surrounded by lush greenery and trees"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
        className="z-0"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/40" />

      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="font-hero-headline text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] font-bold leading-[1.1] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px]">
          Your Trusted Mortgage Partner in California
        </h1>
        <p className="mt-4 sm:mt-6 max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[610px] font-body-text text-sm sm:text-base lg:text-lg leading-[1.5] sm:leading-[1.6]">
          Licensed mortgage lending, real estate brokerage, and legal case funding. Get pre-approved for your home loan with California's most trusted financial services provider.
        </p>

        <Link
          href="/apply"
          className="mt-6 sm:mt-8 lg:mt-10 inline-block rounded-lg bg-primary px-6 sm:px-8 py-3 sm:py-4 font-button-text text-sm sm:text-base font-medium text-dark-gray transition hover:opacity-90 hover:shadow-[0_8px_16px_rgba(154,255,71,0.3)]"
        >
          Get Pre-Approved for Your Mortgage
        </Link>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 w-full max-w-max -translate-x-1/2 z-30 hidden sm:flex">
        <div className="flex flex-col sm:flex-row bg-[rgba(36,36,36,0.2)] backdrop-blur-[10px] rounded-lg sm:rounded-none overflow-hidden">
          <InfoItem href="tel:+(555) 123-4567">
            +(555) 123-4567
          </InfoItem>
          <InfoItem href="mailto:hello@frmi.com">
            hello@frmi.com
          </InfoItem>
          <InfoItem isLast>
            Licensed California Mortgage Lender & Real Estate Broker
          </InfoItem>
        </div>
      </div>
    </div>
  );
}