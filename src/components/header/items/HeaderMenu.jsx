import React, { useEffect, useState } from "react";
import Styles from '../Header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const HeaderMenu = ({ handleSetCart, handleSetLogin }) => {
    const username = useSelector(state => state.username);

    return (
        <div className={Styles.menu}>
            <div className={Styles.item}>
                <FontAwesomeIcon icon={faHeart} />
                Избраное
            </div>
            <div className={Styles.item} onClick={handleSetCart}>
                {/* <span className={Styles.count}>0</span> */}
                <FontAwesomeIcon icon={faCartFlatbed} />
                Корзина
            </div>
            <div className={Styles.item} onClick={handleSetLogin}>
                <FontAwesomeIcon icon={faUser} />
                {
                    username ? username.substring(0, username.indexOf("@")) : "Войти"
                }
            </div>
        </div>
    );
};

export default HeaderMenu;
