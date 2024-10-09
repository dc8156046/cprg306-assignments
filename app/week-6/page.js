"use client";
import { useState } from "react";
import ItemList from "./item-list";
import itemsJson from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsJson);

  const handleClick = (sortAttr) => {
    const sortedItems = [...items].sort((a, b) => {
      return a[sortAttr].localeCompare(b[sortAttr]);
    });

    setItems(sortedItems);
  };

  const handleGroupClick = () => {
    console.log("Grouped Category");
  };
  return (
    <main className="bg-slate-100">
      <div className="m-4">
        <h2 className="text-3xl font-bold m-2">Shopping List</h2>
        <div>
          <label for="sort">Sort by: </label>
          <button
            className="bg-orange-500 p-1 m-2 w-28"
            onClick={() => handleClick("name")}
          >
            Name
          </button>
          <button
            className="bg-orange-700 p-1 m-2 w-28"
            onClick={() => handleClick("category")}
          >
            Category
          </button>
          <button
            className="bg-orange-700 p-1 m-2 w-28"
            onClick={() => handleGroupClick()}
          >
            Grouped Category
          </button>
        </div>
        <ItemList itemsJson={items} />
      </div>
    </main>
  );
}
