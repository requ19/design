import React from 'react'
import styles from './Bid.module.scss'
const Bid = () => {
  return (
    <div className={styles.container}>
      <h2>Свяжитесь с нами</h2>
      <p className={styles.text}>всего один шаг до старта!</p>
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
        <u><a href="#">персональные данные</a></u> и соглашаетесь с условиями
        <u><a href="#">оферты</a>.</u>
      </p>
    </div>
  )
}

export default Bid
