import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants.js";

export const ItemsContext = createContext();

const ItemsContextProvider = ({ children }) => {

  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || initialItems;
  }); // () => {} for : once when the component is initialized.

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  
  const handleAddItem = (newItemItext) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemItext,
      packed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = [...items];
    newItems.map((item) => {
      item.packed = true;
    });
    setItems(newItems);
  };

  const handleMarkAllAsInComplete = () => {
    const newItems = [...items];
    newItems.map((item) => {
      item.packed = false;
    });
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={
        {items,
        handleAddItem,
        handleDeleteItem,
        handleMarkAllAsComplete,
        handleMarkAllAsInComplete,
        handleRemoveAllItems,
        handleResetToInitial,
        handleToggleItem}
      }
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
