export default function Item({ key, item }) {
  const { name, quantity, category } = item;
  return (
    <li className="p-2 m-4 bg-slate-300 max-w-sm">
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="text-sm">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}
