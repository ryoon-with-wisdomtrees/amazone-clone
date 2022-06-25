import React from "react";
import "../styles/Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  // Home에 있는 Product껍데기로 부터 받아온 인자값들
  // dispatch로 store에 보내버려

  // state = global store
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket >>> ", basket); // 현 바스켓에 들어가있는 아이템들 show
  const addToBasket = () => {
    // dispatch the item into the data layer
    // GUn.(총처럼 아이템 쏴버려 DataLayer에)
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id /**id이하의 것들 product함수로 컴포넌트로 부터 받은 것 */,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product" key={id}>
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
      <button onClick={addToBasket}> Add to Basket </button>
    </div>
  );
}

export default Product;
