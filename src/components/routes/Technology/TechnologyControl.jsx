import classes from './TechnologyControl.module.css';

const TechnologyControl = ({ currentIndex, index, onControlSelection }) => {
  const controlSelectionHandler = () => {
    onControlSelection(index);
  };

  return (
    <div
      className={`${classes.control} ${
        currentIndex === index ? classes['control--selected'] : ''
      }`}
      onClick={controlSelectionHandler}
    >
      {index + 1}
    </div>
  );
};

export default TechnologyControl;
