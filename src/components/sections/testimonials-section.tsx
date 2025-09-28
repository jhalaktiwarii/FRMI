"use client";

import React, { useCallback, FC } from 'react';
import Image from 'next/image';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';

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

const TestimonialCard: FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-property-card-gray p-6 sm:p-8 lg:p-10 rounded-2xl flex flex-col gap-6 sm:gap-8 lg:gap-[30px] h-full justify-between">
    <div>
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/svgs/59KNXRFwKjwYSkDrUhEwL9njVs-9.svg"
        alt="Quote icon"
        width={38}
        height={28}
        className="mb-6 sm:mb-8 lg:mb-[30px]"
      />
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
        <p className="text-base sm:text-lg font-medium text-dark-gray">{testimonial.name}</p>
        <p className="text-sm sm:text-base text-medium-gray">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

const CarouselButton: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { children, ...rest } = props;
  return (
    <button
      type="button"
      className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] border border-border rounded-lg flex items-center justify-center transition-colors hover:bg-light-gray"
      {...rest}
    >
      {children}
    </button>
  );
};

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-[120px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-[60px]">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold text-dark-gray tracking-[-0.5px] sm:tracking-[-0.8px] lg:tracking-[-1px] leading-tight">
            What Our Client Says
          </h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4 sm:-ml-6">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-grow-0 flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 pl-4 sm:pl-6"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 sm:gap-5 mt-8 sm:mt-10 md:mt-12 lg:mt-[50px]">
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
        </div>
      </div>
    </section>
  );
}