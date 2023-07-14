import React from 'react'
import styles from './Nav.module.css'

const Nav = ({ handleSetContainer, handleSetAbout, handleSetContacts }) => {

    return (
        <div className={styles.menu}>
            <nav className={styles.nav}>
                <div className={styles.item} onClick={handleSetContainer}>
                    Каталог товаров
                </div>
                <div className={styles.item} onClick={handleSetAbout}>
                    О компании
                </div>
                <div className={styles.item} onClick={handleSetContacts}>
                    Наши контакты
                </div>
            </nav>
        </div>
    )
}

export default Nav