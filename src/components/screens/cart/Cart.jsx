import React from "react";
import Styles from "./Cart.module.css";
import CartItem from "./cart-item/CartItem";
import Order from "./order/Order";

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

  return (
    <div className={Styles.wrapper}>
      {uniqueCartItems.length > 0 ? (
        <div className={Styles.cart}>
          <h2>Корзина:</h2>
          <div className={Styles.container}>
            {uniqueCartItems.map(item => (
              <CartItem
                key={item.id}
                title={item.title}
                price={item.price}
                count={item.count}
                thumbnailUrl={item.thumbnailUrl}
              />
            ))}
          </div>
        </div>
      ) : (
        <h2 className={Styles.cart}>Корзина пуста</h2>
      )}

      {uniqueCartItems.length > 0 ? (
        <Order className={Styles.form} cart={uniqueCartItems} />
      ) : (
        ""
      )}
      
    </div>
  );
};

export default Cart;
