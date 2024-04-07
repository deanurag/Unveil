import React from "react";
import logo from "../assets/images/logo-white.svg";
import fb from "../assets/images/icon-facebook.svg";
import ins from "../assets/images/icon-instagram.svg";
import yt from "../assets/images/icon-youtube.svg";
import tw from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";

const Footer = () => {
  return (
    <section id="footer" className=" bg-veryDarkBlue">
      <div
        className="container mx-auto flex flex-col-reverse justify-between 
        space-y-6 space-y-reverse px-6 py-8 md:flex-row md:space-y-0"
      >
        <div className="flex space-y-reverse space-y-6 flex-col-reverse md:flex-col">
          <div className="text-darkGrayishBlue text-center md:hidden">
            Copyright &copy; 2024, All Rights Reserved
          </div>

          <div className="flex justify-center">
            <img src={logo} alt="logo" className="" />
          </div>

          <div className="flex justify-between">
            <a href="">
              <img src={fb} alt="" className="h-" />
            </a>
            <a href="">
              <img src={yt} alt="" className="h-" />
            </a>
            <a href="">
              <img src={tw} alt="" className="h-" />
            </a>
            <a href="">
              <img src={pinterest} alt="" className="h-" />
            </a>
            <a href="">
              <img src={ins} alt="" className="h-" />
            </a>
          </div>
        </div>

        <div className="flex justify-between px-6">
          <div className="flex flex-col space-y-3 text-white ">
            <a href="" className="hover:text-darkGrayishBlue">
              Home
            </a>
            <a href="" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="" className="hover:text-darkGrayishBlue">
              Products
            </a>
            <a href="" className="hover:text-darkGrayishBlue">
              About Us
            </a>
          </div>

          <div className="flex flex-col space-y-3 text-white ">
            <a href="" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="" className="hover:text-darkGrayishBlue">
              Community
            </a>
            <a href="" className="hover:text-darkGrayishBlue">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updates in your inbox..."
              />
              <button className="text-white bg-brightRed rounded-full px-6 py-2">
                Go
              </button>
            </div>
            <div className="text-darkGrayishBlue my-4">
              Copyright &copy; 2024, All Rights Reserved
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
