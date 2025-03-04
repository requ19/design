import React from 'react'
import styles from './DesignOffers.module.scss'
import humman from '../../../img/ServicesPage/designOff/human.svg'
import cube from '../../../img/ServicesPage/designOff/cube-2.gif'
import red from '../../../img/ServicesPage/designOff/red.png'
import blue from '../../../img/ServicesPage/designOff/blue.png'
import yellow from '../../../img/ServicesPage/designOff/yellow.png'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import classNames from "classnames";

const DesignOffers = () => {
    const designOffersInfo = [
        { "title": "Мечтаешь о сайте, который цепляет?",
          "id": 4,
          "subtitle": "Создание сайтов",
          "price": 450,
          "description": "Создаем UX/UI дизайн, который заставляет пользователей возвращаться снова и снова. Красиво, функционально, незабываемо.",
          "button_text": "Хочу сайт",
          "img": humman,

        },
        {
          "title": "Желаете motion, который не даст забыть?",  
          "id": 5,
          "subtitle": "Motion дизайн",
          "price": 170,
          "description": "Создаем motion-дизайн, который оживает на экране, захватывает внимание и остается в памяти. Движение, которое хочется видеть снова и снова.",
          "button_text": "Оживить идею",
          "img": cube,
        }
      ]
      
  return (
    <section className={styles.designOffers}>
        <img  className={styles.designOffers__img1} src={red} alt="" />
        <img  className={styles.designOffers__img2} src={blue} alt="" />
        <img  className={styles.designOffers__img3} src={yellow} alt="" />
        <Splide 
         options={{
          perPage: 1,
          gap: "10px",
          rewind: true,
          arrows: false,
          pagination: false,
          type: "loop", 
          autoplay: true,
          interval: 4000, 
          pauseOnHover: false, 
          pauseOnFocus: false, 
          speed: 2100, 
          
      }}
        >
                
                {designOffersInfo.map((el, index) => (
  <SplideSlide key={el.id}>
    <div className={styles.designOffers__wrapper}>
      <h2 className={styles.designOffers__title}>{el.title}</h2>
      <div className={styles.designOffers__content}>
        <div className={styles.designOffers__content_info}>
          <div className={styles.designOffers__number}>{el.id}</div>
          <h2 className={styles.designOffers__subtitle}>{el.subtitle}</h2>
          <div className={styles.designOffers__price}>{`$${el.price}`}</div>
          <p>{el.description}</p>
          <button>{el.button_text}</button>
        </div>
        <div
          className={classNames(styles.designOffers__content_img, {
            [styles.firstImage]: index === 0,
            [styles.secondImage]: index === 1,
          })}
        >
          <img src={el.img} alt="человек" />
        </div>
      </div>
    </div>
  </SplideSlide>
))}
        </Splide>
    </section>
  )
}

export default DesignOffers
