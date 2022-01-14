import { motion } from 'framer-motion';

import classes from './Destination.module.css';
import {
  firstChildVariant,
  lastChildVariant,
  leftExit,
  rightExit,
} from '../../../motions/default-motion-variants';
import DestinationSelect from './DestinationSelect';

const Destination = ({
  destination,
  chosenDestinationIndex,
  onDestinationSelect,
  destinationsName,
}) => {
  return (
    <>
      <div className={classes.destination}>
        <motion.div
          className={classes['destination-image-wrapper']}
          {...firstChildVariant}
          exit={leftExit}
        >
          <img src={destination.url} alt='' />
        </motion.div>
        <motion.div
          className={classes.details}
          {...lastChildVariant}
          exit={rightExit}
        >
          <div className={classes['destinations-select']}>
            {destinationsName.map((name, index) => {
              const className =
                chosenDestinationIndex === index
                  ? `${classes['destination-select']} hover-down--bottom`
                  : `${classes['destination-select']}`;
              return (
                <DestinationSelect
                  key={index}
                  name={name}
                  index={index}
                  onDestinationSelect={onDestinationSelect}
                  className={className}
                />
              );
            })}
          </div>
          <h1 className={classes['destination-name']}>{destination.name}</h1>
          <p className={classes['destination-description']}>
            {destination.description}
          </p>
          <div className={classes.travel}>
            <div>
              <p>AVG. DISTANCE</p>
              <p>{destination.avgDistance}</p>
            </div>
            <div>
              <p>EST. TRAVEL TIME</p>
              <p>{destination.estTravelTime}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Destination;
