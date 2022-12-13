import React from "react";
import logo from "../../assets/Home/illustrations.png";

const First = () => {
  return (
    <div className="flex flex-row justify-evenly mt-10 mb-48">
      <img src={logo} alt="logo" />
      <div className="flex flex-col justify-end">
        <div className="mb-5 text-left">
          <h1 className="text-6xl font-extrabold max-w-lg mb-10">
            Effective english courses for kids and teenagers
          </h1>
          <p className="max-w-lg text-first-content text-2xl">
            With professional teachers, flexible learning schedules and courses
            for all levels you will speak confidently in no time.
          </p>
        </div>
        <button className="bg-login pt-5 pb-5 hover:opacity-80 cursor-pointer text-white rounded-md font-bold hover:shadow-2xl hover:shadow-login">
          Start Now
        </button>
      </div>
    </div>
  );
};

export default First;
