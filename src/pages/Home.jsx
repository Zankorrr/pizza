import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      fetch('https://64bfd7fd0d8e251fd1118c90.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => {
        setItems(data)
        setIsLoading(false)
      })
      window.scrollTo(0, 0)
    }, [])
    return (
    <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All Pizzas</h2>
          <div className="content__items">
            { isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) : items.map((obj, index) => (
              <PizzaBlock
                key={obj.title + index}
                {...obj}
              />
            ))}
          </div>
        </div>
      </div>
    )
}

export default Home
