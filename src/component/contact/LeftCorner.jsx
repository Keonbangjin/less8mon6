import React, { Component } from 'react'
import Call from "../../assets/images/call.svg";

export default class LeftCorner extends Component {
  render() {
    return (
      <div>
        <img src={Call} alt="" className=' ml-16' />
      </div>
    );
  }
}
