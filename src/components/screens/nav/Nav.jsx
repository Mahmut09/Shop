import React from 'react'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.menu}>
        <nav className={styles.nav}>
            <div className={styles.item}>
                <a href="#">Главная</a>
            </div>
            <div className={styles.item}>
                <a href="#">О компании</a>
            </div>
            <div className={styles.item}>
                <a href="#">Каталог оборудования</a>
            </div>
            <div className={styles.item}>
                <a href="#">Наши контакты</a>
            </div>
        </nav>
    </div>
  )
}

export default Nav