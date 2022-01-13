import { useState } from 'react';
import { motion } from 'framer-motion';

import DestinationSelect from './DestinationSelect';
import Overlay from '../../UI/Overlay/Overlay';
import classes from './Destination.module.css';
import moon from '../../../assets/images/destination/image-moon.webp';
import mars from '../../../assets/images/destination/image-mars.webp';
import europa from '../../../assets/images/destination/image-europa.webp';
import titan from '../../../assets/images/destination/image-titan.webp';
import routeExit from '../../../motions/routeExit';
import {
  firstChildVariant,
  lastChildVariant,
} from '../../../motions/defaultVariants';

const destinationsDataAvailable = [
  {
    id: Math.random(),
    name: 'MOON',
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites",
    avgDistance: '384,400 km',
    estTravelTime: '3 days',
    url: moon,
  },
  {
    id: Math.random(),
    name: 'MARS',
    description:
      ' Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! Avg. distance 225 mil. km ',
    avgDistance: '384,400 KM',
    estTravelTime: '9 months',
    url: mars,
  },
  {
    id: Math.random(),
    name: 'EUROPA',
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    avgDistance: '628 mil. km',
    estTravelTime: '3 years',
    url: europa,
  },
  {
    id: Math.random(),
    name: 'TITAN',
    description:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    avgDistance: '1.6 bil. km',
    estTravelTime: '7 years',
    url: titan,
  },
];

const Destination = () => {
  const [chosenDestinationIndex, setChosenDestinationIndex] = useState(0);

  const destinationSelect = (index) => {
    setChosenDestinationIndex(index);
  };

  const chosenDestination = destinationsDataAvailable[chosenDestinationIndex];

  return (
    <motion.div exit={routeExit}>
      <Overlay className={classes.overlay} />
      <div
        className={`${classes.destination} no-visible-scrollbar route-content`}
      >
        <motion.div
          className={classes['destination-render']}
          {...firstChildVariant}
        >
          <h2>
            <span>01</span>
            PICK YOUR DESTINATION
          </h2>
          <div className={classes['destination-image-wrapper']}>
            <img src={chosenDestination.url} alt='' />
          </div>
        </motion.div>
        <motion.div className={classes.details} {...lastChildVariant}>
          <div className={classes['destinations-select']}>
            {destinationsDataAvailable.map((destination, index) => {
              const className =
                chosenDestinationIndex === index
                  ? `${classes['destination-select']} hover-down--bottom`
                  : `${classes['destination-select']}`;
              return (
                <DestinationSelect
                  key={destination.id}
                  name={destination.name}
                  index={index}
                  onDestinationSelect={destinationSelect}
                  className={className}
                />
              );
            })}
          </div>
          <h1 className={classes['destination-name']}>
            {chosenDestination.name}
          </h1>
          <p className={classes['destination-description']}>
            {chosenDestination.description}
          </p>
          <div className={classes.travel}>
            <div>
              <p>AVG. DISTANCE</p>
              <p>{chosenDestination.avgDistance}</p>
            </div>
            <div>
              <p>EST. TRAVEL TIME</p>
              <p>{chosenDestination.estTravelTime}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Destination;
