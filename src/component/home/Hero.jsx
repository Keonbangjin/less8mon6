import React, { Component } from "react";
import "./Hero.css";

export default class Hero extends Component {
  render() {
    
    return (
      <div className="hero-background">
        <div
          className=" w-[643px] h-[443px] p-2  ml-[783px] mt-[382px] rounded-lg"
          style={{ backgroundColor: "rgb(255, 243, 227)" }}
        >
          <div className="ml-8">
            <p className=" font-medium mt-[52px] mb-1">New Arrival</p>
            <p
              className="text-6xl font-bold mb-4"
              style={{ color: "rgb(184, 142, 47)" }}
            >
              Discover Our <br /> New Collection
            </p>

            <p className=" font-medium mb-[46px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />{" "}
              elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button
              type="button"
              className=" mb-9 w-[200px] h-[74px] text-white font-bold  hover:rounded-xl hover:w-[180px] hover:h-[60px] hover:transition duration-700 ease-in-out"
              style={{ backgroundColor: "rgb(184, 142, 47)" }}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    );
  }
}
