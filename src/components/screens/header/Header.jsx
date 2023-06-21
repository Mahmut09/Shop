import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faCartFlatbed } from "@fortawesome/free-solid-svg-icons";

const Header = ({ handleSetCart, handleSetLogin }) => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.img}></div>
                <h1>Nelekvidi.kz</h1>
            </div>

            <form className={styles.search}>
                <input type='text' placeholder='Поиск' />
            </form>

            <div className={styles.contacts}>
                <a href='tel:+77777777'>
                    <FontAwesomeIcon icon={faPhone} />
                    +7( 777 ) 777-77-77
                </a>
            </div>

            <div className={styles.menu}>
                <div className={styles.item}>
                    <FontAwesomeIcon icon={faHeart} />
                    Избраное
                </div>
                <div className={styles.item} onClick={handleSetCart}>
                    <FontAwesomeIcon icon={faCartFlatbed}/>
                    Корзина
                </div>
                <div className={styles.item} onClick={handleSetLogin}>
                    <FontAwesomeIcon icon={faUser}/>
                    Войти
                </div>
            </div>
        </div>
    );
};

export default Header;