import ReactSelect from "react-select";
import EmptyView from "./EmptyView.jsx";
import { useMemo, useState } from "react";
import { useItemsContext } from "../lib/hooks.js";

const ItemList = () => {
  const sortingOptions = [
    { value: "default", label: "Sort by default" },
    { value: "packed", label: "Sort by packed" },
    { value: "unpacked", label: "Sort by unpacked" },
  ];

  const {items, handleDeleteItem, handleToggleItem} = useItemsContext();
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }
        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [items, sortBy]
  );

  return (
    <ul>
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className="sorting">
          <ReactSelect
            onChange={(option) => {
              setSortBy(option.value);
            }}
            // value={sortBy}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      )}
      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
        );
      })}
    </ul>
  );
};

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => {
            onToggleItem(item.id);
          }}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default ItemList;
