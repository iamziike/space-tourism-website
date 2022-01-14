import { createPortal } from 'react-dom';

import classes from './Overlay.module.css';

const Overlay = ({ className }) => {
  const container = document.getElementById('overlay');
  return createPortal(
    <div className={`${className} ${classes.overlay}`}></div>,
    container,
  );
};

export default Overlay;
