import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import classes from './Crews.module.css';
import Overlay from '../../UI/Overlay/Overlay';
import Crew from './Crew/Crew';
import douglasImage from '../../../assets/images/crew/image-douglas-hurley.png';
import markImage from '../../../assets/images/crew/image-mark-shuttleworth.png';
import victorImage from '../../../assets/images/crew/image-victor-glover.png';
import ansariImage from '../../../assets/images/crew/image-anousheh-ansari.png';
import routeExit from '../../../motions/routeExit';

const crewMembers = [
  {
    id: Math.random(),
    name: 'Douglas Hurley',
    image: douglasImage,
    role: 'Commander',
    bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  },
  {
    id: Math.random(),
    name: 'Mark Shuttleworth',
    image: markImage,
    role: 'Mission Specialist',
    bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
  },
  {
    id: Math.random(),
    name: 'Victor Glover',
    image: victorImage,
    role: 'Pilot',
    bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
  },
  {
    id: Math.random(),
    name: 'Anousheh Ansari',
    image: ansariImage,
    role: 'Flight Engineer',
    bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
  },
];

const Crews = () => {
  const crewListRef = useRef();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const nextChoiceHandler = () => {
    setSelectedIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex === crewMembers.length) return 0;
      return newIndex;
    });
  };

  const prevChoiceHandler = () => {
    setSelectedIndex((prev) => {
      const newIndex = prev - 1;
      if (newIndex === 0) return crewMembers.length - 1;
      return newIndex;
    });
  };

  useEffect(() => {
    setInterval(() => {
      nextChoiceHandler();
    }, 7000);
  }, []);

  useEffect(() => {
    const target = crewListRef.current;
    target.scrollTo({
      left: target.offsetWidth * selectedIndex,
      behavior: 'smooth',
    });
  }, [selectedIndex]);

  return (
    <>
      <Overlay className={classes.overlay} />
      <motion.div className={`${classes.crews} route-content`} exit={routeExit}>
        <h2 className='page-short-info'>
          <span>02</span>
          MEET YOUR CREW
        </h2>
        <div className={classes['prev-crew']} onClick={prevChoiceHandler}>
          Prev
        </div>
        <div
          ref={crewListRef}
          className={`${classes['crew-list']} no-visible-scrollbar`}
        >
          {crewMembers.map((crewMember) => (
            <Crew key={crewMember.id} {...crewMember} />
          ))}
        </div>
        <div className={classes['next-crew']} onClick={nextChoiceHandler}>
          Next
        </div>
      </motion.div>
    </>
  );
};

export default Crews;
