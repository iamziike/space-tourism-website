import { motion } from 'framer-motion';

import Explore from '../../Explore/Explore';
import Overlay from '../../UI/Overlay/Overlay';
import classes from './Home.module.css';
import routeExit from '../../../motions/routeExit';
import {
  firstChildVariant,
  lastChildVariant,
} from '../../../motions/defaultVariants';

const Home = () => {
  return (
    <motion.div exit={routeExit}>
      <Overlay className={classes.overlay} />
      <div className={`${classes.home} route-content`}>
        <motion.div className={classes['hero-text']} {...firstChildVariant}>
          <h2>SO YOU WANT TO TRAVEL </h2>
          <h1>SPACE</h1>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax becuase we'll give you a truly out of this
            world experience!
          </p>
        </motion.div>
        <motion.div {...lastChildVariant}>
          <Explore />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
