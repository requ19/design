import React from 'react'
import styles from './Services.module.scss'
import tel from '../../../img/main/services/tel.png'
import select from '../../../img/main/services/select.png'
import yellow from '../../../img/main/services/yellow.png'
import arrow from '../../../img/main/services/arrow.png'

const Services = () => {
  return (
    <section className={styles.services}>
        <div className={styles.container}>
            <h2 className={styles.services__title}>Наши <span>услуги</span></h2>
            <div className={styles.services__content}>
                <div className={styles.services__info}>
                    <img className={styles.yellow_bg} src={yellow} alt="" />

                    <h3 className={styles.services__info_title}>Дизайн без границ</h3>
                    <p className={styles.services__info_text}>Создаем визуальные решения для бизнеса! <br />
                    От брендинга до анимации и UI/UX — всё, что нужно для привлечения внимания и выделения вашего бренда.</p>
                    <div className={styles.services__info_selects}>
                          <div className={styles.services__info_select}>
                            <img src={select} alt="" />
                            Иллюстрации и анимация
                          </div>
                          <div className={styles.services__info_select}>
                            <img src={select} alt="" />
                            Создание графики для социальных сетей 
                          </div>
                          <div className={styles.services__info_select}>
                            <img src={select} alt="" />
                            UI/UX дизайн для веб-сайтов и приложений
                          </div>
                    </div>
                </div>
                <div className="col-6">
                    <img src={tel} alt="" />
                </div>
            </div>
            <button className={styles.services__btn}>Узнать все <img src={arrow} alt="" /></button>
        </div>
      </section>
  )
}

export default Services
