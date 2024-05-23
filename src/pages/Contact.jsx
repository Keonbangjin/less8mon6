import React, { Component } from "react";

import Contact1 from "../assets/images/contact.svg";
import Quality from "../assets/icons/high_quality.svg";
import Call from "../assets/images/call.svg";
import Query from "../component/contact/Query";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <img src={Contact1} alt="" className=" ml-8 cursor-pointer" />
        <div className=" flex justify-between p-12">
      <div>
        <img src={Call} alt="" className=' ml-16' />
      </div>
          <Query />
        </div>
        <img src={Quality} alt="" className=" ml-9 cursor-text" />
      </div>
    );
  }
}
