import React from "react";
import "../styles/Checkout.css";

function Checkout() {
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
          {/**BascketItem */}
          {/**BascketItem */}
          {/**BascketItem */}
          {/**BascketItem */}
          {/**BascketItem */}
        </div>
      </div>
      <div className="checkout__right">
        <h2> the subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
