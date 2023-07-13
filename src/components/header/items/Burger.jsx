import React from 'react'
import Styles from "../Header.module.css"

const Burger = ({ handleToggleMenu }) => {
    return (
        <div className={Styles.burger} onClick={handleToggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Burger