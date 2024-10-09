export default function Item({ id, name, quantity, category }) {
  return (
    <li className="p-2 m-4 bg-slate-300 max-w-sm" key={id}>
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="text-sm">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}