import { useState } from 'react';
import Overlay from '../../UI/Overlay/Overlay';
import Crew from './Crew/Crew';
import CrewsViewControl from './CrewsViewControl';
import classes from './Crews.module.css';
import douglasImage from '../../../assets/images/crew/image-douglas-hurley.png';
import markImage from '../../../assets/images/crew/image-mark-shuttleworth.png';
import victorImage from '../../../assets/images/crew/image-victor-glover.png';
import ansariImage from '../../../assets/images/crew/image-anousheh-ansari.png';

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
  const [idToShow, setIdToShow] = useState(crewMembers[0].id);

  const crewShowcaseHandler = (id) => {
    setIdToShow(id);
  };

  return (
    <>
      <Overlay className={classes.overlay} />
      <div className={`${classes.crews} no-visible-scrollbar route-content`}>
        <h2 className={classes.intro}>
          <span>02</span>
          MEET YOUR CREW
        </h2>
        <div className={classes['crew-list']}>
          {crewMembers.map((crewMember) => {
            return (
              <Crew key={crewMember.id} {...{ ...crewMember, idToShow }} />
            );
          })}
          <div className={classes['view-controls']}>
            {crewMembers.map((crewMember) => {
              return (
                <CrewsViewControl
                  key={crewMember.id}
                  {...{
                    id: crewMember.id,
                    crewShowcaseHandler,
                    className: `${classes['view-control']} ${
                      idToShow === crewMember.id
                        ? classes['view-control--current']
                        : ''
                    }`,
                    idToShow,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Crews;
