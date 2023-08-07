import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { setFilters } from "../redux/filterSlice";
import { SearchContext } from "../App";

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSearch = useRef(false)
  const isMounted = useRef(false)

  const { categoryId, sortTypeId } = useSelector((state) => state.filter);
  const { searchValue } = useContext(SearchContext)
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const sortNames = ["rating", "price", "title"]
  const sortProperty = sortNames[sortTypeId]

  useEffect(() => {
    if(isMounted.current) {
    const queryString = qs.stringify({
      category: categoryId,
      sortBy: sortProperty,
    })
    navigate(`?${queryString}`)
  }
  isMounted.current = true
  }, [categoryId, navigate, sortProperty])

  useEffect(() => {
    if(window.location.search) {
      const params = qs.parse(window.location.search.substring(1))
      const sortTypeId = sortNames.indexOf(params.sortBy)

      dispatch(setFilters({
        ...params,
        sortTypeId
      }))
      isSearch.current = true
    }
  }, [])
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if(!isSearch.current) {
      const category = categoryId > 0 ? `category=${categoryId}` : ''
    const sort = sortTypeId > 0 ? `&sortBy=${sortProperty}&order=asc` : ''
    const search = searchValue ? `&search=${searchValue}` : ''
    setIsLoading(true);
    axios
      .get(
        `https://64bfd7fd0d8e251fd1118c90.mockapi.io/items?${category}${sort}${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    }
    isSearch.current = false
  }, [categoryId, searchValue, sortProperty, sortTypeId])

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
