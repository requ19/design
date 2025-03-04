import React from 'react'
import styles from './Banner.module.scss'
import blue from '../../../img/main/Baner/Ellipse 10 (1).png'
import red from '../../../img/main/Baner/Ellipse 11 (1).png'

const Banner = () => {
  return (
    <section className={styles.banner}>
        <img className={styles.banner__img1} src={blue} alt="" />
        <img className={styles.banner__img2} src={red} alt="" />
        <div className={styles.banner__wrapper}>
            <div className={styles.banner__content}>
              <div className={styles.banner__item}>
                  <div>550+</div>
                  <p>Клиентов</p>
              </div>
              <div className={styles.banner__item}>
                  <div>45+</div>
                  <p>Партнёров</p>
              </div>
              <div className={styles.banner__item}>
                  <div>95%</div>
                  <p>Рекомендаций</p>
              </div>
              <div className={styles.banner__item}>
                  <div>5K+</div>
                  <p>Выпускнинов</p>
              </div>
              <div className={styles.banner__item}>
                  <div>5+</div>
                  <p>Года опыта</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
