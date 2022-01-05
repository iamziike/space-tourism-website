import { Link } from 'react-router-dom';
import classes from './Explore.module.css';

const Explore = () => {
  return (
    <div className={classes.explore}>
      <Link to={'/destination'}></Link>
    </div>
  );
};

export default Explore;
