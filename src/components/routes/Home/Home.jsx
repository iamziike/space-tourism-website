import Explore from '../../Explore/Explore';
import Overlay from '../../UI/Overlay/Overlay';
import classes from './Home.module.css';

const Home = () => {
  return (
    <>
      <Overlay className={classes.overlay} />
      <div className={`${classes.home} route-content`}>
        <div className={classes['hero-text']}>
          <h2>SO YOU WANT TO TRAVEL </h2>
          <h1>SPACE</h1>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax becuase we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <Explore />
      </div>
    </>
  );
};

export default Home;
