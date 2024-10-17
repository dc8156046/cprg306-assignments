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
  return (
    <div className="flex flex-col items-center">
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}
