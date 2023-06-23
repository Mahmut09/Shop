import styles from './Home.module.css'
import Nav from '../nav/Nav'
import Header from '../header/Header'
import Container from '../container/Container'
import { useState } from 'react'

const Home = () => {

  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [containerIsOpen, setContainerIsOpen] = useState(true);
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [aboutIsOpen, setAboutIsOpen] = useState(false);


  const handleSetAbout = () => {
    setCartIsOpen(false);
    setContainerIsOpen(false);
    setLoginIsOpen(false);
    setAboutIsOpen(true);
  }

  const handleSetLogin = () => {
    setCartIsOpen(false);
    setContainerIsOpen(false);
    setLoginIsOpen(true);
    setAboutIsOpen(false);
  }

  const handleSetCart = () => {
    setContainerIsOpen(false);
    setLoginIsOpen(false);
    setCartIsOpen(true);
    setAboutIsOpen(false);
  }

  const handleSetContainer = () => {
    setCartIsOpen(false);
    setLoginIsOpen(false);
    setContainerIsOpen(true);
    setAboutIsOpen(false);
  }

  return (
    <div className={styles.div}>
      <Nav handleSetContainer={handleSetContainer} handleSetAbout={handleSetAbout} />
      <Header 
        handleSetCart={handleSetCart}
        handleSetLogin={handleSetLogin}
      />
      {<Container
        containerIsOpen={containerIsOpen}
        cartIsOpen={cartIsOpen}
        loginIsOpen={loginIsOpen}
        aboutIsOpen={aboutIsOpen}
      />}
    </div>

  )
}

export default Home