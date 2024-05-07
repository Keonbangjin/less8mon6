import React, { Component } from "react";

import Cards from "../../assets/icons/Cards.svg";

export default class Browse extends Component {
  render() {
    return (
      <div className=" flex  justify-center mt-[70px] mb-[97px]">
        <img src={Cards} alt="" className=" cursor-pointer" />
      </div>
    );
  }
}
