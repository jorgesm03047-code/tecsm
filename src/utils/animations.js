// Awwwards-level ultra-smooth cubic bezier easing (like GSAP Power4.easeOut)
export const awwwardsEasing = [0.16, 1, 0.3, 1];

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: awwwardsEasing } 
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 1, ease: awwwardsEasing } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.3, ease: awwwardsEasing }
  },
  exit: { 
    opacity: 0, 
    y: -12, 
    transition: { duration: 0.2, ease: awwwardsEasing }
  }
};
