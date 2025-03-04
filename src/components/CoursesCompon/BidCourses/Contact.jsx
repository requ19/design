import React from 'react'
import styles from './Contact.module.scss'
import blue from '../../../img/ServicesPage/blue.png'
import yellow from '../../../img/ServicesPage/yellow.png'

const Contact = () => {
  return (
    <section className={styles.contact}>
        <img className={styles.contact__img1} src={blue} alt="" />
        <img className={styles.contact__img2} src={yellow} alt="" />
        <div className={styles.container}>
          <div className={styles.contact__wrapper}>
          <h2>Прокачай свой навык</h2>
          <p>Ты готов стать лучше?</p>
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
              Получить консультацию
              </button>
          </form>
          <p className={styles.privacyText}>
              Нажимая на кнопку, вы разрешаете нам обрабатывать ваши <br />
              <u><a href="#">персональные данные </a></u> и соглашаетесь с условиями
              <u><a href="#"> оферты</a>.</u>
          </p>
          </div>
        </div>
    </section>
  )
}

export default Contact
