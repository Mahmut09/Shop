import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Styles from "./Order.module.css";

const Order = ({ cart, handleSetPayment }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalGoodsCount, setTotalGoodsCount] = useState(0);
  const token = useSelector(state => state.accessToken);

  useEffect(() => {
    const totalPrice = cart.reduce(
      (price, item) => price + item.price * item.count,
      0
    );
    setTotalPrice(totalPrice);
    setTotalGoodsCount(cart.length);
  }, [cart]);

  return (
    <div className={Styles.order}>
      <h3>Оформить заказ:</h3>
      <p>Всего позиций: {totalGoodsCount}</p>
      <p>Общая стоимость: {totalPrice} тг</p>
      {token ? (
        <form>
          <button onClick={handleSetPayment}>Купить</button>
        </form>
      ) : (
        <div className={Styles.loginMessage}>Войдите в аккаунт, чтобы купить</div>
      )}
    </div>
  );
};

export default Order;
