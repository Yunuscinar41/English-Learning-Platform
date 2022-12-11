import React from "react";
import content from "../../assets/Home/content.png";

const Second = () => {
  return (
    <div className="flex flex-row justify-evenly mb-32">
      <div className="flex flex-col justify-start pt-12">
        <h2 className="text-6xl font-extrabold mb-6 max-w-2xl">
          Learn English for everyday situations
        </h2>
        <p className="text-first-content text-lg font-medium max-w-md leading-5 mb-6">
          Through our rotation of international teachers, you’ll be exposed to a
          wide variety of accents, all contexts, expressions and cultures.
        </p>
        <button className="w-32 bg-login text-white py-2 pl-1 rounded-md hover:opacity-80 hover:shadow-2xl hover:shadow-login mb-5">
          Start Learning
        </button>
        <hr className="border-dashed w-4/5 mb-9 mt-4" />
        <p className="text-first-content text-base font-medium max-w-sm leading-5 mb-3">
          “My time slot didn't work well, thanks to teacher's patience and tips,
          very helpful!”
        </p>
        <p className="text-first-content tracking-tighter mb-0 pb-0">
          <span className="font-black text-black">Leonardo DiCaprio</span>, 17
          years old
        </p>
      </div>
      <div>
        <img src={content} alt="content" />
      </div>
    </div>
  );
};

export default Second;
