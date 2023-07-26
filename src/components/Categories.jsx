export default function Categories({value, toggle}) {
  const categories = ["All", "Meat", "Vegan", "Grill", "Hot", "Closed"];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={category + index}
            onClick={() => toggle(index)}
            className={value === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
