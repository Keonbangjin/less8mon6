import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";

import Logo from "../assets/icons/Logo.svg";
import Person from "../assets/icons/Person.svg";
import Lupa from "../assets/icons/Lupa.svg";
import Like from "../assets/icons/Like.svg";
import Shop from "../assets/icons/Shop.svg";
import Footer_logo from "../assets/icons/Footer_logo.svg";
import Text from "../assets/icons/footer_under.svg";
import Text_2 from "../assets/icons/text_2.svg";

export default class Layout extends Component {
  render() {
    return (
      <div className="flex flex-col min-h-screen">
        <nav className="-800 p-4 flex justify-between mt-2">
          <img src={Logo} alt="" className=" cursor-pointer" />
          <ul className="flex justify-center space-x-8 mt-1">
            <li>
              <NavLink
                to="/"
                className={(path) => {
                  if (path.isActive) {
                    return "text-amber-700";
                  }
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={(path) => {
                  if (path.isActive) {
                    return "text-amber-700";
                  }
                }}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={(path) => {
                  if (path.isActive) {
                    return "text-amber-700";
                  }
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={(path) => {
                  if (path.isActive) {
                    return "text-amber-700";
                  }
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className=" flex justify-between space-x-6">
            <img src={Person} alt="icon" className=" cursor-pointer" />
            <img src={Lupa} alt="icon" className=" cursor-pointer" />
            <img src={Like} alt="icon" className=" cursor-pointer" />
            <img src={Shop} alt="icon" className=" cursor-pointer" />
          </div>
        </nav>
        <section className="flex-grow">
          <Outlet />
        </section>
        <footer className="h-[505px] p-16">
          <div className="flex justify-between">
            <div>
              <img
                src={Footer_logo}
                alt="logo"
                className=" cursor-pointer mt-9"
              />
              <img src={Text} alt="text" className=" cursor-text mt-12" />
            </div>
            <div className=" flex justify-between space-x-48 mt-[50px]">
              <div>
                <p className=" opacity-60 mb-[40px]">Links</p>
                <ul>
                  <li className="cursor-pointer mt-4 hover:text-amber-700">
                    Home
                  </li>
                  <li className="cursor-pointer mt-4 hover:text-amber-700">
                    Shop
                  </li>
                  <li className="cursor-pointer mt-4 hover:text-amber-700">
                    About
                  </li>
                  <li className="cursor-pointer mt-4 hover:text-amber-700">
                    Contact
                  </li>
                </ul>
              </div>
              <div>
                <p className=" opacity-60 mb-[40px]">Help</p>
                <ul>
                  <li className="cursor-pointer mt-4 hover:text-amber-700">
                    Payment Options
                  </li>
                  <li className="cursor-pointer mt-4 hover:text-amber-700">
                    Returns
                  </li>
                  <li className="cursor-pointer mt-4 hover:text-amber-700">
                    Privacy Policies
                  </li>
                </ul>
              </div>
              <div>
                <p className=" opacity-60 mb-[40px]">Newsletter</p>
                <input
                  type="email"
                  className="mt-4 underline underline-offset-8 p-2"
                  placeholder="Enter Your Email Address"
                />
                <button className="underline underline-offset-8" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <img src={Text_2} alt="text" className=" cursor-text mt-[80px] p-8" />
        </footer>
      </div>
    );
  }
}
