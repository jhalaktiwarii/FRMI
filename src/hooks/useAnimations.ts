import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  scrollAnimations, 
  microInteractions, 
  loadingAnimations,
  pageTransitions,
  initAnimations,
  cleanupAnimations 
} from '@/lib/animations';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useScrollAnimation = (
  animationType: keyof typeof scrollAnimations,
  options: any = {}
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const animation = scrollAnimations[animationType](
      elementRef.current as any,
      options
    );

    return () => {
      animation?.kill();
    };
  }, [animationType, options]);

  return elementRef;
};

export const useMicroInteraction = () => {
  const addHoverEffect = useCallback((element: HTMLElement, type: 'button' | 'card' | 'form') => {
    if (!element) return;

    const hoverIn = type === 'button' ? microInteractions.buttonHover : 
                   type === 'card' ? microInteractions.cardHover : 
                   microInteractions.formFocus;
    
    const hoverOut = type === 'button' ? microInteractions.buttonHoverOut : 
                    type === 'card' ? microInteractions.cardHoverOut : 
                    microInteractions.formBlur;

    const handleMouseEnter = () => hoverIn(element as any);
    const handleMouseLeave = () => hoverOut(element as any);

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { addHoverEffect };
};

export const useLoadingAnimation = (isLoading: boolean) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    if (isLoading) {
      const animation = loadingAnimations.skeleton(elementRef.current as any);
      return () => {
        animation.kill();
      };
    }
  }, [isLoading]);

  return elementRef;
};

export const usePageTransition = (isVisible: boolean) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current || !isVisible) return;

    const animation = pageTransitions.fadeIn(elementRef.current as any);
    return () => {
      animation.kill();
    };
  }, [isVisible]);

  return elementRef;
};

export const useAnimationSetup = () => {
  useEffect(() => {
    initAnimations();

    return () => {
      cleanupAnimations();
    };
  }, []);

  return {
    initAnimations,
    cleanupAnimations,
  };
};

// Hook for staggered animations
export const useStaggeredAnimation = (
  selector: string,
  staggerDelay = 0.1,
  options: any = {}
) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    const animation = gsap.fromTo(elements,
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
        stagger: staggerDelay,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          ...options,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, [selector, staggerDelay, options]);
};

// Hook for parallax effects
export const useParallax = (speed = 0.5, options: any = {}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const animation = gsap.to(elementRef.current, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        ...options,
      },
    });

    return () => {
      animation.kill();
    };
  }, [speed, options]);

  return elementRef;
};

// Hook for text reveal animations
export const useTextReveal = (options: any = {}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const animation = gsap.fromTo(elementRef.current,
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
          trigger: elementRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          ...options,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, [options]);

  return elementRef;
};
