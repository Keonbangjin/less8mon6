import React, { Component } from "react";

import Cart from "../component/shop/Cart";
import "../component/shop/Cart.css";
import High_quality from "../assets/icons/high_quality.svg";


export default class Shop extends Component {
  render() {
    return (
      <div className="">
        <div className="cart w-screen h-[316px] cursor-pointer"></div>
        <Cart />
        <div className=" w-full h-full mt-[85px] ml-9 cursor-text">
          <img src={High_quality} alt="" />
        </div>
      </div>
    );
  }
}
