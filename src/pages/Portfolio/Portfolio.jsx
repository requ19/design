import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './Portfolio.module.scss';
import { banners, presentation, uxUi, motion } from '../../Data/Data';
import orange from '../../img/Portfolio/orenge.svg';
import blue from '../../img/Portfolio/blue.svg';
import star from '../../img/ServicesPage/Portfolio/star.png';
import Floating from '../../components/Floating';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('banners');

  // Выбираем массив данных по категории
  const getCategoryData = () => {
    switch (activeCategory) {
      case 'presentations':
        return presentation;
      case 'uxui':
        return uxUi;
      case 'motion':
        return motion;
      default:
        return banners;
    }
  };

  const filteredData = getCategoryData();
  const firstThree = filteredData.slice(0, 3);
  const remaining = filteredData.slice(3);

  return (
    <>
      <Header />
      <main>
        <div className={styles.portfolio}>
          <div className={styles.container}>
            <h1 className={styles.portfolio__title}>Наши работы</h1>

            {/* Кнопки-переключатели */}
            <div className={styles.portfolio__wrapper_btns}>
              {[
                { id: 'banners', label: 'Баннеры' },
                { id: 'presentations', label: 'Презентации' },
                { id: 'uxui', label: 'UX/UI' },
                { id: 'motion', label: 'Motion' },
              ].map(({ id, label }) => (
                <React.Fragment key={id}>
                  <button
                    className={activeCategory === id ? styles.btn_active : ''}
                    onClick={() => setActiveCategory(id)}
                  >
                    {label}
                  </button>
                  <img src={star} alt="" />
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Фоновые изображения */}
          <img className={styles.portfolio__img_orange} src={orange} alt="orange" />
          <img className={styles.portfolio__img_blue} src={blue} alt="blue" />

          {/* Первый блок карточек */}
          <div className={styles.container}>
            <div className={styles.portfolio__cards_first}>
              {firstThree.map((item, index) => (
                <div key={index} className={styles.portfolio__card}>
                  <img className={styles.portfolio__card_img} src={item.img} alt="" />
                  <div className={styles.portfolio__card_active}>
                    <h3 className={styles.portfolio__card_title}>{item.title}</h3>
                    <div className={styles.portfolio__card_task}>Задача:</div>
                    <p className={styles.portfolio__card_desc}>{item.desc}</p>
                    <div className={styles.portfolio__card_category}>
                      <div>Категория:</div>
                      <p>{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Фоновой блок с Floating */}
          <Floating customStyle={styles.portfolio__banner} />

          {/* Второй блок карточек */}
          <div className={styles.container}>
            <div className={styles.portfolio__cards_second}>
              {remaining.map((item, index) => (
                <div key={index} className={styles.portfolio__card}>
                  <img className={styles.portfolio__card_img} src={item.img} alt="" />
                  <div className={styles.portfolio__card_active}>
                    <h3 className={styles.portfolio__card_title}>{item.title}</h3>
                    <div className={styles.portfolio__card_task}>Задача:</div>
                    <p className={styles.portfolio__card_desc}>{item.desc}</p>
                    <div className={styles.portfolio__card_category}>
                      <div>Категория:</div>
                      <p>{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
