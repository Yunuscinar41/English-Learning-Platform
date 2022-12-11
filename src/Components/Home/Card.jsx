import React from "react";

const Card = ({ img, head, context }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={img} alt="feature" className="mb-3" />
      <span className="font-black text-2xl">{head}</span>
      <p className="text-first-content font-medium text-center tracking-tighter max-w-xs mt-3 px-10 leading-5">
        {context}
      </p>
    </div>
  );
};

export default Card;
