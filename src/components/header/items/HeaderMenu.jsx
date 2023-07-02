import React from "react";
import styles from '../Header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const HeaderMenu = ({ handleSetCart, handleSetLogin }) => {
  const username = useSelector(state => state.username);

  return (
    <div className={styles.menu}>
      <div className={styles.item}>
        <FontAwesomeIcon icon={faHeart} />
        Избраное
      </div>
      <div className={styles.item} onClick={handleSetCart} style={{cursor: "pointer"}}>
        <FontAwesomeIcon icon={faCartFlatbed} />
        Корзина
      </div>
      <div className={styles.item} onClick={handleSetLogin} style={{cursor: "pointer"}}>
        <FontAwesomeIcon icon={faUser} />
        {
          username ? username.substring(0, username.indexOf("@")) : "Войти"
        }
      </div>
    </div>
  );
};

export default HeaderMenu;
