import styles from './Home.module.css'
import Nav from '../nav/Nav'
import Header from '../header/Header'
import Container from '../container/Container'
import { useEffect, useState } from 'react'

const Home = () => {

  const initialState = {
    cartIsOpen: false,
    containerIsOpen: false,
    loginIsOpen: false,
    aboutIsOpen: false,
    contactsIsOpen: false,
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({ ...initialState, containerIsOpen: true });
  }, [])

  const handleSetAbout = () => {
    setState({ ...initialState, aboutIsOpen: true });
  }

  const handleSetLogin = () => {
    setState({ ...initialState, loginIsOpen: true });
  }

  const handleSetCart = () => {
    setState({ ...initialState, cartIsOpen: true });
  }

  const handleSetContainer = () => {
    setState({ ...initialState, containerIsOpen: true });
  }

  const handleSetContacts = () => {
    setState({ ...initialState, contactsIsOpen: true });
  }

  return (
    <div className={styles.div}>
      <Nav 
        handleSetContainer={handleSetContainer} 
        handleSetAbout={handleSetAbout}
        handleSetContacts={handleSetContacts}
       />
      <Header 
        handleSetContainer={handleSetContainer}
        handleSetCart={handleSetCart}
        handleSetLogin={handleSetLogin}
      />
      {<Container
        containerIsOpen={state.containerIsOpen}
        cartIsOpen={state.cartIsOpen}
        loginIsOpen={state.loginIsOpen}
        aboutIsOpen={state.aboutIsOpen}
        contactsIsOpen={state.contactsIsOpen}
      />}
    </div>

  )
}

export default Home