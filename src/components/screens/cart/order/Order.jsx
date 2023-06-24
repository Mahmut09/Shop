import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Order = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalGoodsCount, setTotalGoodsCount] = useState(0);
  const isLogined = useSelector(state => state.isLogined);

  useEffect(() => {
    const totalPrice = cart.reduce(
      (price, item) => price + item.price * item.count,
      0
    );

    setTotalPrice(totalPrice);
    setTotalGoodsCount(cart.length);
  }, [cart]);

  return (
    <div>
      <h3>Оформить заказ</h3>
      <p>Всего товаров: {totalGoodsCount}</p>
      <p>Общая стоимость: {totalPrice}</p>
      <br />
      {isLogined ? (
        <form>
          <button>Купить</button>
        </form>
      ) : (
        "Войдите в аккаунт, чтобы купить"
      )}
    </div>
  );
};

export default Order;
