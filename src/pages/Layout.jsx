import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import Logo from "../assets/icons/Logo.svg";
import Person from "../assets/icons/Person.svg";
import Lupa from "../assets/icons/Lupa.svg";
import Like from "../assets/icons/Like.svg";
import Shop from "../assets/icons/Shop.svg";
import FooterLogo from "../assets/icons/Footer_logo.svg";
import Text from "../assets/icons/footer_under.svg";
import Text2 from "../assets/icons/text_2.svg";

const Layout = () => {
  const navLinkStyles = "cursor-pointer hover:text-amber-700";
  const footerLinkStyles = "cursor-pointer mt-4";

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="-800 p-4 flex justify-between mt-2">
        <img src={Logo} alt="Logo" className="cursor-pointer" />
        <ul className="flex justify-center space-x-8 mt-1">
          {[
            { to: "/", text: "Home" },
            { to: "/shop", text: "Shop" },
            { to: "/about", text: "About" },
            { to: "/contact", text: "Contact" },
          ].map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                activeClassName="text-amber-700"
                className={navLinkStyles}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex justify-between space-x-6">
          <img src={Person} alt="Person" className="cursor-pointer" />
          <img src={Lupa} alt="Lupa" className="cursor-pointer" />
          <img src={Like} alt="Like" className="cursor-pointer" />
          <img src={Shop} alt="Shop" className="cursor-pointer" />
        </div>
      </nav>
      <section className="flex-grow">
        <Outlet />
      </section>
      <footer className="h-[505px] p-16">
        <div className="flex justify-between">
          <div>
            <img src={FooterLogo} alt="Footer Logo" className="cursor-pointer mt-9" />
            <img src={Text} alt="Text" className="cursor-text mt-12" />
          </div>
          <div className="flex justify-between space-x-48 mt-[50px]">
            <div>
              <p className="opacity-60 mb-[40px]">Links</p>
              <ul>
                {[
                  "Home",
                  "Shop",
                  "About",
                  "Contact",
                ].map((text, index) => (
                  <li key={index} className={footerLinkStyles}>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="opacity-60 mb-[40px]">Help</p>
              <ul>
                {[
                  "Payment Options",
                  "Returns",
                  "Privacy Policies",
                ].map((text, index) => (
                  <li key={index} className={footerLinkStyles}>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="opacity-60 mb-[40px]">Newsletter</p>
              <input
                type="email"
                className="mt-4 underline underline-offset-8 p-2"
                placeholder="Enter Your Email Address"
              />
              <button className="underline underline-offset-8 mt-2" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <img src={Text2} alt="Text" className="cursor-text mt-[80px] p-8" />
      </footer>
    </div>
  );
};

export default Layout;
