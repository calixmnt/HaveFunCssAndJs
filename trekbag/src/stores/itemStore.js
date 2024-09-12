import { create } from "zustand";
import { initialItems } from "../lib/constants.js";

create((set) => ({
  items: initialItems,
  addItem: (newItemItext) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemItext,
      packed: false,
    };
    set((state) => ({items: [...state.items, newItem]}));
  },
  removeAllItems: () => {
    set(() => ({ items: [] }));
  },
  resetToInitial: () => {
    set(() => ({ items: initialItems }));
  },
  markAllAsComplete: (state) => {
    const newItems = [...state.items];
    newItems.map((item) => {
      item.packed = true;
    });
    set(newItems);
    return { items: newItems };
  },
  markAllAsInComplete: (state) => {
    const newItems = [...state.items];
    newItems.map((item) => {
      item.packed = false;
    });
    set(newItems);
    return { items: newItems };
  },
}));
