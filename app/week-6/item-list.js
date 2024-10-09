import Item from "./item";

export default function ItemList({ itemsJson }) {
  return (
    <ul>
      {itemsJson.map((item) => (
        <Item
          id={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}
