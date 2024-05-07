import React, { Component } from "react";
import LeftSite from "./LeftSite";
import RightSite from "./RightSite";

export default class CheckOut extends Component {
  render() {
    return (
      <div>
        <div className=" mt-[50px] flex justify-between p-14">
          <LeftSite />
          <RightSite />
        </div>
      </div>
    );
  }
}
