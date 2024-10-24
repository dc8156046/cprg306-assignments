"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ itemName }) {
  const [meals, setMeals] = useState([]);
  const [ingredient, setIngredient] = useState(itemName);

  const removeEmojis = (text) => {
    return text
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .split(",")[0]
      .trim();
  };

  const fetchMealIdeas = async (ingredient) => {
    const sanitizedIngredient = removeEmojis(ingredient);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${sanitizedIngredient}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error(error);
      setMeals([]);
    }
  };

  const loadMealIdeas = (ingredient) => {
    fetchMealIdeas(ingredient);
  };

  useEffect(() => {
    if (itemName) {
      setIngredient(itemName);
    }
  }, [itemName]);

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient);
    }
  }, [ingredient]);

  return (
    <div>
      <h3 class="text-xl font-bold">Meal Ideas</h3>
      <div>
        <p>
          {itemName.length > 0
            ? meals.length > 0
              ? `Here are some meal ideas using ${removeEmojis(ingredient)}:`
              : `No meal ideas found for ${removeEmojis(ingredient)}`
            : "Select an item to see meal ideas"}
        </p>
        <ul>
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              class="p-2 m-1 bg-slate-300 max-w-sm hover:bg-orange-800 cursor-pointer"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
