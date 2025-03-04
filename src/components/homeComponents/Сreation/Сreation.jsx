import React from 'react';
import styles from './Creation.module.scss';
import sam from '../../../img/main/Creation/sam.png';
import az from '../../../img/main/Creation/az.png';
import chi from '../../../img/main/Creation/chi.png';
import ar from '../../../img/main/Creation/ar.png';
import ron from '../../../img/main/Creation/ron.png';
import tema from '../../../img/main/Creation/tema.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Creation = () => {
    return (
        <section className={styles.creation}>
            <div className={styles.creation__img}></div>
            <div className={styles.container}>
                <h2 className={styles.creation__title}>Сила нашего творчества!</h2>

                <Splide
                    className={styles.cardContainer}
                    options={{
                        perPage: 3,
                        rewind: true,
                        arrows: false,
                        pagination: false,
                        
                    }}
                    aria-label="Список дизайнеров"
                >
                    <SplideSlide>
                        <div className={styles.card}>
                            <div>
                                <div className={styles.cardTitle}>3D-2D</div>
                                <h3 className={styles.cardName}>Ибраев Самидин</h3>
                                <p className={styles.cardDescription}>game – дизайнер</p>
                            </div>
                            <img src={sam} alt="Ибраев Самидин" className={styles.cardImage} />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={styles.card}>
                            <div>
                                <div className={styles.cardTitle}>UX/UI</div>
                                <h3 className={styles.cardName}>Саралаев Азиз</h3>
                                <p className={styles.cardDescription}>UX/UI – дизайнер</p>
                            </div>
                            <img src={az} alt="Саралаев Азиз" className={styles.cardImage} />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={styles.card}>
                            <div>
                                <div className={styles.cardTitle}>Motion</div>
                                <h3 className={styles.cardName}>Чынгыз Акимов</h3>
                                <p className={styles.cardDescription}>Motion – дизайнер</p>
                            </div>
                            <img src={chi} alt="Чынгыз Акимов" className={styles.cardImage} />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={styles.card}>
                            <div>
                                <div className={styles.cardTitle}>Promo</div>
                                <h3 className={styles.cardName}>Арсен Оливейра</h3>
                                <p className={styles.cardDescription}>Маркетолог</p>
                            </div>
                            <img src={ar} alt="Арсен Оливейра" className={styles.cardImage} />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={styles.card}>
                            <div>
                                <div className={styles.cardTitle}>Photo</div>
                                <h3 className={styles.cardName}>Равиль Ногойбаев</h3>
                                <p className={styles.cardDescription}>Мобилограф</p>
                            </div>
                            <img src={ron} alt="Равиль Ногойбаев" className={styles.cardImage} />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={styles.card}>
                            <div>
                                <div className={styles.cardTitle}>Vogue</div>
                                <h3 className={styles.cardName}>Темирлан Алтыкеев</h3>
                                <p className={styles.cardDescription}>Fashion - Дизайнер</p>
                            </div>
                            <img src={tema} alt="Темирлан Алтыкеев" className={styles.cardImage} />
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </section>
    );
};

export default Creation;
