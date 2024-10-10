"use client";
import { useState } from "react";
import ItemList from "./item-list";
import itemsJson from "./items.json";
import GroupedItemList from "./group-item-list";

export default function Page() {
  const [items, setItems] = useState(itemsJson);
  const [activeButton, setActiveButton] = useState("");
  const [groupedItems, setGroupedItems] = useState(null);

  const handleClick = (sortAttr) => {
    const sortedItems = [...items].sort((a, b) => {
      return a[sortAttr].localeCompare(b[sortAttr]);
    });

    setItems(sortedItems);
    setActiveButton(sortAttr);
    setGroupedItems(null);
  };

  const getButtonClass = (sortAttr) => {
    return activeButton === sortAttr
      ? "bg-orange-500 p-1 m-2 w-28" // Active style
      : "bg-orange-700 p-1 m-2 w-28"; // Inactive style
  };

  const handleGroupClick = () => {
    const groupedItems = items.reduce((acc, item) => {
      // If the category doesn't exist in the accumulator, initialize it with an empty array
      if (!acc[item.category]) {
        acc[item.category] = [];
      }

      acc[item.category].push(item);

      return acc;
    }, {});

    setGroupedItems(groupedItems);
    setActiveButton("group");
  };
  return (
    <main className="bg-slate-100">
      <div className="m-4">
        <h2 className="text-3xl font-bold m-2">Shopping List</h2>
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
          <button
            className={getButtonClass("group")}
            onClick={() => handleGroupClick()}
          >
            Grouped Category
          </button>
        </div>
        {groupedItems ? (
          <GroupedItemList groupedItems={groupedItems} />
        ) : (
          <ItemList itemsJson={items} />
        )}
      </div>
    </main>
  );
}
