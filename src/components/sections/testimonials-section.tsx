"use client";

import React, { useCallback, FC, useEffect, useRef } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Testimonial = {
  quote: string;
  image: string;
  name: string;
  title: string;
};

const testimonialsData: Testimonial[] = [
  {
    quote: "Houseplus transformed our home search into an extraordinary journey. Their attention to detail, global connections, and personalized approach led us to a property that exceeds our wildest dreams.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/eJXZH82fZiTuu8QHPFmfKDddlc-16.png",
    name: "Mubin Ahmed",
    title: "CEO & Founder of BRO",
  },
  {
    quote: "Houseplus turned our home search into an unforgettable experience. Their meticulous attention to detail, extensive global network, and truly personalized approach made us feel understood every step of the way. With their guidance",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/K5AzUAsp4bB8ez7m3fpGL9Y5I0-17.png",
    name: "Hajamk Ahmed",
    title: "CEO & Founder of BRO",
  },
  {
    quote: "Houseplus redefined our home-buying experience, making it more than just a search—it became an inspiring journey. Their dedication to understanding our vision, paired with their extensive global network,.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/eJXZH82fZiTuu8QHPFmfKDddlc-16.png",
    name: "Mubin Ahmed",
    title: "CEO & Founder of BRO",
  },
];

// Duplicate for a seamless loop effect
const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

const TestimonialCard: FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => (
  <motion.div 
    className="bg-property-card-gray p-6 sm:p-8 lg:p-10 rounded-2xl flex flex-col gap-6 sm:gap-8 lg:gap-[30px] h-full justify-between group"
    whileHover={{ 
      scale: 1.02, 
      y: -5,
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      transition: { duration: 0.3 }
    }}
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
  >
    <div>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/svgs/59KNXRFwKjwYSkDrUhEwL9njVs-9.svg"
          alt="Quote icon"
          width={38}
          height={28}
          className="mb-6 sm:mb-8 lg:mb-[30px]"
        />
      </motion.div>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-dark-gray leading-[1.5]">
        {testimonial.quote}
      </h3>
    </div>
    <div className="flex items-center gap-4 sm:gap-5 mt-auto">
      <Image
        src={testimonial.image}
        alt={`Testimonial from ${testimonial.name}`}
        width={60}
        height={60}
        className="rounded-full object-cover w-12 h-12 sm:w-14 sm:h-14 lg:w-15 lg:h-15"
      />
      <div>
        <p className="text-base sm:text-lg font-medium text-dark-gray">
          {testimonial.name}
        </p>
        <p className="text-sm sm:text-base text-medium-gray">{testimonial.title}</p>
      </div>
    </div>
  </motion.div>
);

const CarouselButton: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { children, ...rest } = props;
  return (
    <motion.button
      type="button"
      className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] border border-border rounded-lg flex items-center justify-center transition-colors hover:bg-light-gray cursor-pointer"
      whileHover={{ 
        scale: 1.1, 
        backgroundColor: '#f3f4f6',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      {...(rest as any)}
    >
      {children}
    </motion.button>
  );
};

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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

    // Animate carousel
    if (carouselRef.current) {
      gsap.fromTo(carouselRef.current,
        { 
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: carouselRef.current,
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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section 
      ref={sectionRef}
      className="bg-white py-12 sm:py-16 md:py-20 lg:py-[120px] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          ref={headerRef}
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-[60px]"
        >
          <motion.h2 
            className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold text-dark-gray tracking-[-0.5px] sm:tracking-[-0.8px] lg:tracking-[-1px] leading-tight"
          >
            What Our Client Says
          </motion.h2>
        </motion.div>

        <motion.div 
          ref={carouselRef}
          className="overflow-hidden"
        >
          <div ref={emblaRef}>
            <div className="flex -ml-4 sm:-ml-6">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-grow-0 flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 pl-4 sm:pl-6"
                >
                  <TestimonialCard testimonial={testimonial} index={index} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex justify-center items-center gap-4 sm:gap-5 mt-8 sm:mt-10 md:mt-12 lg:mt-[50px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <CarouselButton onClick={scrollPrev}>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/svgs/9mRRDeO1mv6MRzICmgj9j6rQK30-10.svg"
              alt="Previous slide"
              width={20}
              height={20}
              className="sm:w-6 sm:h-6"
            />
          </CarouselButton>
          <CarouselButton onClick={scrollNext}>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/svgs/CWekrqsMfRDkQEPXj1zTiGcSvw-11.svg"
              alt="Next slide"
              width={20}
              height={20}
              className="sm:w-6 sm:h-6"
            />
          </CarouselButton>
        </motion.div>
      </div>
    </section>
  );
}