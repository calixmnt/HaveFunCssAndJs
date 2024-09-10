import BackgroundHeading from "./BackgroundHeading.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import ItemList from "./ItemList.jsx";
import { useEffect, useState } from "react";
import { initialItems } from "./lib/constants.js";

function App() {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || initialItems;
  }); // () => {} once when the component is loaded.

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
    <>
      <BackgroundHeading />
      <main>
        <Header
          numberOfItemsPacked={items.filter((item) => item.packed).length}
          totalNumberOfItems={items.length}
        />
        <ItemList
          handleToggleItem={handleToggleItem}
          handleDeleteItem={handleDeleteItem}
          items={items}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsInComplete={handleMarkAllAsInComplete}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
