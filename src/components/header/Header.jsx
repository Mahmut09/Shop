import React, { useEffect, useState } from "react";
import Styles from "./Header.module.css";
import Contacts from "./items/Contacts";
import HeaderMenu from "./items/HeaderMenu";
import Burger from "./items/Burger"
import { useDispatch, useSelector } from "react-redux";

const Header = ({ handleSetCart, handleSetLogin, handleSetContainer }) => {

    const dispatch = useDispatch();
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const URL = useSelector(state => state.URL);

    const handleToggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
        dispatch({ type: "SET_MOBILE_IS_OPEN", payload: menuIsOpen });
    };

    useEffect(() => {
        if (window.innerWidth <= 795) handleToggleMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [searchItems, setSearchItems] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");

    const searchData = async (searchKeyword) => {
        try {
            const res = await fetch(`${URL}products/search?keyword=${searchKeyword}`, {
                headers: {
                    accept: "application/json",
                },
            });

            const response = await res.json();
            return response.products;
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();

        if (searchKeyword.trim() !== "") {
            const searchResult = await searchData(searchKeyword);
            setSearchItems(searchResult);
        }
    };

    const handleChangeInput = (e) => {
        const value = e.target.value;
        setSearchKeyword(value);
        if (value.trim().length === 0) setSearchItems([]);
    }

    useEffect(() => {
        dispatch({ type: "SET_SEARCH_ITEMS", payload: searchItems });
    }, [dispatch, searchItems]);

    const categoryName = useSelector(state => state.categoryName);


    return (
        <div className={Styles.header}>
            <div className={Styles.logo}>
                <Burger className={Styles.burger} handleToggleMenu={handleToggleMenu} />
                <div className={Styles.img} onClick={handleSetContainer}></div>
                <h1>
                    <span onClick={handleSetContainer}>Shop</span>
                    {categoryName ? ` / ${categoryName}` : ""}
                </h1>

            </div>

            <form className={Styles.search} onSubmit={handleSearch}>
                <input type='text' placeholder='Поиск' onChange={handleChangeInput} />
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
