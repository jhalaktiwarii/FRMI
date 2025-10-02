"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

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
  
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Create timeline for hero animations
    const tl = gsap.timeline({ delay: 0.5 });

    // Background parallax effect
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.1,
        duration: 0.8,
        ease: 'power2.out',
      });
    }

    // Title animation with typewriter effect
    if (titleRef.current) {
      tl.fromTo(titleRef.current, 
        { 
          opacity: 0,
          y: 100,
          rotationX: 90,
          transformOrigin: '50% 50% -50px',
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: 'power2.out',
        }
      );
    }

    // Subtitle animation
    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current,
        { 
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
        }, '-=0.6'
      );
    }

    // CTA button animation
    if (ctaRef.current) {
      tl.fromTo(ctaRef.current,
        { 
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
        }, '-=0.4'
      );
    }

    // Info bar animation
    if (infoRef.current) {
      // Set initial state
      gsap.set(infoRef.current, { 
        opacity: 0,
        y: 30,
        x: 0 // Ensure no x-axis movement
      });
      
      tl.fromTo(infoRef.current,
        { 
          opacity: 0,
          y: 30,
          x: 0
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
        }, '-=0.2'
      );
    }

    // Parallax effect on scroll
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[840px] text-white overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0"
      >
        <Image
          src={bgImageUrl}
          alt="Modern house with large windows surrounded by lush greenery and trees"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
          className="z-0"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.h1 
          ref={titleRef}
          className="font-hero-headline text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] font-bold leading-[1.1] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px]"
        >
          Your Trusted Mortgage Partner in California
        </motion.h1>
        
        <motion.p 
          ref={subtitleRef}
          className="mt-4 sm:mt-6 max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[610px] font-body-text text-sm sm:text-base lg:text-lg leading-[1.5] sm:leading-[1.6]"
        >
          Licensed mortgage lending, real estate brokerage, and legal case funding. Get pre-approved for your home loan with California's most trusted financial services provider.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <a
            ref={ctaRef}
            href="tel:+(818) 555-1212"
            className="mt-6 sm:mt-8 lg:mt-10 inline-block rounded-lg bg-primary px-6 sm:px-8 py-3 sm:py-4 font-button-text text-sm sm:text-base font-medium text-dark-gray transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_16px_rgba(154,255,71,0.3)] cursor-pointer"
          >
            Get Pre-Approved for Your Mortgage
          </a>
        </motion.div>
      </div>

      {/* Info Bar */}
      <div 
        ref={infoRef}
        className="absolute bottom-4 sm:bottom-6 left-1/2 w-full max-w-max -translate-x-1/2 z-30 hidden sm:flex"
      >
        <div className="flex flex-col sm:flex-row bg-[rgba(36,36,36,0.2)] backdrop-blur-[10px] rounded-lg sm:rounded-none overflow-hidden">
          <InfoItem href="tel:+(818) 555-1212">
            +(818) 555-1212
          </InfoItem>
          <InfoItem href="mailto:hello@firstratemtginc.com">
            hello@firstratemtginc.com
          </InfoItem>
          <InfoItem isLast>
            Licensed California Mortgage Lender & Real Estate Broker
          </InfoItem>
        </div>
      </div>
    </div>
  );
}