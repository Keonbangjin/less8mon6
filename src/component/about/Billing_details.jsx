/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const InputField = ({ label, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="mt-[36px]">
      <label className="block cursor-pointer font-semibold">
        <span>{label}</span>
        <input
          type="text"
          name={label.toLowerCase().replace(/\s/g, "-")}
          placeholder={placeholder}
          className="mt-1 px-3 py-2 bg-white border shadow-sm w-[211px] h-[75px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          value={inputValue}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

const BillingDetails = () => {
  return (
    <div>
      <p className="text-3xl font-bold">Billing details</p>
      <div className="flex space-x-8 mt-[36px]">
        <InputField label="First Name" placeholder="Enter your first name" />
        <InputField label="Last Name" placeholder="Enter your last name" />
      </div>
      <InputField label="Company Name (Optional)" placeholder="Enter company name" />
      <InputField label="Country / Region" placeholder="Enter country or region" />
      <InputField label="Street address" placeholder="Enter street address" />
      <InputField label="Town / City" placeholder="Enter town or city" />
      <InputField label="Province" placeholder="Enter province" />
      <InputField label="ZIP code" placeholder="Enter ZIP code" />
      <InputField label="Phone" placeholder="Enter phone number" />
      <InputField label="Email address" placeholder="Enter email address" />
      <InputField label="Additional information" placeholder="Enter additional information" />
    </div>
  );
};

export default BillingDetails;
