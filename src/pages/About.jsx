import React from "react";

import Img from "../assets/images/contact_img.svg";
import Quality from "../assets/icons/high_quality.svg";
import CheckOut from "../component/about/CheckOut";

const About = () => {
  return (
    <div>
      <img src={Img} alt="" className=" ml-8 cursor-pointer" />
      <CheckOut />
      <img src={Quality} alt="" className=" ml-8 cursor-text mt-[123px]" />
    </div>
  );
};

export default About;
