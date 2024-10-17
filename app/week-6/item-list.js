import Item from "./item";

export default function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}
