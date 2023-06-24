import React, { useEffect, useState } from "react";
import GoodsCard from "../goods-card/GoodsCard";
import Styles from "./GoodsContainer.module.css";
import ScrollTop from "../scroll-top/ScrollTop";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from './cartAction'

const GoodsContainer = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (card) => {
    addToCart(dispatch, card);
  };

  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false)
  const [page, setPage] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const [isTop, setIsTop] = useState(true);

  const initialPage = 10;
  const URL = useSelector(state => state.URL);

  const fetchData = async (page) => {
    try {
      const response = await fetch(URL + "products/?skip=0&limit=" + page);
      const newData = await response.json();
      setIsLoading(true);
      setIsError(false);
      setGoods(() => newData.products);
      setIsLoading(false);
      setPage(prevPage => prevPage + initialPage);

      let prevDataLength = newData.length - initialPage;
      if (newData.length === prevDataLength) setHasMore(false)

    } catch (error) {
      console.log(error, "Error");
      setIsError(true);
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (isLoading || !hasMore) {
        return;
      }
      fetchData(page);
    }
    if (document.documentElement.scrollTop < 1000) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  useEffect(() => {
    fetchData(initialPage);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={Styles.container}>
      {goods.map((good, id) => (
        <GoodsCard
          key={id}
          id={id}
          thumbnailUrl={good.url}
          articule={good.count}
          title={good.name}
          description={good.description}
          price={good.price}
          addToCart={handleAddToCart}
        />
      ))}
      {isLoading && <div>Loading...</div>}
      {isError && <div>Бэк не вывез простите <button onClick={() => fetchData(initialPage)}>Попробовать еще раз</button></div>}
      {!isTop && <ScrollTop />}
    </div>
  );
};

export default GoodsContainer;
