import Overlay from '../../UI/Overlay/Overlay';
import classes from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <>
      <Overlay className={classes.overlay} />
      <div className={`${classes['page-not-found']} route-content`}>
        <h1>404</h1>
      </div>
    </>
  );
};

export default PageNotFound;
