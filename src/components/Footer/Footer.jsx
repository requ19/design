import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../img/logo.svg';
import blue from '../../img/Footer/bl.png';
import inst from '../../img/Footer/inst.png';
import tt from '../../img/Footer/tt.png';
import yt from '../../img/Footer/youtube 1.png';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <img className={styles.img__blue} src={blue} alt="" />
        <div className={styles.container}>
            <a href="#">
                <img className={styles.footer__logo} src={logo} alt="logo" />
            </a>
        
            <div className={styles.footer__content}>
                    <div className={styles.footer__social}>
                        <p>Создаем креативные решения для вашего бренда. Мы превращаем идеи в уникальные визуальные образы,которые привлекают 
                        внимание, усиливают вашу идентичностьи делают ее запоминающейся.</p>

                        <a href=""><img src={inst} alt="" /></a>
                        <a href=""><img src={tt} alt="" /></a>
                        <a href=""><img src={yt} alt="" /></a>

                    </div>
                    <div className={styles.footer__navi}>
                        <div className={styles.footer__about}>
                            <div>О нас</div>
                            <ul>
                            <Link to={"/services"}><li>Услуги</li></Link>
                            <Link to={"/portfolio"}><li>Портфолио</li></Link>
                            <Link><li>Отзывы</li></Link>
                            <Link><li>О компании</li></Link>
                            <Link><li>Курсы</li></Link>
                            </ul>
                        </div>
                        <div className={styles.footer__contact}>
                            <div>Контакты</div>
                            <ul>
                                <a href=""><li>+996 554 201 506</li></a>
                                <a href=""><li>Telegram</li></a>
                                <a href=""><li>WhatsApp</li></a>
                                <a href=""><li>sadthunder03@gmail.com</li></a>
                                <a href=""><li>91/1 ул. Манаса, Бишкек</li></a>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className={styles.footer__line}></div>
            <div className={styles.footer__copyright}>Все права защищены ОсОО        ©       «Creat!FY»  2024</div>
        </div>
    </footer>
  )
}

export default Footer;
