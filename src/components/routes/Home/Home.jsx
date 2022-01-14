import { motion } from 'framer-motion';

import classes from './Home.module.css';
import Explore from '../../Explore/Explore';
import Overlay from '../../UI/Overlay/Overlay';
import routeExit from '../../../motions/routeExit';
import {
  firstChildVariant,
  lastChildVariant,
} from '../../../motions/default-motion-variants';

const Home = () => {
  return (
    <>
      <Overlay className={classes.overlay} />
      <motion.div
        className={`${classes.home} route-content no-visible-scrollbar`}
        exit={routeExit}
      >
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
      </motion.div>
    </>
  );
};

export default Home;
