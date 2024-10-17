"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const [activeButton, setActiveButton] = useState("");

  const handleClick = (sortAttr) => {
    const sortedItems = [...items].sort((a, b) => {
      return a[sortAttr].localeCompare(b[sortAttr]);
    });

    setItems(sortedItems);
    setActiveButton(sortAttr);
  };

  const getButtonClass = (sortAttr) => {
    return activeButton === sortAttr
      ? "bg-orange-500 p-1 m-2 w-28" // Active style
      : "bg-orange-700 p-1 m-2 w-28"; // Inactive style
  };

  return (
    <div className="flex flex-col items-center">
      <NewItem onAddItem={handleAddItem} />
      <div>
        <label for="sort">Sort by: </label>
        <button
          className={getButtonClass("name")}
          onClick={() => handleClick("name")}
        >
          Name
        </button>
        <button
          className={getButtonClass("category")}
          onClick={() => handleClick("category")}
        >
          Category
        </button>
      </div>
      <ItemList items={items} />
    </div>
  );
}
