import React from 'react'
import styles from './Services.module.scss'
import Header from '../../components/Header/Header'
import logo from '../../img/logo.svg'
import blue from '../../img/ServicesPage/blue.png'
import yellow from '../../img/ServicesPage/yellow.png'
import red from '../../img/ServicesPage/red.png'
import Footer from '../../components/Footer/Footer'
import Price from '../../components/ServicesComponents/Price/Price'
import DesignOffers from '../../components/ServicesComponents/DesignOffers'
import Portfolio from '../../components/ServicesComponents/Portfolio/Portfolio'
import Contact from '../../components/ServicesComponents/ContactForm'

const Services = () => {
  return (
    <div className={styles.services}>
    <img className={styles.services__img1} src={blue} alt="" />
    <img className={styles.services__img2}  src={yellow} alt="" />
    <img className={styles.services__img3}  src={red} alt="" />
     <Header/>
      <main>
          <div className={styles.container}>
              <div className={styles.services__logo}>
                  <img src={logo} alt="" />
                  <p>Всё, что нужно для визуального вау!</p>
              </div>
              <Price/>
              <DesignOffers/>
              <Portfolio/>
              <Contact/>
          </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Services
