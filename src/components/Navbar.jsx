import React, { useState } from "react";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [OpenMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <nav className="container mx-auto p-6 ">
      <div className="flex justify-between items-center relative">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <ul className="hidden md:flex space-x-6">
          <a className="hover:text-darkGrayishBlue" href="#">
            Pricing
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            Product
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            About Us
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            Careers
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            Community
          </a>
        </ul>

        <div className="cta">
          <a
            href="#"
            className="p-3 bg-brightRed text-white rounded-full 
        baseline pt-2 px-6 hover:bg-brightRedLight hidden md:block"
          >
            Get Started
          </a>
        </div>

        <ul
          className={`menus rounded-lg bg-white drop-shadow-md mt-6 flex flex-col w-full items-center
       absolute top-6 space-y-4 p-8  font-bold  ${OpenMenu ? "open" : ""}`}
        >
          <a className="hover:text-darkGrayishBlue" href="#">
            Pricing
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            Product
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            About Us
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            Careers
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            Community
          </a>
        </ul>

        <div
          className={`hamburger flex flex-col md:hidden w-8 ${
            OpenMenu ? "closebtn" : ""
          }`}
          onClick={toggleMenu}
        >
          <div className="line-1 h-[3px] w-full bg-black"></div>
          <div className="line-2 h-[3px] w-full my-1 bg-black"></div>
          <div className="line-3 h-[3px] w-full bg-black"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
