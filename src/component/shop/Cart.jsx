import React, { Component } from "react";

import Sofa from "../../assets/icons/Sofa.svg";
import Rubish from "../../assets/icons/Rubish.svg";

export default class Cart extends Component {
  render() {
    return (
      <div className=" flex justify-around">
        <div className=" w-[817px] h-[215px] mt-[72px] ml-[-70px]">
          <div
            className=" flex justify-around w-[817px] h-[55px] p-4"
            style={{ backgroundColor: "rgb(255, 243, 227)" }}
          >
            <p className=" font-semibold cursor-pointer">Product</p>
            <p className=" font-semibold cursor-pointer">Price</p>
            <p className=" font-semibold cursor-pointer">Quantity</p>
            <p className=" font-semibold cursor-pointer">Subtotal</p>
          </div>
          <div className=" flex justify-around ml-[-50px]">
            <div
              className=" cursor-pointer w-[105px] h-[95px]  rounded-xl mt-[55px]"
              style={{ backgroundColor: "rgb(255, 243, 227)" }}
            >
              <img src={Sofa} alt="" />
            </div>
            <div className="flex justify-around mt-[80px] ml-[50px]">
              <p className=" p-4 opacity-55">Asgaard sofa</p>
              <p className=" p-4 opacity-55">Rs. 250,000.00</p>
              <button className=" mt-3 w-[32px] h-[32px] border-2 rounded-lg border-black">
                1
              </button>
              <p className=" p-4">Rs. 250,000.00</p>
              <img
                src={Rubish}
                alt=""
                className=" w-5 h-5 mt-4 ml-5 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div
          className=" w-[393px] h-[390px] align-middle text-center mt-[72px] p-6 rounded-lg"
          style={{ backgroundColor: "rgb(255, 243, 227)" }}
        >
          <p className="font-bold text-3xl">Cart Totals</p>
          <div className=" flex justify-around mt-[61px]">
            <p className=" font-bold ml-[-20px]">Subtotal</p>
            <p className=" opacity-55">Rs. 250,000.00</p>
          </div>
          <div className=" flex justify-around mt-[61px]">
            <p className=" font-bold">Total</p>
            <p className=" font-bold text-2xl text-amber-600">Rs. 250,000.00</p>
          </div>
          <button
            type="button"
            className=" w-[222px] h-[59px] border-2 border-black rounded-xl mt-[42px] hover:bg-black hover:text-white hover:font-bold transition duration-700 ease-in-out"
          >
            Check Out
          </button>
        </div>
      </div>
    );
  }
}
