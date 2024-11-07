"use client";
import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (name) => {
    setSelectedItemName(name);
  };

  const handleAddItem = (item) => {
    const id = addItem(user.uid, item);
    item.id = id;
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

  const { user } = useUserAuth();

  const loadItems = async () => {
    const items = await getItems(user.uid);
    setItems(items);
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  if (!user) {
    return (
      <div>
        <h1>Access Denied</h1>
        <p>This page is only visible to authenticated users.</p>
      </div>
    );
  } else {
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
}
