import React from 'react'

const CartItem = ({ title, price, count }) => {
    return (
        <div>
            <span>{title}</span>
            <span>{price} ТГ</span>
            <span>{count} шт</span>
        </div>
    )
}

export default CartItem