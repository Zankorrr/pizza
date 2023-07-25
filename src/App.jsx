import "./scss/app.scss";
import pizzas from "./assets/pizzas.json";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All Pizzas</h2>
          <div className="content__items">
            {pizzas.map((obj, index) => (
              <PizzaBlock
                key={obj.title + index}
                {...obj}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
