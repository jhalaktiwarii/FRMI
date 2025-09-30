import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Professional animation presets
export const animationPresets = {
  // Easing functions for professional feel
  ease: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    smoothOut: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  
  // Duration presets
  duration: {
    fast: 0.3,
    medium: 0.6,
    slow: 1.0,
    verySlow: 1.5,
  },
  
  // Professional animation variants
  fadeInUp: {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: 'power2.out',
  },
  
  fadeInScale: {
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    ease: 'back.out(1.7)',
  },
  
  slideInLeft: {
    opacity: 0,
    x: -100,
    duration: 0.8,
    ease: 'power2.out',
  },
  
  slideInRight: {
    opacity: 0,
    x: 100,
    duration: 0.8,
    ease: 'power2.out',
  },
  
  stagger: {
    stagger: 0.15,
    duration: 0.6,
    ease: 'power2.out',
  },
};

// Professional scroll-triggered animations
export const scrollAnimations = {
  // Fade in from bottom with stagger
  fadeInStagger: (selector: string, options = {}) => {
    return gsap.fromTo(selector, 
      { 
        opacity: 0, 
        y: 80,
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
          trigger: selector,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse',
          ...options,
        },
      }
    );
  },

  // Parallax effect
  parallax: (selector: string, speed = 0.5, options = {}) => {
    return gsap.to(selector, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: selector,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        ...options,
      },
    });
  },

  // Text reveal animation
  textReveal: (selector: string, options = {}) => {
    return gsap.fromTo(selector,
      { 
        opacity: 0,
        y: 30,
        rotationX: 90,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.2,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: selector,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          ...options,
        },
      }
    );
  },

  // Scale in animation
  scaleIn: (selector: string, options = {}) => {
    return gsap.fromTo(selector,
      { 
        opacity: 0,
        scale: 0.8,
        rotation: 5,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          ...options,
        },
      }
    );
  },

  // Slide in from left
  slideInLeft: (selector: string, options = {}) => {
    return gsap.fromTo(selector,
      { 
        opacity: 0,
        x: -100,
        rotationY: 15,
      },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 1.0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: selector,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          ...options,
        },
      }
    );
  },

  // Slide in from right
  slideInRight: (selector: string, options = {}) => {
    return gsap.fromTo(selector,
      { 
        opacity: 0,
        x: 100,
        rotationY: -15,
      },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 1.0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: selector,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          ...options,
        },
      }
    );
  },
};

// Professional micro-interactions
export const microInteractions = {
  // Button hover effect
  buttonHover: (element: HTMLElement) => {
    return gsap.to(element, {
      scale: 1.05,
      y: -2,
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
      duration: 0.3,
      ease: 'power2.out',
    });
  },

  // Button hover out
  buttonHoverOut: (element: HTMLElement) => {
    return gsap.to(element, {
      scale: 1,
      y: 0,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      duration: 0.3,
      ease: 'power2.out',
    });
  },

  // Card hover effect
  cardHover: (element: HTMLElement) => {
    return gsap.to(element, {
      scale: 1.02,
      y: -8,
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      duration: 0.4,
      ease: 'power2.out',
    });
  },

  // Card hover out
  cardHoverOut: (element: HTMLElement) => {
    return gsap.to(element, {
      scale: 1,
      y: 0,
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      duration: 0.4,
      ease: 'power2.out',
    });
  },

  // Form field focus
  formFocus: (element: HTMLElement) => {
    return gsap.to(element, {
      scale: 1.02,
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
      duration: 0.3,
      ease: 'power2.out',
    });
  },

  // Form field blur
  formBlur: (element: HTMLElement) => {
    return gsap.to(element, {
      scale: 1,
      borderColor: '#e5e7eb',
      boxShadow: 'none',
      duration: 0.3,
      ease: 'power2.out',
    });
  },
};

// Loading animations
export const loadingAnimations = {
  // Skeleton loading
  skeleton: (element: HTMLElement) => {
    return gsap.fromTo(element, 
      { 
        opacity: 0.3,
        scale: 0.98,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        repeat: -1,
        yoyo: true,
      }
    );
  },

  // Pulse animation
  pulse: (element: HTMLElement) => {
    return gsap.to(element, {
      scale: 1.1,
      duration: 0.8,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
    });
  },

  // Spinner animation
  spinner: (element: HTMLElement) => {
    return gsap.to(element, {
      rotation: 360,
      duration: 1,
      ease: 'none',
      repeat: -1,
    });
  },
};

// Page transition animations
export const pageTransitions = {
  // Fade in page
  fadeIn: (element: HTMLElement) => {
    return gsap.fromTo(element, 
      { 
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      }
    );
  },

  // Slide in from right
  slideIn: (element: HTMLElement) => {
    return gsap.fromTo(element, 
      { 
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    );
  },
};

// Utility function to initialize all animations
export const initAnimations = () => {
  if (typeof window === 'undefined') return;

  // Refresh ScrollTrigger after DOM changes
  ScrollTrigger.refresh();
};

// Cleanup function
export const cleanupAnimations = () => {
  if (typeof window === 'undefined') return;
  
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.killTweensOf('*');
};
