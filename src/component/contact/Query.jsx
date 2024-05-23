import React, { useState } from "react";

const InputField = ({ label, placeholder, type, height }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="mt-[36px]">
      <label className="block cursor-pointer font-semibold">
        <span>{label}</span>
        <input
          type={type}
          name={label.toLowerCase().replace(/\s/g, "-")}
          placeholder={placeholder}
          className={`mt-1 px-3 py-2 bg-white border shadow-sm w-[453px] h-[${height}] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1`}
          value={inputValue}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

const Query = () => {
  return (
    <div className="mr-10">
      <InputField label="Your name" placeholder="Abc" type="text" height="75px" />
      <InputField label="Email address" placeholder="Abc@def.com" type="email" height="75px" />
      <InputField label="Subject" placeholder="This is an optional" type="text" height="75px" />
      <InputField label="Message" placeholder="Hi! I'd like to ask about" type="text" height="120px" />
      <button
        type="button"
        className=" mt-[49px] mb-[63px] text-white font-bold rounded-xl  w-[150px] h-[74px]"
        style={{ backgroundColor: "rgb(184, 142, 47)" }}
      >
        Submit
      </button>
    </div>
  );
};

export default Query;
