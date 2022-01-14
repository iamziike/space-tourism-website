const visible = {
  x: 0,
  transition: {
    type: 'spring',
    delay: 0.2,
    mass: 0.8,
  },
};

export const firstChildVariant = {
  variants: {
    initial: { x: '-100vw' },
    visible,
  },
  initial: 'initial',
  animate: 'visible',
};

const exitTransition = {
  damping: 0.9,
};

export const leftExit = {
  x: '-100vw',
  transition: exitTransition,
};

export const rightExit = {
  x: '100vw',
  transition: exitTransition,
};

export const lastChildVariant = {
  variants: {
    initial: { x: '100vw' },
    visible,
  },
  initial: 'initial',
  animate: 'visible',
};
