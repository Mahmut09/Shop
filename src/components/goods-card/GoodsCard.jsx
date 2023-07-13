import React from 'react'
import Styles from './GoodsCard.module.css'

const GoodsCard = ({ id, thumbnailUrl, articule, title, price, addToCart, description }) => {
  
  const card = {
    id,
    title,
    thumbnailUrl: thumbnailUrl ? thumbnailUrl[0].url : "./no-image.png",
    price: price,
  };

  return (
    <div className={Styles.card}>
      <div className={Styles.cardImage}>
        <img src={card.thumbnailUrl} alt={title} />
      </div>
      <div className={Styles.description}>
        <span className={Styles.articule}>Артикул {articule}</span>
        <span className={Styles.title}>{title}</span>
        <span className={Styles.description}>{description}</span>
        <span className={Styles.price}>{price} KZT</span>
        <button className={Styles.btn} onClick={() => addToCart(card)}>Купить</button>
      </div>
    </div>
  )
}

export default GoodsCard