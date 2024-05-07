import React, { Component } from "react";

export default class RightCorner extends Component {
  render() {
    return (
      <div className=" mr-10">
        <div className=" mt-[36px]">
          <label class="block">
            <span class=" cursor-pointer font-semibold">Your name</span>
            <input
              type="text"
              name="email"
              placeholder="Abc"
              class="mt-1 px-3 py-2 bg-white border shadow-sm w-[453px] h-[75px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            />
          </label>
        </div>
        <div className=" mt-[36px]">
          <label class="block">
            <span class=" cursor-pointer font-semibold">Email address</span>
            <input
              type="email"
              name="email"
              placeholder="Abc@def.com"
              class="mt-1 px-3 py-2 bg-white border shadow-sm w-[453px] h-[75px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            />
          </label>
        </div>
        <div className=" mt-[36px]">
          <label class="block">
            <span class=" cursor-pointer font-semibold">Subject</span>
            <input
              type="email"
              name="email"
              placeholder="This is an optional"
              class="mt-1 px-3 py-2 bg-white border shadow-sm w-[453px] h-[75px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            />
          </label>
        </div>
        <div className=" mt-[36px]">
          <label class="block">
            <span class=" cursor-pointer font-semibold">Message</span>
            <input
              type="message"
              placeholder="Hi! i’d like to ask about"
              class="mt-1 px-3 py-2 bg-white border shadow-sm w-[453px] h-[120px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            />
          </label>
        </div>
        <button
          type="button"
          className=" w-[237px] mt-[49px] mb-[63px] h-[74px] text-white font-bold rounded-xl  hover:rounded-xl hover:w-[150px] hover:h-[74px] hover:transition duration-700 ease-in-out"
          style={{ backgroundColor: "rgb(184, 142, 47)" }}
        >
          Submit
        </button>
      </div>
    );
  }
}
