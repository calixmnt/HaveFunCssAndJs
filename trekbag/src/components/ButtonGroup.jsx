import Button from "./Button.jsx";

const ButtonGroup = ({
  handleMarkAllAsComplete,
  handleRemoveAllItems,
  handleMarkAllAsInComplete,
  handleResetToInitial,
}) => {
  
  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: handleMarkAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: handleMarkAllAsInComplete,
    },
    {
      text: "Reset to initial",
      onClick: handleResetToInitial,
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button
          key={button.text + button.onClick.toString()}
          onClick={button.onClick}
          buttonType="secondary"
        >{button.text}</Button>
      ))}
    </section>
  );
};

export default ButtonGroup;
