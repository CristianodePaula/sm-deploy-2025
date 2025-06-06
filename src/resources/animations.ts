import type { Variants } from 'framer-motion';

export const TopNavbarAnimation: Variants = {
  hidden: {
    y: -50,
    opacity: 0
  },
  show: {
    y: 0, 
    opacity: 1,
    transition: {
      // type: 'spring',
      stiffness: 2000,
      duration: 2,
      delay: 0.2
    }
  }
};


export const heroTitleAnimation: Variants = {
  hidden: {
    y: 80,
    opacity: 0,
    filter: 'blur(8px)',
  },
  show: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: 'easeOut',
    },
  },
};

export const heroSubtitleAnimation: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
    filter: 'blur(6px)',
  },
  show: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      delay: 0.5,
      duration: 1.2,
      ease: 'easeOut',
    },
  },
};



export const aboutTAnimation: Variants = {
  hidden: {
    x: -100,
    opacity: 0
  },
  show: {
    x: -1,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.2
    }
  }
};

export const aboutIAnimation: Variants = {
  hidden: {
    scale: 1.3,
    opacity: 0
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.2
    }
  }
};

export const valuesSectionAnimation: Variants = {
  hidden: {
    x: 50,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.2
    }
  }
};

export const sliderYAnimation: Variants = {
  initial: {
    x: 50,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.2
    }
  }
};

export const cardsGAnimation: Variants = {
  hidden: {},
  show: {
    transition: {
      delay: 1,
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  }
};

export const cardsCAnimation: Variants = {
  hidden: {
    y: 50,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 2 }
  }
};

export const cardsIAnimation: Variants = {
  hidden: {
    y: 100,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 }
  }
};

export const contactAnimation: Variants = {
  hidden: {
    y: 30,        // sutil subida
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.2
    }
  }
};


export const footerBAnimation: Variants = {
  hidden: {
    y: 0,
    opacity: 0
  },
  show: {
    y: 1,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.5
    }
  }
};


export const productDemoTextAnimation: Variants = {
  hidden: {
    y: 30,
    opacity: 0,
    scale: 0.95,
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      delay: 0.3,
    }
  }
};
