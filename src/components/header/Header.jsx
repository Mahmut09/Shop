import React from "react";
import styles from "./Header.module.css";
import Contacts from "./items/Contacts";
import HeaderMenu from "./items/HeaderMenu";

const Header = ({ handleSetCart, handleSetLogin, handleSetContainer }) => {
    return (
        <div className={styles.header}>
            <div className={styles.logo} onClick={handleSetContainer}>
                <div className={styles.img}></div>
                <h1>Nelekvidi.kz</h1>
            </div>

            <form className={styles.search}>
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