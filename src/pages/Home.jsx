import React, { Component } from "react";

import Hero from "../component/home/Hero";
import Browse from "../component/home/Browse";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className=" flex items-center justify-center">
          <Hero />
        </div>
        <Browse />
      </div>
    );
  }
}
