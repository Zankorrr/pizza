import { useState } from "react";

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ["All", "Meat", "Vegan", "Grill", "Hot", "Closed"];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={category + index}
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
