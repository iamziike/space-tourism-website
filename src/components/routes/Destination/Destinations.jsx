import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import classes from './Destinations.module.css';
import Overlay from '../../UI/Overlay/Overlay';
import routeExit from '../../../motions/routeExit';
import Destination from './Destination';

const destinationsDataAvailable = [
  {
    id: Math.random(),
    name: 'MOON',
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites",
    avgDistance: '384,400 km',
    estTravelTime: '3 days',
    url: 'https://res.cloudinary.com/dnagee/image/upload/v1642159251/space-tourism-website/destination/image-moon_eppxzx.webp',
  },
  {
    id: Math.random(),
    name: 'MARS',
    description:
      ' Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! Avg. distance 225 mil. km ',
    avgDistance: '384,400 KM',
    estTravelTime: '9 months',
    url: 'https://res.cloudinary.com/dnagee/image/upload/v1642159251/space-tourism-website/destination/image-mars_lbccll.webp',
  },
  {
    id: Math.random(),
    name: 'EUROPA',
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    avgDistance: '628 mil. km',
    estTravelTime: '3 years',
    url: 'https://res.cloudinary.com/dnagee/image/upload/v1642159251/space-tourism-website/destination/image-europa_vg74gw.webp',
  },
  {
    id: Math.random(),
    name: 'TITAN',
    description:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    avgDistance: '1.6 bil. km',
    estTravelTime: '7 years',
    url: 'https://res.cloudinary.com/dnagee/image/upload/v1642159251/space-tourism-website/destination/image-titan_jr6o8u.webp',
  },
];
const destinationsName = destinationsDataAvailable.map(
  (destination) => destination.name,
);

const Destinations = () => {
  const [chosenDestinationIndex, setChosenDestinationIndex] = useState(0);

  const destinationSelectHandler = (index) => {
    setChosenDestinationIndex(index);
  };

  const chosenDestination = destinationsDataAvailable[chosenDestinationIndex];

  return (
    <motion.div exit={routeExit} className='route-content no-visible-scrollbar'>
      <Overlay className={classes.overlay} />
      <h2 className='page-short-info'>
        <span>01</span>
        PICK YOUR DESTINATION
      </h2>
      <div className={classes['destinations-list']}>
        <AnimatePresence exitBeforeEnter>
          {destinationsDataAvailable.map(
            (destination) =>
              destination.id === chosenDestination.id && (
                <Destination
                  key={destination.id}
                  destination={destination}
                  chosenDestinationIndex={chosenDestinationIndex}
                  onDestinationSelect={destinationSelectHandler}
                  destinationsName={destinationsName}
                />
              ),
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Destinations;
