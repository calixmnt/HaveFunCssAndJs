import AddItemForm from "./AddItemForm.jsx";
import ButtonGroup from "./ButtonGroup.jsx";

const Sidebar = ({ handleAddItem,handleMarkAllAsComplete, handleMarkAllAsInComplete, handleRemoveAllItems, handleResetToInitial  }) => {
  return <div className="sidebar">
    <AddItemForm onAddItem={handleAddItem} />
          <ButtonGroup
            handleMarkAllAsComplete={handleMarkAllAsComplete}
            handleMarkAllAsInComplete={handleMarkAllAsInComplete}
            handleRemoveAllItems={handleRemoveAllItems}
            handleResetToInitial={handleResetToInitial}
          />
  </div>;
};

export default Sidebar;
