import React from "react";
import firstImg from "../../assets/Home/firstImg.png";
import secondImg from "../../assets/Home/secondImg.png";
import thirdImg from "../../assets/Home/thirdImg.png";
import Card from "../Home/Card";
import { firstContent, secondContent, thirdContent } from "../../Data/contents";

const Third = () => {
  return (
    <div className="flex flex-col items-center mb-44">
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-extrabold mb-5">
          Top-notch teachers, limitless learning
        </h1>
        <p className="text-first-content max-w-md font-semibold text-lg tracking-tight leading-6 text-center mb-28">
          Language learning on your schedule, with teachers you can trust. For
          language learners just like you.
        </p>
      </div>
      <div className="flex flex-row gap-x-40">
        <Card
          img={firstImg}
          head={firstContent.head}
          context={firstContent.context}
        />
        <Card
          img={secondImg}
          head={secondContent.head}
          context={secondContent.context}
        />
        <Card
          img={thirdImg}
          head={thirdContent.head}
          context={thirdContent.context}
        />
      </div>
    </div>
  );
};

export default Third;
