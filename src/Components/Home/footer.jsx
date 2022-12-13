import React from "react";
import send_icon from "../../assets/Home/send-icon.png";
import facebook from "../../assets/Home/facebook.png";
import twitter from "../../assets/Home/twitter-alt.png";
import youtube from "../../assets/Home/youtube.png";

const Footer = () => {
  return (
    <div className="bg-lift-blue flex flex-col items-center mt-40">
      <div className="mt-14 flex flex-row items-center mb-44">
        <span className="mr-6 font-semibold text-lg">Newsletter</span>
        <div className="flex flex-row items-center bg-white p-4 rounded-full pl-7">
          <input
            placeholder="Your email"
            className="outline outline-none font-semibold text-xl w-80"
          />
          <button className="hover:shadow-2xl hover:shadow-send-icon rounded-full">
            <img src={send_icon} alt="send icon w" />
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-16 mb-7">
        <span className="font-semibold cursor-pointer hover:opacity-70">
          Home
        </span>
        <span className="font-semibold cursor-pointer hover:opacity-70">
          Experience
        </span>
        <span className="font-semibold cursor-pointer hover:opacity-70">
          News
        </span>
        <span className="font-semibold cursor-pointer hover:opacity-70">
          About us
        </span>
        <span className="font-semibold cursor-pointer hover:opacity-70">
          Jobs
        </span>
        <span className="font-semibold cursor-pointer hover:opacity-70">
          Contact
        </span>
      </div>
      <div className="flex flex-row gap-7 mb-7">
        <img src={facebook} alt="facebook icon" />
        <img src={twitter} alt="twitter icon" />
        <img src={youtube} alt="youtube icon" />
      </div>
      <p className="text-first-content mb-24">© Copyright 2019 - Lift Media</p>
    </div>
  );
};

export default Footer;
