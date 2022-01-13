import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Overlay from '../../UI/Overlay/Overlay';
import TechnologyControl from './TechnologyControl';
import classes from './Technology.module.css';
import launchVehicleLandscape from '../../../assets/images/technology/image-launch-vehicle-landscape.jpg';
import launchVehiclePortrait from '../../../assets/images/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsuleLandscape from '../../../assets/images/technology/image-space-capsule-landscape.jpg';
import spaceCapsulePortrait from '../../../assets/images/technology/image-space-capsule-portrait.jpg';
import spacePortLandscape from '../../../assets/images/technology/image-spaceport-landscape.jpg';
import spacePortPortrait from '../../../assets/images/technology/image-spaceport-portrait.jpg';
import routeExit from '../../../motions/routeExit';
import {
  firstChildVariant,
  lastChildVariant,
} from '../../../motions/defaultVariants';
import { controlsVariant, controlVariants } from './technology-variants';

const technologies = [
  {
    id: Math.random(),
    name: 'Launch vehicle',
    images: {
      portrait: launchVehiclePortrait,
      landscape: launchVehicleLandscape,
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: Math.random(),
    name: 'Spaceport',
    images: {
      portrait: spacePortPortrait,
      landscape: spacePortLandscape,
    },
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
  },
  {
    id: Math.random(),
    name: 'Space capsule',
    images: {
      portrait: spaceCapsulePortrait,
      landscape: spaceCapsuleLandscape,
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
        <h2
          className={`${classes['technology-page-intro']} ${classes['intro-phrase']}`}
        >
          <span>03</span>
          SPACE LAUNCH 101
        </h2>
        <div className={classes['content-render']}>
          <motion.div className={classes.controls} {...controlsVariant}>
            {technologies.map((technology, index) => {
              return (
                <motion.div {...controlVariants}>
                  <TechnologyControl
                    key={technology.id}
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
          <motion.div
            className={classes['text-content']}
            {...firstChildVariant}
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
        </div>
      </motion.div>
    </>
  );
};

export default Technology;
