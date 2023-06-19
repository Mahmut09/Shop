import React from "react";
import Menu from "../menu/Menu";
import GoodsContainer from "../goods-container/GoodsContainer";
import Cart from "../cart/Cart";
import Styles from './Container.module.css'

const Container = ({ containerIsOpen, cartIsOpen}) => {
  return (
    <div className={Styles.container}>
      <Menu />
      {containerIsOpen && <GoodsContainer/>}
      {cartIsOpen && <Cart/>}
    </div>
  );
};

export default Container;
