import React from "react";
import Menu from "../menu/Menu";
import GoodsContainer from "../goods-container/GoodsContainer";
import Cart from "../cart/Cart";
import Login from '../login/Login'
import About from "../about/About";
import Styles from './Container.module.css'

const Container = ({ containerIsOpen, cartIsOpen,  loginIsOpen, aboutIsOpen }) => {
  return (
    <div className={Styles.container}>
      <Menu />
      {containerIsOpen && <GoodsContainer/>}
      {cartIsOpen && <Cart/>}
      {loginIsOpen && <Login />}
      {aboutIsOpen && <About />}
    </div>
  );
};

export default Container;
