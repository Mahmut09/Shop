import React from 'react'
import Styles from './GoodsCard.module.css'
import { Link } from 'react-router-dom'


const GoodsCard = ({ id, thumbnailUrlArr, articule, title, price, addToCart, description, handleProductClick }) => {

    const card = {
        id,
        title,
        description,
        thumbnailUrl: thumbnailUrlArr ? thumbnailUrlArr[0].url : "./no-image.png",
        price: price,
    };

    return (
        <Link 
            className={Styles.card} 
            to={`/product/${id}`}
            onClick={event => handleProductClick(event, card, thumbnailUrlArr)}
        >
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
        </Link>
    )
}

export default GoodsCard