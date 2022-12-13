import React from "react";
import planet from "./planet2.png";

function Social({ click }) {
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
            className="hover:cursor-pointer text-sm px-4 py-2 hover:text-profile-hover"
          >
            Stats
          </li>
          <li
            name="Social"
            value="Social"
            onClick={() => {
              click("Social");
            }}
            className="hover:cursor-default px-4 py-2 text-sm bg-part rounded-lg"
          >
            Social
          </li>
        </ul>
      </div>
      <div className="w-1/2 bg-part p-4 rounded-lg pt-5 flex flex-row">
        <div className="pr-10">
          <ul className="flex flex-col gap-3">
            <li className="text-sm tracking-tighter text-list-color font-semibold">
              Following{"("}30{")"}
            </li>
            <li className="text-sm tracking-tighter text-list-color font-semibold">
              Followers{"("}30{")"}
            </li>
            <li className="text-sm tracking-tighter text-list-color font-semibold">
              Allies{"("}30{")"}
            </li>
          </ul>
        </div>
        <div className="border-l-[1px] border-profile-border pl-4 w-5/6 relative">
          <ul className="divide-y divide-profile-border">
            <li className="flex flex-row items-center py-3 text-sm tracking-tighter text-list-color font-semibold">
              <span className="mr-2">3kyu</span>{" "}
              <img src={planet} alt="planet" className="w-7 h-7 mr-2" /> Margot
              Robbie <p className="ml-4 absolute right-3">8,657</p>
            </li>
            <li className="flex flex-row items-center py-3 text-sm tracking-tighter text-list-color font-semibold">
              <span className="mr-2">3kyu</span>{" "}
              <img src={planet} alt="planet" className="w-7 h-7 mr-2" /> Margot
              Robbie <p className="ml-4 absolute right-3">8,657</p>
            </li>
            <li className="flex flex-row items-center py-3 text-sm tracking-tighter text-list-color font-semibold">
              <span className="mr-2">3kyu</span>{" "}
              <img src={planet} alt="planet" className="w-7 h-7 mr-2" /> Margot
              Robbie <p className="ml-4 absolute right-3">8,657</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Social;
