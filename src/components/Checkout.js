import React from "react";
import "../styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">your shopping basket</h2>
          {basket.map((element) => (
            <CheckoutProduct
              id={element.id}
              title={element.title}
              price={element.price}
              rating={element.rating}
              image={element.image}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
