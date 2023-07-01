import React from "react";
import Style from "./CartItem.module.css";

const CartItem = ({ id, title, price, count, thumbnailUrl, handleChangeCart }) => {

  const changeItemCount = (e) => handleChangeCart(e);

  return (
    <div className={Style.item} onClick={changeItemCount} id={id}>

      <img src={thumbnailUrl} alt={title} />
      <div className={Style.text}>
        <span>{title}</span>
        <span>{price} ТГ</span>
      </div>
      <div className={Style.count}>
        <span className="minus"></span>
        {count}
        <span className="plus"></span>
      </div>
      <div className={Style.totalPrice}>{price * count} ТГ</div>

    </div>
  );
};

export default CartItem;
