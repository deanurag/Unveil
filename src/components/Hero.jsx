import React from "react";
import unraw from "unraw";
import Card from "./Card";
import Markdown from 'react-markdown'
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

const Hero = () => {
  const [ticker, setTicker] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [cardData, setcardData] = useState([]);

  const handleChange = (event) => {
    setTicker(event.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://unveil-backend.onrender.com/summary/${ticker}`);
      if (!response.ok) {
        throw new Error("Failed to fetch summary");
      }
      const data = await response.text();
      const cleanedData = data.replace(/^"(.*)"$/, '$1');
      //console.log(cleanedData);
      setSummary(unraw(cleanedData));
    } catch (error) {
      console.error(error);
    }
    try {
      const response = await fetch(`https://unveil-backend.onrender.com/news/${ticker}`);
      if (!response.ok) {
        throw new Error("Failed to fetch summary");
      }
      const data = await response.json();
      console.log(data);
      setcardData(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="container mx-auto mt-6 p-6 flex flex-col-reverse  md:flex-row items-center">
        <div className="left flex flex-col md:w-1/2 space-y-8">
          <h1 className="text-4xl font-bold max-w-md  text-center md:text-left md:text-5xl">
            Uncovering the story behind the stock
          </h1>
          <p className="text-center max-w-sm font-sans font-semibold text-darkGrayishBlue md:text-left">
            "Unveil" in this context suggests the action of revealing or
            bringing to light the hidden or underlying narrative associated with
            a particular stock.
          </p>
        </div>
        <div className=" right md:w-1/2">
          <img src={illustration} alt="illustration" />
        </div>
      </div>

      {/* <div className="collapse-title text-xl font-medium"></div> */}
      <form
        id="Search"
        onSubmit={handleSubmit}
        className="flex flex-col py-12 justify-center items-center "
      >
        <select
          onChange={handleChange}
          value={ticker}
          className="select select-info w-full max-w-xl"
          disabled={loading}
        >
          <option disabled selected>
            Stock Options
          </option>
          {json.map((item, i) => (
            <option key={i} value={item.Symbol}>
              {item.Company}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-ghost btn-circle collapse-title"
          disabled={loading}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.518a4 4 0 00-4 4h3.518zm10.142-.707A8.004 8.004 0 0112 20.472v3.518a9.956 9.956 0 006.131-2.336l-2.959-2.959zM20.472 12h3.518a8.003 8.003 0 01-2.337 6.13l-2.96-2.96A9.969 9.969 0 0020.472 12z"
              ></path>
            </svg>
          ) : (
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
          )}
        </button>
        <div className="collapse bg-base-200 my-6">
          <input type="checkbox" />
          <div className="collapse-content">
          {summary ? <Markdown>{summary}</Markdown> : <p>No summary available</p>}
          <div className=" mx-auto md:flex-row grid grid-cols-auto md:flex align-items-center justify-center py-6 gap-5 w-[90%]">
              {cardData.map((item, i) => (
                  <Card key={i} card={item} />
              ))}
          </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Hero;
