import React, { useEffect, useState } from "react";
import Styles from "./Cart.module.css";
import CartItem from "./cart-item/CartItem";
import Order from "./order/Order";
import {  useSelector } from "react-redux";

const Cart = () => {
  // const cart = useSelector(state => state.cart);
  const [cart, setCart] = useState([]);
  const accessToken = useSelector(state => state.accessToken);
  console.log(accessToken);
  const handleChangeCart = e => {
    const currentTarget = e.currentTarget;
    const target = e.target;
    const incrBtn = target.closest(".plus");
    const decrBtn = target.closest(".minus");

    const updatedCart = cart
      .map(item => {
        if (item.id === +currentTarget.id) {
          if (incrBtn) item.count += 1;
          if (decrBtn) {
            item.count -= 1;
            if (item.count <= 0) return null;
          }
        }
        return item;
      })
      .filter(item => item !== null);

    setCart(updatedCart);
    localStorage.setItem("Cart", JSON.stringify(cart));
  };

  useEffect(() => {
    try {
      const localStorageCart = JSON.parse(localStorage.getItem("Cart")).filter(
        item => item.count > 0
      );
      setCart(localStorageCart);
    } catch {return};
  }, []);

  // const uniqueCartItems = cart.reduce((accumulator, currentItem) => {
  //   const existingItem = accumulator.find(
  //     item => item.title === currentItem.title
  //   );

  //   if (existingItem) {
  //     existingItem.count += 1;
  //   } else {
  //     accumulator.push({ ...currentItem, count: 1 });
  //   }

  //   return accumulator;
  // }, []);

  return (
    <div className={Styles.wrapper}>
      {cart.length > 0 ? (
        <div className={Styles.cart}>
          <h2>Корзина:</h2>
          <div className={Styles.container}>
            {cart.map(item => (
              <CartItem
                cart={cart}
                id={item.id}
                key={item.id}
                title={item.title}
                price={item.price}
                count={item.count}
                thumbnailUrl={item.thumbnailUrl}
                handleChangeCart={handleChangeCart}
              />
            ))}
          </div>
        </div>
      ) : (
        <h2 className={Styles.cart}>Корзина пуста</h2>
      )}

      {cart.length > 0 ? <Order className={Styles.form} cart={cart} /> : ""}
    </div>
  );
};

export default Cart;
