import React from "react";
import logo from "../../assets/Home/logo.png";

const Header = () => {
  return (
    <div className="flex flex-row align-baseline px-16 py-10">
      <img src={logo} alt="logo" />
      <div className="flex md:flex md:flex-grow flex-row justify-end space-x-1 pr-6 gap-6 text-lg font-bold">
        <span className="text-login cursor-pointer hover:opacity-70">
          Log in
        </span>
        <span className="text-login cursor-pointer hover:opacity-70">
          Sign Up
        </span>
      </div>
    </div>
  );
};

export default Header;
