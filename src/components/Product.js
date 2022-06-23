import React from "react";
import "../styles/Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p> {title}</p>
        <p className="product_price">
          <small> $</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <buttone> Add to Basket </buttone>
    </div>
  );
}

export default Product;
