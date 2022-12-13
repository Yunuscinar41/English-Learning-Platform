import React from "react";
import progressIcon from "../../assets/Profile/improve.png";

function Stat({ click }) {
  return (
    <>
      <div className="mb-3 w-1/2">
        <ul className="flex flex-row gap-5 content-start">
          <li
            name="Stats"
            value="Stats"
            onClick={() => {
              click("Stats");
            }}
            className="hover:cursor-default bg-part px-4 py-2 text-sm rounded-lg"
          >
            Stats
          </li>
          <li
            name="Social"
            value="Social"
            onClick={() => {
              click("Social");
            }}
            className="hover:cursor-pointer text-sm px-4 py-2 hover:text-profile-hover"
          >
            Social
          </li>
        </ul>
      </div>
      <div className="flex flex-row bg-part w-1/2 p-4 rounded-lg relative">
        <div className="flex flex-row pt-4 pb-8">
          <div className="flex flex-row ">
            <img src={progressIcon} className="w-20 h-20" />
            <div className="ml-5">
              <h1 className="mb-2 text-lg font-medium">Progress</h1>
              <ul>
                <li className="text-sm tracking-tighter">
                  <span className="text-list-color font-semibold">Rank:</span>{" "}
                  2,649
                </li>
                <li className="text-sm tracking-tighter">
                  <span className="text-list-color font-semibold">Honor:</span>{" "}
                  3kyu
                </li>
                <li className="text-sm tracking-tighter">
                  <span className="text-list-color font-semibold">
                    Leaderboard Position:{" "}
                  </span>{" "}
                  #4,085
                </li>
                <li className="text-sm tracking-tighter">
                  <span className="text-list-color font-semibold">
                    Honor Percentile:{" "}
                  </span>
                  Top 0.840%
                </li>
                <li className="text-sm tracking-tighter">
                  <span className="text-list-color font-semibold">
                    Total Completed Kata:{" "}
                  </span>{" "}
                  457
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute right-16">
            <ul>
              <li className="text-sm tracking-tighter">
                <span className="text-list-color font-semibold">Overall: </span>{" "}
                / 65.4%
              </li>
              <li className="text-sm tracking-tighter">
                <span className="text-list-color font-semibold">C#: </span> /
                39.2%
              </li>
              <li className="text-sm tracking-tighter">
                <span className="text-list-color font-semibold">Go: </span> /
                10.%
              </li>
              <li className="text-sm tracking-tighter">
                <span className="text-list-color font-semibold">Java: </span> /
                28.7%
              </li>
              <li className="text-sm tracking-tighter">
                <span className="text-list-color font-semibold">
                  JavaScript:{" "}
                </span>{" "}
                / 4.1%
              </li>
              <li className="text-sm tracking-tighter">
                <span className="text-list-color font-semibold">Kotlin: </span>{" "}
                / 0.7%
              </li>
              <li className="text-sm tracking-tighter">
                <span className="text-list-color font-semibold">Python: </span>{" "}
                / 62.5%
              </li>
              <li className="text-sm tracking-tighter">
                <span className="text-list-color font-semibold">SQL: </span> /
                63.4%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stat;
