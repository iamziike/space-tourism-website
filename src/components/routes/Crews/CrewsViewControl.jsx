const CrewsViewControls = ({ id, crewShowcaseHandler, className }) => {
  const crewSelectionHandler = () => {
    crewShowcaseHandler(id);
  };

  return <div className={className} onClick={crewSelectionHandler}></div>;
};

export default CrewsViewControls;
