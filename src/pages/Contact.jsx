import React, { Component } from "react";

import Cantact from "../assets/images/contact.svg";
import LeftCorner from "../component/contact/LeftCorner";
import RightCorner from "../component/contact/RightCorner";
import Quality from "../assets/icons/high_quality.svg";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <img src={Cantact} alt="" className=" ml-8 cursor-pointer" />
        <div className=" flex justify-between p-12">
          <LeftCorner />
          <RightCorner />
        </div>
        <img src={Quality} alt="" className=" ml-9 cursor-text" />
      </div>
    );
  }
}
