import React from 'react'
import styles from './Reviews.module.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {reviews, reviews2} from '../../Data/Data'
import blue from '../../img/Reviews/blue.svg'
import orange from '../../img/Reviews/orange.svg'
import red from '../../img/Reviews/red.svg'
import Floating from '../../components/Floating'
import Banner from '../../components/homeComponents/Banner/Banner'
const Reviews = () => {
  return (
    <>
        <Header/>
        <main>
            <div className={styles.reviews}>
              <img className={styles.reviews__img1} src={blue} alt="blue" />
              <img className={styles.reviews__img2} src={orange} alt="orange" />
              <img className={styles.reviews__img3} src={red} alt="red" />
                <div className={styles.container}>
                    <h1 className={styles.reviews__title}>Отзывы</h1>
                    <h2 className={styles.reviews__subtitle}>Отзывы, вдохновляющие нас на новое</h2>
                    <div className={styles.reviews__cards}>
                      {
                          reviews.map(item => (
                              <div className={styles.reviews__card}>
                                  <div className={styles.reviews__avatar}>
                                      <img src={item.avatar} alt="" />
                                      <img src={item.emoji} alt="" />
                                  </div>
                                  <img className={styles.reviews__rating} src={item.rating} alt="" />
                                  <div className={styles.reviews__review}>
                                    {item.review}
                                  </div>
                                  <div>
                                      <div className={styles.reviews__name}>{item.name}</div>
                                      <div className={styles.reviews__project}>{item.project}</div>
                                  </div>
                              </div>
                          ))
                      }
                    </div>
                </div>
                <Floating/>
                <div className={styles.container}>
                    <div className={styles.reviews__cards}>
                      {
                          reviews2.map(item => (
                              <div className={styles.reviews__card}>
                                  <div className={styles.reviews__avatar}>
                                      <img src={item.avatar} alt="" />
                                      <img src={item.emoji} alt="" />
                                  </div>
                                  <img className={styles.reviews__rating} src={item.rating} alt="" />
                                  <div className={styles.reviews__review}>
                                    {item.review}
                                  </div>
                                  <div>
                                      <div className={styles.reviews__name}>{item.name}</div>
                                      <div className={styles.reviews__project}>{item.project}</div>
                                  </div>
                              </div>
                          ))
                      }
                    </div>
                </div>
            </div>
            <Banner/>
        </main>
        <Footer/>
    </>
  )
}

export default Reviews
