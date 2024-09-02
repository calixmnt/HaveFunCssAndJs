import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export const CountButton = ({ locked, type, setCount }) => {
  const handleClick = (event) => {
    setCount((prev) => {
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      } else if (type === "plus") {
        const newCount = prev + 1;
        if (newCount > 5) {
          return 5;
        }
        return newCount;
      }
    });

    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} className="count-btn">
      {type === "minus" ? (
        <MinusIcon onClick={handleClick} className="count-btn-icon" />
      ) : (
        <PlusIcon onClick={handleClick} className="count-btn-icon" />
      )}
    </button>
  );
};

export default CountButton;
