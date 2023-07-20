import React from "react";
import Menu from "../menu/Menu";
import GoodsContainer from "../goods-container/GoodsContainer";
import Cart from "../cart/Cart";
import Login from "../login/Login";
import About from "../about/About";
import Contacts from "../contacts/Contacts";
import Styles from "./Container.module.css";
import { useSelector } from "react-redux";
import Payment from "../payment/Payment";
import ProductDetail from "../product-detail/ProductDetail";
import { useNavigate } from "react-router-dom";

const Container = ({ containerIsOpen, cartIsOpen, loginIsOpen, aboutIsOpen, contactsIsOpen, paymentIsOpen, selectedProductIsOpen, handleSetCart, handleSetLogin, handleSetContainer, handleSetPayment, handleSetProduct, productCard }) => {

	const menuIsOpen = useSelector(state => state.categoryIsOpen);
	const navigate = useNavigate();

	// const handleProductClick = (productId, card) => {
	// 	// You can use the productId to navigate to the product details page
	// 	// For example, use history.push to navigate to the product details page
		
	// 	setSelectedProduct(card);
	// 	console.log(selectedProduct);
	// 	// navigate(`/product/${productId}`);
	// };

	return (
		<div className={Styles.container}>
			{
				menuIsOpen && <Menu
					handleSetCart={handleSetCart}
					handleSetLogin={handleSetLogin}
					handleSetContainer={handleSetContainer} />
			}
			{paymentIsOpen && <Payment />}
			{containerIsOpen && <GoodsContainer handleProductClick={handleSetProduct} />}
			{cartIsOpen && <Cart handleSetPayment={handleSetPayment} />}
			{loginIsOpen && <Login />}
			{aboutIsOpen && <About />}
			{contactsIsOpen && <Contacts />}
			{selectedProductIsOpen && (
				<ProductDetail product={productCard} />
			)}
		</div>
	);
};

export default Container;
