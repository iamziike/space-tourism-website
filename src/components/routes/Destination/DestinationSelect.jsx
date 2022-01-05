const DestinationSelect = ({ name, index, onDestinationSelect, className }) => {
  const nameClickHandler = () => {
    onDestinationSelect(index);
  };

  return (
    <div className={`${className} hover-down`} onClick={nameClickHandler}>
      {name}
    </div>
  );
};

export default DestinationSelect;
