import React from "react";
import Menu from "../menu/Menu";
import GoodsContainer from "../goods-container/GoodsContainer";
import Styles from './Container.module.css'

const Container = () => {
  return (
    <div className={Styles.container}>
        <Menu />
        <GoodsContainer />
    </div>
  );
};

export default Container;
