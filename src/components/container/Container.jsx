import React from "react";
import Menu from "../menu/Menu";
import GoodsContainer from "../goods-container/GoodsContainer";
import Cart from "../cart/Cart";
import Login from '../login/Login'
import About from "../about/About";
import Contacts from '../contacts/Contacts'
import Styles from './Container.module.css'

const Container = ({ containerIsOpen, cartIsOpen,  loginIsOpen, aboutIsOpen, contactsIsOpen }) => {
  return (
    <div className={Styles.container}>
      <Menu />
      {containerIsOpen && <GoodsContainer/>}
      {cartIsOpen && <Cart/>}
      {loginIsOpen && <Login />}
      {aboutIsOpen && <About />}
      {contactsIsOpen && <Contacts />}
    </div>
  );
};

export default Container;
