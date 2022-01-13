const initial = {
  y: '-100vh',
};

export const controlsVariant = {
  variants: {
    initial,
    visible: {
      y: 0,
      transition: {
        type: 'spring',
        mass: 0.8,
        staggerChildren: 0.5,
        when: 'beforeChildren',
      },
    },
  },
  initial: 'initial',
  animate: 'visible',
};

export const controlVariants = {
  variants: {
    initial,
    visible: {
      y: 0,
    },
  },
};
