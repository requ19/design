import React from 'react'
import styles from './Contact.module.scss'
import star from '../../../img/ServicesPage/Portfolio/star.png'
import blue from '../../../img/ServicesPage/blue.png'
import yellow from '../../../img/ServicesPage/yellow.png'

const Contact = () => {
  return (
    <section className={styles.contact}>
        <img className={styles.contact__star1} src={star} alt="" />
        <img className={styles.contact__star2} src={star} alt="" />
        <img className={styles.contact__img1} src={blue} alt="" />
        <img className={styles.contact__img2} src={yellow} alt="" />
        <div className={styles.contact__wrapper}>
        <h2>Свяжитесь с нами</h2>
        <p>всего один шаг до старта!</p>
        <form>
            <input
            type="text"
            placeholder="Ваше имя"
            className={styles.input}
            required
            />
            <input
            type="tel"
            placeholder="+996 (777) 777-777"
            className={styles.input}
            required
            />
            <button type="submit" className={styles.submitButton}>
            Обсудить задачу
            </button>
        </form>
        <p className={styles.privacyText}>
            Нажимая на кнопку, вы разрешаете нам обрабатывать ваши <br />
            <u><a href="#">персональные данные </a></u> и соглашаетесь с условиями
            <u><a href="#"> оферты</a>.</u>
        </p>
        </div>
    </section>
  )
}

export default Contact
