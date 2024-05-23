import React from "react";
import Billing_details from "./Billing_details";
import Product from "./Product";

const CheckOut = () => {
  return (
    <div>
      <div className=" mt-[50px] flex justify-between p-14">
        <Billing_details />
        <Product />
      </div>
    </div>
  );
};

export default CheckOut;
