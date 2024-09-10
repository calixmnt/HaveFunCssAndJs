import AddItemForm from "./AddItemForm.jsx";
import ButtonGroup from "./ButtonGroup.jsx";
import { useItemsContext } from "../lib/hooks.js";

const Sidebar = () => {
  const {handleAddItem} = useItemsContext();
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
};

export default Sidebar;
