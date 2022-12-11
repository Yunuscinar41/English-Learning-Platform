import React from "react";
import planet1 from "../../assets/Home/planet1.png";
import planet2 from "../../assets/Home/planet2.png";
import planet3 from "../../assets/Home/planet3.png";

const Fifth = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex flex-col">
        <h1 className="font-black text-8xl max-w-3xl mb-8">
          Upgrade your language skills with our team
        </h1>
        <p className="text-first-content text-2xl leading-7 max-w-md font-medium">
          Our native-level teachers are located worldwide. Book them online by
          either following our curriculum or by choosing the order yourself for
          greater flexibility.
        </p>
        <div className="mt-12">
          <input
            placeholder="Enter your email address"
            className="outline outline-offset-1 outline-1 outline-first-content px-3 py-3 rounded-md tracking-tighter "
          />
          <button className="ml-3 bg-login text-white py-3 px-1 w-28 rounded-md hover:opacity-80 hover:shadow-2xl hover:shadow-login text-md font-medium tracking-normal">
            Join Now
          </button>
        </div>
      </div>
      <div className="w-1/5 h-96 relative">
        <img
          src={planet3}
          alt="planet3"
          className="absolute -left-40 -top-40 max-w-2xl"
        />
        <img
          src={planet2}
          alt="planet2"
          className="absolute top-10 -right-28"
        />
        <img
          src={planet1}
          alt="planet1"
          className="absolute max-w-2xl -bottom-28"
        />
      </div>
    </div>
  );
};

export default Fifth;
