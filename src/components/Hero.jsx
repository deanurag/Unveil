import React from "react";
import { useState } from "react";
import illustration from "../assets/images/illustration-intro.svg";

const json = [
  { Company: "Adani Enterprises Ltd. (ADANIENT.NS)", Symbol: "ADANIENT.NS" },
  {
    Company: "Adani Ports and Special Economic Zone Ltd. (ADANIPORTS.NS)",
    Symbol: "ADANIPORTS.NS",
  },
  {
    Company: "Apollo Hospitals Enterprise Ltd. (APOLLOHOSP.NS)",
    Symbol: "APOLLOHOSP.NS",
  },
  { Company: "Asian Paints Ltd. (ASIANPAINT.NS)", Symbol: "ASIANPAINT.NS" },
  { Company: "Axis Bank Ltd. (AXISBANK.NS)", Symbol: "AXISBANK.NS" },
  { Company: "Bajaj Auto Ltd. (BAJAJ-AUTO.NS)", Symbol: "BAJAJ-AUTO.NS" },
  { Company: "Bajaj Finance Ltd. (BAJFINANCE.NS)", Symbol: "BAJFINANCE.NS" },
  { Company: "Bajaj Finserv Ltd. (BAJAJFINSV.NS)", Symbol: "BAJAJFINSV.NS" },
  { Company: "Bharat Petroleum Corporation Ltd. (BPCL.NS)", Symbol: "BPCL.NS" },
  { Company: "Bharti Airtel Ltd. (BHARTIARTL.NS)", Symbol: "BHARTIARTL.NS" },
  {
    Company: "Britannia Industries Ltd. (BRITANNIA.NS)",
    Symbol: "BRITANNIA.NS",
  },
  { Company: "Cipla Ltd. (CIPLA.NS)", Symbol: "CIPLA.NS" },
  { Company: "Coal India Ltd. (COALINDIA.NS)", Symbol: "COALINDIA.NS" },
  { Company: "Divi's Laboratories Ltd. (DIVISLAB.NS)", Symbol: "DIVISLAB.NS" },
  {
    Company: "Dr. Reddy's Laboratories Ltd. (DRREDDY.NS)",
    Symbol: "DRREDDY.NS",
  },
  { Company: "Eicher Motors Ltd. (EICHERMOT.NS)", Symbol: "EICHERMOT.NS" },
  { Company: "Grasim Industries Ltd. (GRASIM.NS)", Symbol: "GRASIM.NS" },
  { Company: "HCL Technologies Ltd. (HCLTECH.NS)", Symbol: "HCLTECH.NS" },
  { Company: "HDFC Bank Ltd. (HDFCBANK.NS)", Symbol: "HDFCBANK.NS" },
  {
    Company: "HDFC Life Insurance Company Ltd. (HDFCLIFE.NS)",
    Symbol: "HDFCLIFE.NS",
  },
  { Company: "Hero MotoCorp Ltd. (HEROMOTOCO.NS)", Symbol: "HEROMOTOCO.NS" },
  { Company: "Hindalco Industries Ltd. (HINDALCO.NS)", Symbol: "HINDALCO.NS" },
  {
    Company: "Hindustan Unilever Ltd. (HINDUNILVR.NS)",
    Symbol: "HINDUNILVR.NS",
  },
  { Company: "ICICI Bank Ltd. (ICICIBANK.NS)", Symbol: "ICICIBANK.NS" },
  { Company: "ITC Ltd. (ITC.NS)", Symbol: "ITC.NS" },
  { Company: "IndusInd Bank Ltd. (INDUSINDBK.NS)", Symbol: "INDUSINDBK.NS" },
  { Company: "Infosys Ltd. (INFY.NS)", Symbol: "INFY.NS" },
  { Company: "JSW Steel Ltd. (JSWSTEEL.NS)", Symbol: "JSWSTEEL.NS" },
  {
    Company: "Kotak Mahindra Bank Ltd. (KOTAKBANK.NS)",
    Symbol: "KOTAKBANK.NS",
  },
  { Company: "LTIMindtree Ltd. (LTIM.NS)", Symbol: "LTIM.NS" },
  { Company: "Larsen & Toubro Ltd. (LT.NS)", Symbol: "LT.NS" },
  { Company: "Mahindra & Mahindra Ltd. (M&M.NS)", Symbol: "M&M.NS" },
  { Company: "Maruti Suzuki India Ltd. (MARUTI.NS)", Symbol: "MARUTI.NS" },
  { Company: "NTPC Ltd. (NTPC.NS)", Symbol: "NTPC.NS" },
  { Company: "Nestle India Ltd. (NESTLEIND.NS)", Symbol: "NESTLEIND.NS" },
  {
    Company: "Oil & Natural Gas Corporation Ltd. (ONGC.NS)",
    Symbol: "ONGC.NS",
  },
  {
    Company: "Power Grid Corporation of India Ltd. (POWERGRID.NS)",
    Symbol: "POWERGRID.NS",
  },
  { Company: "Reliance Industries Ltd. (RELIANCE.NS)", Symbol: "RELIANCE.NS" },
  {
    Company: "SBI Life Insurance Company Ltd. (SBILIFE.NS)",
    Symbol: "SBILIFE.NS",
  },
  { Company: "Shriram Finance Ltd. (SHRIRAMFIN.NS)", Symbol: "SHRIRAMFIN.NS" },
  { Company: "State Bank of India (SBIN.NS)", Symbol: "SBIN.NS" },
  {
    Company: "Sun Pharmaceutical Industries Ltd. (SUNPHARMA.NS)",
    Symbol: "SUNPHARMA.NS",
  },
  { Company: "Tata Consultancy Services Ltd. (TCS.NS)", Symbol: "TCS.NS" },
  {
    Company: "Tata Consumer Products Ltd. (TATACONSUM.NS)",
    Symbol: "TATACONSUM.NS",
  },
  { Company: "Tata Motors Ltd. (TATAMOTORS.NS)", Symbol: "TATAMOTORS.NS" },
  { Company: "Tata Steel Ltd. (TATASTEEL.NS)", Symbol: "TATASTEEL.NS" },
  { Company: "Tech Mahindra Ltd. (TECHM.NS)", Symbol: "TECHM.NS" },
  { Company: "Titan Company Ltd. (TITAN.NS)", Symbol: "TITAN.NS" },
  { Company: "UltraTech Cement Ltd. (ULTRACEMCO.NS)", Symbol: "ULTRACEMCO.NS" },
  { Company: "Wipro Ltd. (WIPRO.NS)", Symbol: "WIPRO.NS" },
];

// return <li>{this.props.label + " - " + this.props.value}</li>;

const Hero = () => {
  const [ticker, setTicker] = useState("");

  const handleChange = (event) => {
    setTicker(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`First Name: ${ticker}, Last Name: ${ticker}`);
  };

  return (
    <>
      <div className="container mx-auto mt-6 p-6 flex flex-col-reverse  md:flex-row items-center">
        <div className="left flex flex-col md:w-1/2 space-y-8">
          <h1 className="text-4xl font-bold max-w-md  text-center md:text-left md:text-5xl">
            Uncovering the story behind the stock
          </h1>
          <p className="text-center max-w-sm text-darkGrayishBlue md:text-left">
            "Unveil" in this context suggests the action of revealing or bringing to light the
            hidden or underlying narrative associated with a particular stock.
          </p>

          {/* <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="p-3 bg-brightRed text-white rounded-full 
                baseline pt-2 px-6 hover:bg-brightRedLight "
            >
              Get Started
            </a>
          </div> */}
        </div>
        <div className=" right md:w-1/2">
          <img src={illustration} alt="illustration" />
        </div>
      </div>
      
        {/* <div className="collapse-title text-xl font-medium"></div> */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col py-12 justify-center items-center "
        >
          <select
            onChange={handleChange}
            value={ticker}
            className="select select-info w-full max-w-xl"
          >
            <option disabled selected>
              Stock Options
            </option>
            {json.map((item, i) => (
              <option key={i} value={item.Symbol}>
                {item.Company}
              </option>
            ))}
            {/* <option>English</option>
          <option>Japanese</option>
          <option>Italian</option> */}
          </select>
          <div className="collapse bg-base-200 my-6">
          <input type="checkbox" />
          <button type="submit" value="submit" className="btn btn-ghost btn-circle collapse-title ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
        </form>

    </>
  );
};

export default Hero;
