import { motion } from 'framer-motion';

import classes from './Crew.module.css';
import {
  firstChildVariant,
  lastChildVariant,
} from '../../../../motions/default-motion-variants';

const Crew = ({ name, image, role, bio }) => {
  return (
    <div className={`${classes.crew} no-visible-scrollbar`}>
      <motion.div
        className={`${classes['text-container']}`}
        {...firstChildVariant}
      >
        <div className={classes.role}>{role.toUpperCase()}</div>
        <div className={classes.name}>{name.toUpperCase()}</div>
        <div className={classes.bio}>{bio}</div>
        <div className={classes['view-controls']}>{}</div>
      </motion.div>
      <motion.div className={classes['image-wrapper']} {...lastChildVariant}>
        <img src={image} alt={classes.name} />
      </motion.div>
    </div>
  );
};

export default Crew;
