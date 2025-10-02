"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface CtaSectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryHref?: string;
  secondaryHref?: string;
  backgroundImage?: string;
  showBackgroundImage?: boolean;
  variant?: 'large' | 'small';
}

const CtaSection = ({ 
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  primaryHref,
  secondaryHref,
  backgroundImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/dFol0F6lVSF6XLFt63C7VOOrp1w-18.png",
  showBackgroundImage = true,
  variant = 'large'
}: CtaSectionProps) => {
  const isSmall = variant === 'small';
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Animate background
    if (bgRef.current) {
      gsap.fromTo(bgRef.current,
        { scale: 1.1, opacity: 0.8 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 1.2, 
          ease: 'power2.out' 
        }
      );
    }

    // Animate content
    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children,
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
            trigger: contentRef.current,
            start: 'top 80%',
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
      className="relative w-full bg-primary overflow-hidden"
    >
      {showBackgroundImage && (
        <div ref={bgRef} className="absolute inset-0 z-0 h-full w-full">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover object-center"
            quality={100}
          />
        </div>
      )}
      
      <div 
        ref={contentRef}
        className={`relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-5 xl:px-20 flex flex-col items-center text-center ${
          isSmall ? 'py-12 sm:py-16 md:py-20' : 'py-16 sm:py-20 md:py-24 lg:py-[120px]'
        }`}
      >
        <motion.h2 
          className={`font-bold text-dark-gray leading-tight ${
            isSmall 
              ? 'text-2xl sm:text-3xl md:text-4xl max-w-2xl mx-auto' 
              : 'text-[28px] sm:text-[36px] md:text-[48px] lg:text-4xl xl:text-[56px] tracking-[-0.5px] md:tracking-[-0.8px] lg:tracking-[-1px] leading-[1.2] max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[680px]'
          }`}
        >
          {title}
        </motion.h2>
        <motion.p 
          className={`text-dark-gray ${
            isSmall 
              ? 'mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed' 
              : 'mt-4 sm:mt-5 text-sm sm:text-base md:text-lg leading-[1.4] sm:leading-[1.5] md:leading-[1.6] max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[680px]'
          }`}
        >
          {description}
        </motion.p>
        
        <motion.div 
          className={`flex flex-col sm:flex-row gap-4 justify-center ${
            isSmall ? 'mt-6' : 'mt-8'
          }`}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {primaryHref ? (
              <a
                href={primaryHref}
                className={`inline-block bg-dark-gray text-white rounded-lg font-semibold hover:bg-gray-800 transition-all hover:shadow-lg cursor-pointer ${
                  isSmall ? 'px-6 py-3 text-sm' : 'px-8 py-4'
                }`}
              >
                {primaryButtonText}
              </a>
            ) : (
              <Button
                onClick={onPrimaryClick}
                className={`bg-dark-gray text-white rounded-lg font-semibold hover:bg-gray-800 transition-all hover:shadow-lg cursor-pointer ${
                  isSmall ? 'px-6 py-3 text-sm' : 'px-8 py-4'
                }`}
              >
                {primaryButtonText}
              </Button>
            )}
          </motion.div>
          {secondaryButtonText && (
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {secondaryHref ? (
                <a
                  href={secondaryHref}
                  className={`inline-block bg-white text-dark-gray rounded-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-lg border border-dark-gray cursor-pointer ${
                    isSmall ? 'px-6 py-3 text-sm' : 'px-8 py-4'
                  }`}
                >
                  {secondaryButtonText}
                </a>
              ) : (
                <Button
                  onClick={onSecondaryClick}
                  variant="outline"
                  className={`bg-white text-dark-gray rounded-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-lg border-dark-gray cursor-pointer ${
                    isSmall ? 'px-6 py-3 text-sm' : 'px-8 py-4'
                  }`}
                >
                  {secondaryButtonText}
                </Button>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;