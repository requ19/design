import React from 'react'
import styles from './Card.module.scss'
import { steps } from './../../../Data/Data';
const Card = () => {
  return (
    <section className={styles.card}>
        <div className={styles.container}>
            <div className={styles.card__title_wrapper}>
                <h3>как проходит</h3>
                <h3>обучение</h3>
            </div>
            <div className={styles.card__wrapper}>
                <div className={styles.card__platform}>
                    <div className={styles.card__number}>{steps[0].id}</div>
                    <img src={steps[0].icon} alt="" />
                    <p>{steps[0].description}</p>
                    <h4>{steps[0].title}</h4>
                </div>
                <div className={styles.card__second_wrapper}>
                    <div className={styles.card__chat}>
                        <div className={styles.card__number}>{steps[1].id}</div>
                        <p>{steps[1].description}</p>
                        <h4>{steps[1].title}</h4>
                        <img src={steps[1].icon} alt="" />
                    </div>
                    <div className={styles.card__task}>
                        <div className={styles.card__number}>{steps[2].id}</div>
                        <img src={steps[2].icon} alt="" />
                        <p>{steps[2].description}</p>
                        <h4>{steps[2].title}</h4>
                    </div>
                </div>
                <div className={styles.card__third_wrapper}>
                    <div className={styles.card__checking}>
                        <div className={styles.card__number}>{steps[3].id}</div>
                        <img src={steps[3].icon} alt="" />
                        <p>{steps[3].description}</p>
                        <h4>{steps[3].title}</h4>
                    </div>
                    <div className={styles.card__portfolio}>
                        <div className={styles.card__number}>{steps[4].id}</div>
                        <img src={steps[4].icon} alt="" />
                        <p>{steps[4].description}</p>
                        <h4>{steps[4].title}</h4>
                    </div>
                </div>
                <div className={styles.card__certificate}>
                    <div className={styles.card__number}>{steps[5].id}</div>
                    <p>{steps[5].description}</p>
                    <img src={steps[5].icon} alt="" />  
                    <h4>{steps[5].title}</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Card
