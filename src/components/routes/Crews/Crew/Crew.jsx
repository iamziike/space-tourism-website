import classes from './Crew.module.css';

const Crew = ({ id, name, image, role, bio, idToShow }) => {
  return (
    <div
      className={`${classes.crew} ${
        idToShow !== id ? 'no-display no-visible-scrollbar' : ''
      }`}
    >
      <div className={classes['text-container']}>
        <div className={classes.role}>{role.toUpperCase()}</div>
        <div className={classes.name}>{name.toUpperCase()}</div>
        <div className={classes.bio}>{bio}</div>
        <div className={classes['view-controls']}>{}</div>
      </div>
      <div className={classes['image-wrapper']}>
        <img src={image} alt={classes.name} />
      </div>
    </div>
  );
};

export default Crew;
