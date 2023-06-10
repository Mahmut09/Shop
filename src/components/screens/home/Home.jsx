import styles from './Home.module.css'
import Nav from '../nav/Nav'
import Header from '../header/Header'
import Container from '../container/Container'

const Home = () => {
  return (
    <div className={styles.div}>
      <Nav />
      <Header />
      <Container />
    </div>

  )
}

export default Home