import React from 'react'
import styles from './Home.module.scss'
import blue from '../../img/home/bg/blue.png'
import yellow from '../../img/home/bg/yellow.png'
import Header from "../../components/Header/Header";
import Main from "../../components/homeComponents/Main";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <img className={styles.bg__img1} src={blue} alt="" />
      <img className={styles.bg__img2} src={yellow} alt="" />
      <Header />
      <Main/>
      <Footer/>
    </>
  )
}

export default Home
