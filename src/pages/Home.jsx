import { useContext, useEffect, useState } from "react";
import axios from "axios"
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { SearchContext } from "../App";
import { useSelector } from "react-redux"

const Home = () => {
  const { categoryId, sortTypeId } = useSelector((state) => state.filter)

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { searchValue } = useContext(SearchContext)

  useEffect(() => {
    const sortNames = ["rating", "price", "title"];
    setIsLoading(true);
    axios.get(`https://64bfd7fd0d8e251fd1118c90.mockapi.io/items?${
      categoryId ? `category=${categoryId}` : ""
    }&sortBy=${sortNames[sortTypeId]}&order=asc`)
      .then((res => {
        setItems(res.data);
        setIsLoading(false);
      }))
    window.scrollTo(0, 0);
  }, [categoryId, sortTypeId]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">All Pizzas</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items
                .filter((obj) => {
                  return obj.title
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                })
                .map((obj, index) => (
                  <PizzaBlock key={obj.title + index} {...obj} />
                ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
