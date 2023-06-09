import React from 'react'
import Styles from './ScrollTop.module.css'

const ScrollTop = () => {

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  }

  return <button className={Styles.btn} onClick={scrollToTop}>Наверх</button>
}

export default ScrollTop