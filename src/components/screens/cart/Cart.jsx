import React from 'react'
import Styles from './Cart.module.css'
import CartItem from './cart-item/CartItem'

import { useSelector } from "react-redux";

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const uniqueCartItems = cart.reduce((accumulator, currentItem) => {
        const existingItem = accumulator.find(
            item => item.title === currentItem.title
        );

        if (existingItem) {
            existingItem.count += 1;
        } else {
            accumulator.push({ ...currentItem, count: 1 });
        }

        return accumulator;
    }, []);

    console.log(uniqueCartItems);

    return (
        <div className={Styles.cart}>
            <h2>Корзина:</h2>

            <div className={Styles.container}>
                {uniqueCartItems.map(item => (
                    <CartItem
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        count={item.count}
                    />
                ))}
            </div>
        </div>
    )
}

export default Cart