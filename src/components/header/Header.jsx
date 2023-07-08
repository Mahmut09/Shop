import React, { useEffect, useState } from "react";
import Styles from "./Header.module.css";
import Contacts from "./items/Contacts";
import HeaderMenu from "./items/HeaderMenu";
import Burger from "./items/Burger"
import { useDispatch } from "react-redux";

const Header = ({ handleSetCart, handleSetLogin, handleSetContainer }) => {

	const dispatch = useDispatch();
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	useEffect(() => {
		if (window.innerWidth <= 795) handleToggleMenu();
	}, []);

	const handleToggleMenu = () => {
		setMenuIsOpen(!menuIsOpen);
		dispatch({ type: "SET_MOBILE_IS_OPEN", payload: menuIsOpen });
	}

	return (
		<div className={Styles.header}>
			<div className={Styles.logo}>
				<Burger className={Styles.burger} handleToggleMenu={handleToggleMenu}/>
				<div className={Styles.img} onClick={handleSetContainer}></div>
				<h1 onClick={handleSetContainer}>Nelekvidi.kz</h1>
			</div>

			<form className={Styles.search}>
				<input type='text' placeholder='Поиск' />
			</form>

			<Contacts />

			<HeaderMenu
				handleSetCart={handleSetCart}
				handleSetLogin={handleSetLogin}
			/>
		</div>
	);
};

export default Header;
