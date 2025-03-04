import React from 'react';
import styles from './Portfolio.module.scss';
import basket from '../../../img/ServicesPage/Portfolio/image.png';
import design from '../../../img/ServicesPage/Portfolio/image (1).png';
import marketplays from '../../../img/ServicesPage/Portfolio/image (2).png';
import infograph from '../../../img/ServicesPage/Portfolio/image (3).png';
import color from '../../../img/ServicesPage/Portfolio/image (4).png';
import stories from '../../../img/ServicesPage/Portfolio/image (5).png';
import createBrand from '../../../img/ServicesPage/Portfolio/image (6).png';
import font from '../../../img/ServicesPage/Portfolio/image (7).png';
import interFace from '../../../img/ServicesPage/Portfolio/image (8).png';
import socialMedia from '../../../img/ServicesPage/Portfolio/image (9).png';
import yellow from '../../../img/ServicesPage/Portfolio/bg/yellow.png'
import red from '../../../img/ServicesPage/Portfolio/bg/red.png'
import yellowSmall from '../../../img/ServicesPage/Portfolio/bg/yellow-small.png'

const Portfolio = () => {
    const portfolioItems = [
        { title: "Создадим красоту", img: basket },
        { title: "Инфографика", img: infograph },
        { title: "Подберем шрифт", img: font },
        { title: "Дизайн упаковка", img: design },
        { title: "Играем с цветом", img: color },
        { title: "Создаем интерфейсы", img: interFace },
        { title: "Карточки маркетплейс", img: marketplays },
        { title: "Сторис дизайн", img: stories },
        { title: "Создаем бренд", img: createBrand },
        { title: "Social media", img: socialMedia }
    ];

    const groupedItems = [
        portfolioItems.slice(0, 3), 
        portfolioItems.slice(3, 7),  
        portfolioItems.slice(7, 10) 
    ];

    return (
        <section className={styles.portfolio}>
            <img className={styles.portfolio__img1} src={yellowSmall} alt="" />
            <img className={styles.portfolio__img2} src={red} alt="" />
            <img className={styles.portfolio__img3} src={yellow} alt="" />
            <h2 className={styles.portfolio__title}>Каждый кадр — это история</h2>
            <div className={styles.portfolio__cards}>
                {groupedItems.map((group, index) => (
                    <div key={index} className={styles.portfolio__row}>
                        {group.map((el, i) => (
                            <div key={i} className={styles.portfolio__card}>
                                <img src={el.img} alt={el.title} />
                                <h4>{el.title}</h4>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <button className={styles.portfolio__btn}>Смотреть еще</button>
        </section>
    );
};

export default Portfolio;
