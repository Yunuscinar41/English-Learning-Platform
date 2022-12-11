import React from "react";
import pic from "../../assets/Home/pic.png";
import Vector from "../../assets/Home/Vector.png";

const Fourth = () => {
  return (
    <div className="relative mb-40">
      <div className="flex flex-row items-center justify-center">
        <img src={pic} alt="pic" className="pb-1" />
        <div className="ml-24">
          <p className="text-4xl max-w-md mb-4">
            “Your platform gave me an amazing opportunity to form a new habit to
            learn language regularly and of course improve my language skills. I
            received a letter with congratulations from the team.”
          </p>
          <p className="text-first-content font-normal tracking-tight">
            <span className="font-bold text-black tracking-tighter">
              Margot Robbie
            </span>
            , 16 years old
          </p>
        </div>
      </div>
      <img
        src={Vector}
        alt="vector"
        className="absolute left-80 -bottom-20 -z-10"
      />
    </div>
  );
};

export default Fourth;
