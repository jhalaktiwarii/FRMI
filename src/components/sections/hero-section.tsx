import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const InfoItem = ({ children, href, isLast = false }: { children: React.ReactNode; href: string; isLast?: boolean }) => {
  const isExternal = href.startsWith('http');
  return (
    <div className={`px-10 py-5 ${!isLast ? 'border-r border-white/10' : ''}`}>
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="font-navigation text-base font-medium text-white transition-colors hover:text-primary"
      >
        {children}
      </a>
    </div>
  );
};

export default function HeroSection() {
  const bgImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/9Fne8ZwUbGLXpexr9WeYNDdyDF0-1.png";

  return (
    <div className="relative w-full h-[840px] text-white">
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

      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-5">
        <h1 className="font-hero-headline text-[56px] md:text-[72px] lg:text-[96px] font-bold leading-[1.1] tracking-[-2px]">
          Get dream home
        </h1>
        <p className="mt-6 max-w-[610px] font-body-text text-lg leading-[1.6]">
          Experience the pinnacle of real estate with Houseplus. Our curated selection of premium properties offers the perfect blend of elegance, comfort, and sophistication.
        </p>

        <Link
          href="/listings"
          className="mt-10 inline-block rounded-lg bg-primary px-8 py-4 font-button-text text-base font-medium text-dark-gray transition hover:opacity-90 hover:shadow-[0_8px_16px_rgba(154,255,71,0.3)]"
        >
          Explore More
        </Link>
      </div>

      <div className="absolute bottom-6 left-1/2 w-full max-w-max -translate-x-1/2 z-30 hidden md:flex">
        <div className="flex bg-[rgba(36,36,36,0.2)] backdrop-blur-[10px]">
          <InfoItem href="tel:+(555) 123-4567">
            +(555) 123-4567
          </InfoItem>
          <InfoItem href="mailto:hello@Houseplus.com">
            hello@Houseplus.com
          </InfoItem>
          <InfoItem href="https://www.google.com/search?q=3517+W.+Gray+St.+Utica,+Pennsylvania+57867" isLast>
            3517 W. Gray St. Utica, Pennsylvania 57867
          </InfoItem>
        </div>
      </div>
    </div>
  );
}