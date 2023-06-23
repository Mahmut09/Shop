import React, { useEffect, useState } from "react";
import GoodsCard from "../goods-card/GoodsCard";
import Styles from "./GoodsContainer.module.css";
import ScrollTop from "../scroll-top/ScrollTop";

import { useDispatch } from "react-redux";

const GoodsContainer = () => {
  const dispatch = useDispatch();

  const addToCart = card => {
    dispatch({ type: "ADD_GOODS", payload: card });
  };

  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const [isTop, setIsTop] = useState(true);

  const URL = "http://127.0.0.1:5000/products/?skip=0&limit=";
  // http://127.0.0.1:5000/products/?skip=0&limit=

  const fetchData = async page => {
    try {
      setIsLoading(true);
      const response = await fetch(URL + page);
      const newData = await response.json();
      console.log(newData.products);
      setGoods(() => [...newData.products]);
      setIsLoading(false);
      setPage(prevPage => prevPage + 10);

      // if(page > 1) {
      // }

      if (newData.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error, "Error");
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
    fetchData(10);
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
          addToCart={addToCart}
        />
      ))}
      {isLoading && <div>Loading...</div>}
      {!isTop && <ScrollTop />}
    </div>
  );
};

export default GoodsContainer;
