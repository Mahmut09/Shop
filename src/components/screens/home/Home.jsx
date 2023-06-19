import styles from './Home.module.css'
import Nav from '../nav/Nav'
import Header from '../header/Header'
import Container from '../container/Container'
import { useState } from 'react'

const Home = () => {

  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [containerIsOpen, setContainerIsOpen] = useState(true);

  const handleSetCart = () => {
    setCartIsOpen(true);
    setContainerIsOpen(false);
  }

  const handleSetContainer = () => {
    setCartIsOpen(false);
    setContainerIsOpen(true);
  }

  return (
    <div className={styles.div}>
      <Nav handleSetContainer={handleSetContainer} />
      <Header handleSetCart={handleSetCart} />
      {<Container
        containerIsOpen={containerIsOpen}
        cartIsOpen={cartIsOpen}
      />}
    </div>

  )
}

export default Home