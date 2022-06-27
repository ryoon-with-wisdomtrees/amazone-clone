import React from "react";
import "../styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
//import { Link } from "@mui/material";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Header() {
  // const [state, dispatch] = useStateValue();
  // console.log("state:", state);
  // header에서 보내는거 없으니까 dispatch 없애고
  // 구조분해화 할당으로 basket만 state에서 꺼내오기
  const [{ basket }] = useStateValue();
  // console.log("basket, ", basket);

  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          {/** hello*/}
          <span className="header__optionLine1">Hello Guest</span>
          <span className="header__optionLine2">Sign In</span>
        </div>
        <div className="header__option">
          {/** returns*/}
          <span className="header__optionLine1">Returns</span>
          <span className="header__optionLine2">& Orders</span>
        </div>
        <div className="header__option">
          <Link to="/login">
            <span className="header__optionLine1">Your</span>
            <span className="header__optionLine2">Prime</span>
          </Link>
        </div>
        <Link to="/checkout">
          <div className="header__optionsBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLine2 header__basketCount">
              {/* {basket?.length} */}
              {/** 옵셔널 체이닝 연산자. null을 참조해도 error대신 undefined 반환*/}
              {basket.length ?? "0"}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
