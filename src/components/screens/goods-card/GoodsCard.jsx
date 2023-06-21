import React from 'react'
import Styles from './GoodsCard.module.css'

const GoodsCard = ({ id, thumbnailUrl, articule, title, price, addToCart }) => {
  const convertedPrice = Math.abs(Math.round(+price * 100));

  const card = {
    id,
    title,
    thumbnailUrl,
    price: convertedPrice,
  };

  return (
    <div className={Styles.card}>
      <div className="card-image">
        <img src={thumbnailUrl} alt="#" />
      </div>
      <div className={Styles.description}>
        <span className={Styles.articule}>Артикул {articule}</span>
        <span className={Styles.title}>{title}</span>
        <span className={Styles.price}>{convertedPrice} KZT</span>
        <button className={Styles.btn} onClick={() => addToCart(card)}>Купить</button>
      </div>
    </div>
  )
}

export default GoodsCard