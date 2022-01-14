import { motion } from 'framer-motion';

import classes from './PageNotFound.module.css';
import Overlay from '../../UI/Overlay/Overlay';
import routeExit from '../../../motions/routeExit';

const PageNotFound = () => {
  return (
    <motion.div exit={routeExit}>
      <Overlay className={classes.overlay} />
      <div className={`${classes['page-not-found']} route-content`}>
        <h1>404</h1>
      </div>
    </motion.div>
  );
};

export default PageNotFound;
