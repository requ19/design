import React, { useState } from 'react';
import styles from './Main.module.scss';
import logo from '../../../img/logo.svg';
import head from '../../../img/main/welcome/head.png'
import reco from '../../../img/main/welcome/recomen.svg'
import Services from '../../homeComponents/Services/Services';
import Banner from '../../homeComponents/Banner/Banner';
import Creation from '../../homeComponents/Сreation';
import Bid from '../../homeComponents/Bid'
import Floating from '../../Floating';

const Main = () => {
  const [form, setForm] = useState(false)

  const activeForm = () => {
  setForm((prev) => !prev)
}
  return (
    <main className={styles.main}>
      <section className={styles.welcome}>
        <div className={styles.container}>
          <div className={styles.welcome__wraper}>
            <div className={styles.welcome__content}>
                <a className={styles.welcome__logo} href="#">
                    <img src={logo} alt="Логотип" />
                </a>
                <h1 className={styles.welcome__title}>Студия графического дизайна</h1>
                <div className={styles.welcome__contact}>
                    <img src={reco} alt="" />
                    <img src={head} alt="" />
                    <div className={styles.welcome__form}>
                        <div>Давайте вместе<br /> создадим что-то по-<br />настоящему уникальное.<br /> Мы готовы к любым<br /> вызовам, а вы?</div>
                        <button onClick={() => activeForm()} className={styles.welcome__btn}>Связаться</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      <Floating/>
      {form && <Bid/>}
      <Services/>
      <Banner/>
      <Creation/>
    </main>
  );
};

export default Main;
