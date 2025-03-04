import React from 'react'
import styles from './Price.module.scss'

const Price = () => {
    const cardInfo = [
        {
          id: 1,
          title: "лого тип",
          description: "создаём дизайн для твоего бизнеса и пьём чёрный кофе",
          price: 150,
          buttonText: "Купить",
          buttonDescription: "конкуренты - уже не будут ими",
          buttonDescriptionTitle: "стать круче всех."
        },
        {
          id: 2,
          title: "бан нер",
          description: "будет висеть на площади победы, там не пьём, а чилим",
          price: 70,
          buttonText: "Сделать",
          buttonDescription: "Прохожие будут улыбаться",
          buttonDescriptionTitle: "делать ярко."
        },
        {
          id: 3,
          title: "презен тация",
          description: "покажем так, как не могут они, американо в студию",
          price: 90,
          buttonText: "Понял, беру",
          buttonDescription: "школьники в шоке от того, что так можно",
          buttonDescriptionTitle: "это серьёзно."
        },
      ];

      console.log(styles);
      
  return (
    <section className={styles.price}>
        <div className={styles.price__title}>
            Наши <span>услуги</span>
        </div>
        <div className={styles.price__cards}>
            {cardInfo.map(el => (
                <div key={el.id} className={styles.price__card}>
                    <div className={styles.price__card_content}>
                        <div className={styles.price__card_number}>{`0${el.id}`}</div>
                        <h3 className={styles.price__card_title}>{el.title}</h3>
                        <p className={styles.price__card_description}>{el.description}</p>
                        <div className={styles.price__card_price}>{`$${el.price}`}</div>
                    </div>
                    <div className={styles.price__card_btn}>
                        <div className={styles.price__card_btn__title}>{el.buttonDescriptionTitle}</div>
                        <p className={styles.price__card_btn__desc}>{el.buttonDescription}</p>
                        <button className={styles.price__card_btn__button}>{el.buttonText}</button>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Price
