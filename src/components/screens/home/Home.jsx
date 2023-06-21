import styles from './Home.module.css'
import Nav from '../nav/Nav'
import Header from '../header/Header'
import Container from '../container/Container'
import { useState } from 'react'

const Home = () => {

  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [containerIsOpen, setContainerIsOpen] = useState(true);
  const [loginIsOpen, setLoginIsOpen] = useState(false);

  const handleSetLogin = () => {
    setCartIsOpen(false);
    setContainerIsOpen(false);
    setLoginIsOpen(true);
  }

  const handleSetCart = () => {
    setContainerIsOpen(false);
    setLoginIsOpen(false);
    setCartIsOpen(true);
  }

  const handleSetContainer = () => {
    setCartIsOpen(false);
    setLoginIsOpen(false);
    setContainerIsOpen(true);
  }

  return (
    <div className={styles.div}>
      <Nav handleSetContainer={handleSetContainer} />
      <Header 
        handleSetCart={handleSetCart}
        handleSetLogin={handleSetLogin}
      />
      {<Container
        containerIsOpen={containerIsOpen}
        cartIsOpen={cartIsOpen}
        loginIsOpen={loginIsOpen}
      />}
    </div>

  )
}

export default Home