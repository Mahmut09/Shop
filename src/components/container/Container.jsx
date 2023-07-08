import React from "react";
import Menu from "../menu/Menu";
import GoodsContainer from "../goods-container/GoodsContainer";
import Cart from "../cart/Cart";
import Login from "../login/Login";
import About from "../about/About";
import Contacts from "../contacts/Contacts";
import Styles from "./Container.module.css";
import { useSelector } from "react-redux";

const Container = ({ containerIsOpen, cartIsOpen, loginIsOpen, aboutIsOpen, contactsIsOpen }) => {
	
	const menuIsOpen = useSelector(state => state.categoryIsOpen);

	return (
		<div className={Styles.container}>
			{menuIsOpen && <Menu />}
			{containerIsOpen && <GoodsContainer />}
			{cartIsOpen && <Cart />}
			{loginIsOpen && <Login />}
			{aboutIsOpen && <About />}
			{contactsIsOpen && <Contacts />}
		</div>
	);
};

export default Container;
