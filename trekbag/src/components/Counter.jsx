const Counter = ({totalNumberOfItems, numberOfItemsPacked}) => {
  return (
    <p>
      <b>{numberOfItemsPacked}</b>/ {totalNumberOfItems} item(s) packed
    </p>
  );
};

export default Counter;
