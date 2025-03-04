import React from 'react'
import styles from './Programm.module.scss'
import {designTools} from '../../../Data/Data'
import star from '../../../img/Courses/stars/start-big.png'
import blue from '../../../img/Courses/bg-color/programm/blue.png'
import red from '../../../img/Courses/bg-color/programm/red.png'
import orange from '../../../img/Courses/bg-color/programm/orange.png'


const Programm = () => {
  return (
    <section className={styles.programm}>
        <img className={styles.programm__color1} src={blue} alt="" />
        <img className={styles.programm__color2} src={red} alt="" />
        <img className={styles.programm__color3} src={orange} alt="" />
        <div className={styles.container}>
            <h2 className={styles.programm__title}>Какие профессиональные<br/>
            программы ты освоишь
            </h2>
            <div className={styles.programm__cards}>
                <img className={styles.programm__star1} src={star} alt="" />
                <img className={styles.programm__star2} src={star} alt="" />
                {
                    designTools.map((item, idx) => (
                        <div className={styles.programm__card}>
                            <div className={styles.programm__card_title}>
                                <img src={item.icon} alt="" />
                                <h4>{item.name}</h4>
                            </div>
                            <p className={styles.programm__card_desc}>{item.description}</p>
                            <img className={styles.programm__card_laptop} src={item.img} alt={item.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Programm
