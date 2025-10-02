"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
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

    // Animate form
    if (formRef.current) {
      gsap.fromTo(formRef.current,
        { 
          opacity: 0,
          y: 100,
          scale: 0.95,
          rotationX: 15,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.0,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: formRef.current,
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create WhatsApp message with form data
    const whatsappMessage = `Hello! I'm interested in your services.

*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service Type:* ${formData.serviceType}
*Message:* ${formData.message}

Please contact me to discuss further.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/18185551212?text=${encodedMessage}`;
    
    // Simulate brief loading
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      serviceType: "",
      message: ""
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <Image
          src="https://framerusercontent.com/images/qoB8bXHN9U9eSjbTM8O7NLGoXI.png?width=3200&height=1734"
          alt="Modern interior background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Background Image Content (Hidden on mobile, shown on desktop) */}
          <div className="hidden lg:block">
            {/* This space is intentionally left for the background image to show through */}
            <div className="h-[600px] flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-xl opacity-90">Let us help you with your real estate and mortgage needs.</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl">
            <motion.div 
              ref={formRef}
              className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10"
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                transition: { duration: 0.3 }
              }}
            >
              {/* Form Header */}
              <motion.div 
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.h2 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  Get In Touch
                </motion.h2>
                <motion.p 
                  className="text-gray-600 text-base sm:text-lg"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  We will get back to you within 24 hours.
                </motion.p>
              </motion.div>

              {/* Contact Form */}
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-4 sm:space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Full Name */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="h-12 sm:h-14 text-base sm:text-lg border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </motion.div>
                </motion.div>

                {/* Email */}
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-12 sm:h-14 text-base sm:text-lg border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="h-12 sm:h-14 text-base sm:text-lg border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Service Type Dropdown */}
                <div>
                  <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                    <SelectTrigger className="h-12 sm:h-14 text-base sm:text-lg border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <SelectValue placeholder="Select a service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mortgage">Mortgage Solutions</SelectItem>
                      <SelectItem value="real-estate">Real Estate Services</SelectItem>
                      <SelectItem value="legal-funding">Legal Case Funding</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div>
                  <Textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="min-h-[100px] sm:min-h-[120px] text-base sm:text-lg border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className={`w-full h-12 sm:h-14 text-white text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-xl ${
                        isSubmitted 
                          ? 'bg-green-500 hover:bg-green-600' 
                          : isSubmitting
                          ? 'bg-blue-500 hover:bg-blue-600'
                          : 'bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600'
                      }`}
                    >
                      {isSubmitted ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex items-center gap-2"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            ✓
                          </motion.div>
                          Opening WhatsApp...
                        </motion.div>
                      ) : isSubmitting ? (
                        <motion.div
                          className="flex items-center gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                          Preparing WhatsApp...
                        </motion.div>
                      ) : (
                        'Get Started Now'
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
