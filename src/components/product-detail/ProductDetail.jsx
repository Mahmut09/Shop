import React, { useState } from 'react';
import Styles from './ProductDetail.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../goods-container/cartAction';

const ProductDetail = ({ product, thumbnailUrlArr }) => {

    const dispatch = useDispatch();
    const [productImage, setProductImage] = useState(product.thumbnailUrl);

    const changeImage = e => setProductImage(e.target.getAttribute("src"));

    return (
        <div className={Styles.container}>
            <h3>{product.title}</h3>
            <div className={Styles.product}>
                <div className={Styles.images}>
                    <img src={productImage} alt={product.title} />
                    <div className={Styles.imagesList}>
                        {
                            thumbnailUrlArr.map(item => (
                                <img 
                                    key={item.id}
                                    src={item.url} 
                                    alt="Картинка товара"
                                    onClick={changeImage}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={Styles.description}>
                    <span className="price">{product.price} ТГ</span>
                    <button onClick={() => addToCart(dispatch, product)}>В корзину</button>
                    <p className="text">
                        {product.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
