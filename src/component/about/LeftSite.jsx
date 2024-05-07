import React, { Component } from "react";

export default class LeftSite extends Component {
  render() {
    return (
      <div>
        <p className="text-3xl font-bold">Billing details</p>
        <div className=" flex  space-x-8 mt-[36px]">
          <div>
            <label class="block">
              <span class=" cursor-pointer font-semibold">First Name</span>
              <input
                type="text"
                name="email"
                class="mt-1 px-3 py-2 bg-white border shadow-sm w-[211px] h-[75px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              />
            </label>
          </div>
          <div>
            <label class="block">
              <span class=" cursor-pointer font-semibold">Last Name</span>
              <input
                type="text"
                name="email"
                class="mt-1 px-3 py-2 bg-white border shadow-sm w-[211px] h-[75px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              />
            </label>
          </div>
        </div>
        <div className=" mt-[36px]">
          <label class="block">
            <span class=" cursor-pointer font-semibold">
              Company Name (Optional)
            </span>
            <input
              type="text"
              name="email"
              class="mt-1 px-3 py-2 bg-white border shadow-sm w-[453px] h-[75px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            />
          </label>
        </div>
        <div className=" mt-[36px]">
          <label class="block">
            <span class=" cursor-pointer font-semibold">Country / Region</span>
            <input
              type="text"
              name="email"
              placeholder="Sri Lanka"
              class="mt-1 px-3 py-2 bg-white border shadow-sm w-[453px] h-[75px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            />
          </label>
        </div>
        <div className=" mt-[36px]">
          <label class="block">
            <span class=" cursor-pointer font-semibold">Street address</span>
            <input
              type="text"
              name="email"
              class="mt-1 px-3 py-2 bg-white border shadow-sm w-[453px] h-[75px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            />
          </label>
        </div>
        <div className=" mt-[36px]">
          <label class="block">
            <span class=" cursor-pointer font-semibold">Town / City</span>
            <input
              type="text"
              name="email"
              class="mt-1 px-3 py-2 bg-white border shadow-sm w-[453px] h-[75px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            />
          </label>
        </div>
        <div className=" mt-[36px]">
          <label class="block">
            <span class=" cursor-pointer font-semibold">Province</span>
            <input
              type="text"
              name="email"
              placeholder="Western Province"
              class="mt-1 px-3 py-2 bg-white border shadow-sm w-[453px] h-[75px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            />
          </label>
        </div>
        <div className=" mt-[36px]">
          <label class="block">
            <span class=" cursor-pointer font-semibold">ZIP code</span>
            <input
              type="text"
              name="email"
              class="mt-1 px-3 py-2 bg-white border shadow-sm w-[453px] h-[75px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            />
          </label>
        </div>
        <div className=" mt-[36px]">
          <label class="block">
            <span class=" cursor-pointer font-semibold">Phone</span>
            <input
              type="number"
              name="email"
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
              class="mt-1 px-3 py-2 bg-white border shadow-sm w-[453px] h-[75px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            />
          </label>
        </div>
        <div className=" mt-[36px]">
          <label class="block">
            <input
              type="text"
              name="text"
              placeholder="Additional information"
              class="mt-1 px-3 py-2 bg-white border shadow-sm w-[453px] h-[75px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            />
          </label>
        </div>
      </div>
    );
  }
}
