import React, { Component } from "react";
import ShopCard from "../component/shop/ShopCard";
import "../component/shop/ShopCard.css";
import HighQualityIcon from "../assets/icons/high_quality.svg";

export default class Shop extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="cart w-screen h-[316px] cursor-pointer"></div>
        <ShopCard />
        <div className="mt-8 cursor-text">
          <img src={HighQualityIcon} alt="High Quality Icon" />
        </div>
      </div>
    );
  }
}
