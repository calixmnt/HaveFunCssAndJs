import { ResetIcon } from "@radix-ui/react-icons";

const ResetButton = ({ setCount }) => {
  const handleClick = () => {
    setCount(0);
  };

  return (
    <button className="reset-btn">
      <ResetIcon onClick={handleClick} className="reset-btn-icon" />
    </button>
  );
};

export default ResetButton;
