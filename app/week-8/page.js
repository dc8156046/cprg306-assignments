"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (name) => {
    setSelectedItemName(name);
  };

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
    <div className="flex">
      <div className="flex-1 max-w-sm m-2">
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
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="flex-1 max-w-sm m-2">
        <MealIdeas itemName={selectedItemName} />
      </div>
    </div>
  );
}
