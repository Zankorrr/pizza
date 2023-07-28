import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/filterSlice";

export default function Categories() {
  const categories = ["All", "Meat", "Vegan", "Grill", "Hot", "Closed"]

  const dispatch = useDispatch()
  const categoryId = useSelector((state) => state.filter.categoryId)

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={category + index}
            onClick={() => dispatch(setCategoryId(index))}
            className={categoryId === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
