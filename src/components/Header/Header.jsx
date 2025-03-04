import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router'
const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.burger}>
          <span></span>
        </div>
        <nav className={styles.menu}>
            <ul className={styles.menu__items}>
                <Link to={"/services"}><li>Услуги</li></Link>
                <Link to={"/portfolio"}><li>Портфолио</li></Link>
                <Link to={"/reviews"}><li>Отзывы</li></Link>
                <Link to={"/courses"}><li>Курсы</li></Link>
                <a href="tel:0707423293"><li>0707 423 293</li></a>
            </ul>
            <button className={styles.btn}>Обратный звонок</button>
        </nav>
    </header>
  )
}

export default Header
