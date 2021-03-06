import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import classes from './Technology.module.css';
import Overlay from '../../UI/Overlay/Overlay';
import TechnologyControl from './TechnologyControl';
import routeExit from '../../../motions/routeExit';
import {
  firstChildVariant,
  lastChildVariant,
  leftExit,
  rightExit,
} from '../../../motions/default-motion-variants';
import { controlsVariant, controlVariants } from './technology-motion-variants';

const technologies = [
  {
    id: Math.random(),
    name: 'Launch vehicle',
    images: {
      portrait:
        'https://res.cloudinary.com/dnagee/image/upload/v1642159247/space-tourism-website/technology/image-launch-vehicle-portrait_vxq1su.jpg',
      landscape:
        'https://res.cloudinary.com/dnagee/image/upload/v1642159247/space-tourism-website/technology/image-launch-vehicle-landscape_gzebr6.jpg',
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: Math.random(),
    name: 'Spaceport',
    images: {
      portrait:
        'https://res.cloudinary.com/dnagee/image/upload/v1642159249/space-tourism-website/technology/image-spaceport-portrait_h6qb3p.jpg',
      landscape:
        'https://res.cloudinary.com/dnagee/image/upload/v1642159248/space-tourism-website/technology/image-spaceport-landscape_ok1pos.jpg',
    },
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
  },
  {
    id: Math.random(),
    name: 'Space capsule',
    images: {
      portrait:
        'https://res.cloudinary.com/dnagee/image/upload/v1642159248/space-tourism-website/technology/image-space-capsule-portrait_ta7d01.jpg',
      landscape:
        'https://res.cloudinary.com/dnagee/image/upload/v1642159248/space-tourism-website/technology/image-space-capsule-landscape_pxnoy3.jpg',
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const Technology = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPortrait, setIsPortrait] = useState(true);

  const controlSelectionHandler = (index) => {
    setCurrentIndex(index);
  };

  const currentTechnology = technologies[currentIndex];

  useEffect(() => {
    const breakPoint = 1070;
    const alterHeroImage = () => {
      if (window.outerWidth <= breakPoint) {
        setIsPortrait(false);
      } else setIsPortrait(true);
    };
    alterHeroImage();

    window.addEventListener('resize', () => {
      alterHeroImage();
    });
  }, []);

  return (
    <>
      <Overlay className={classes.overlay} />
      <motion.div
        exit={routeExit}
        className={`${classes.technology} route-content no-visible-scrollbar`}
      >
        <h2 className={`page-short-info`}>
          <span>03</span>
          SPACE LAUNCH 101
        </h2>
        <div className={classes['content-render']}>
          <motion.div className={classes.controls} {...controlsVariant}>
            {technologies.map((technology, index) => {
              return (
                <motion.div {...controlVariants} key={technology.id}>
                  <TechnologyControl
                    {...{
                      index,
                      currentIndex,
                      onControlSelection: controlSelectionHandler,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
          <AnimatePresence exitBeforeEnter>
            {technologies.map((technology, index) => {
              return (
                index === currentIndex && (
                  <React.Fragment key={technology.id}>
                    <motion.div
                      className={classes['text-content']}
                      {...firstChildVariant}
                      exit={leftExit}
                    >
                      <h2 className={classes.intro}>THE TERMINOLOGY...</h2>
                      <h1 className={classes['tech-type']}>
                        {currentTechnology.name.toUpperCase()}
                      </h1>
                      <p className={classes.description}>
                        {currentTechnology.description}
                      </p>
                    </motion.div>
                    <motion.div
                      className={classes['image-wrapper']}
                      {...lastChildVariant}
                      exit={rightExit}
                    >
                      <img
                        src={
                          isPortrait
                            ? currentTechnology.images.portrait
                            : currentTechnology.images.landscape
                        }
                        alt='technology glance'
                      />
                    </motion.div>
                  </React.Fragment>
                )
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

export default Technology;
