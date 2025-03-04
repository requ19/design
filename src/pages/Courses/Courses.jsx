import React from 'react'
import styles from './Courses.module.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import starSmall from '../../img/Courses/stars/start-small.png'
import blue from '../../img/Courses/bg-color/blue.png'
import red from '../../img/Courses/bg-color/red.png'
import group from '../../img/Courses/icon/Group 60.png'
import project from '../../img/Courses/icon/Group 61.png'
import work from '../../img/Courses/icon/Group 62.png'
import Card from '../../components/CoursesCompon/CardCourses'
import Floating from '../../components/Floating'
import Programm from '../../components/CoursesCompon/Programm'
import Bid from '../../components/CoursesCompon/BidCourses'

const Courses = () => {
  return (
    <>
      <Header/>
      <main>
        <div className={styles.courses}>
          <img className={styles.courses__img1} src={blue} alt="" />
          <img className={styles.courses__img2} src={red} alt="" />
            <div className={styles.container}>
                <div className={styles.courses__title_wrapper}>
                    <img className={styles.courses__title_star1} src={starSmall} alt="" />
                    <h1 className={styles.courses__title}>Курс графический дизайнер</h1>
                    <img className={styles.courses__title_star2} src={starSmall} alt="" />
                </div>
                <div className={styles.courses__desc}>
                Поможем освоить необходимы навыки с нуля за 9 или 12 месяцев в зависимости от прогрммы,<br/>
                которую вы выберете
                </div>
                <div className={styles.courses__btn_wrapper}>
                  <button className={styles.courses__btn}>Хочу учиться</button>
                </div>
                <div className={styles.courses__cards}>
                    <div className={styles.courses__card}>
                        <img src={group} alt="" />
                        <div>Вебинары в мини -  группах</div>
                        <p>На курсе с вами будут
                        работать преподователи</p>
                    </div>
                    <div className={styles.courses__card}>
                        <img src={project} alt="" />
                        <div>13+ проектов</div>
                        <p>Добавите в портфолио
                        в разноплановые работы</p>
                    </div>
                    <div className={styles.courses__card}>
                        <img src={work} alt="" />
                        <div>Трудоустройство</div>
                        <p>Помощь в 
                          трудоустройстве от
                          партнера</p>
                    </div>
                </div>
            </div>
        </div>
        <Card/>
        <Floating/>
        <Programm/>
        <Bid/>
      </main>
      <Footer/>

    </>
  )
}

export default Courses
