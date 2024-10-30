import Item from "./item.js";
import { useState } from "react";
export default function ItemList({ items, onItemSelect }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} onSelect={onItemSelect} />
      ))}
    </ul>
  );
}
