import styles from './Home.module.css'
import Nav from '../nav/Nav'
import Header from '../header/Header'
import Menu from '../menu/Menu'

const Home = () => {
  return (
    <div className={styles.div}>
      <Nav />
      <Header />
      <Menu />
    </div>

  )
}

export default Home