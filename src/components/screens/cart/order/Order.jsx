import React, { useEffect, useState } from "react";

const Order = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalGoodsCount, setTotalGoodsCount] = useState(0);

  useEffect(() => {
    const totalPrice = cart.reduce((price, item) => price + item.price * item.count, 0);

    setTotalPrice(totalPrice);
    setTotalGoodsCount(cart.length);
  }, [cart]);

  return (
    <div>
      <h3>Оформить заказ</h3>
      <p>Всего товаров: {totalGoodsCount}</p>
      <p>Общая стоимость: {totalPrice}</p>
    </div>
  );
};

export default Order;
