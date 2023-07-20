import React from 'react';

const ProductDetail = ({ product }) => {
    return (
        <div>
            {product.id}
            <br/>
            {product.title}
            <br/>
            {product.description}
            <br/>
            {product.price}
            <br/>
            <img src={product.thumbnailUrl} alt={product.title} />
        </div>
    )
}

export default ProductDetail
