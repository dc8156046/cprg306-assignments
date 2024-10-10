export default function GroupedItemList({ groupedItems }) {
  return (
    <div>
      {Object.keys(groupedItems).map((category) => (
        <div key={category} className="my-4">
          <h3 className="capitalize text-xl">{category}</h3>
          <ul>
            {groupedItems[category].map((item) => (
              <li key={item.id} className="p-2 m-4 bg-slate-300 max-w-sm">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <div className="text-sm">
                  Buy {item.quantity} in {item.category}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
