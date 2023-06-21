import React from "react";
import Style from "./CartItem.module.css";

const CartItem = ({ title, price, count, thumbnailUrl }) => {
  return (
    <div className={Style.item}>

      <img src={thumbnailUrl} alt={title} />
      <div className={Style.text}>
        <span>{title}</span>
        <span>{price} ТГ</span>
      </div>
      <div className={Style.count}>{count}</div>
      <div className={Style.totalPrice}>{price * count} ТГ</div>

    </div>
  );
};

export default CartItem;
