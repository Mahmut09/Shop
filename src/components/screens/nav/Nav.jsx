import React from 'react'
import styles from './Nav.module.css'

const Nav = ({ handleSetContainer }) => {

    return (
        <div className={styles.menu}>
            <nav className={styles.nav}>
                <div className={styles.item} onClick={handleSetContainer}>
                    Главная
                </div>
                <div className={styles.item}>
                    О компании
                </div>
                <div className={styles.item}>
                    Каталог оборудования
                </div>
                <div className={styles.item}>
                    Наши контакты
                </div>
            </nav>
        </div>
    )
}

export default Nav