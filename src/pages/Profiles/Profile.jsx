import React, { useState } from "react";
import profileImg from "../../assets/Profile/profileImg.png";
import Social from "./Social";
import Stat from "./Stat";

function Profile() {
  const [state, setState] = useState("Stats");

  function handleClick(value) {
    setState(value);
  }

  return (
    <div className="bg-profile-bg text-white p-5 flex flex-col items-center">
      <div className="flex flex-row bg-part w-1/2 p-3 rounded-lg mb-5">
        <img src={profileImg} alt="profileImg" className="w-16 h-16 mr-4" />
        <div className="flex flex-col">
          <p className="mb-3">
            <span className="mr-4">Yunuscinar41</span>2,649
          </p>
          <div>
            <ul className="grid grid-cols-3 gap-x-6">
              <li className="text-sm tracking-tighter">
                <span className="text-list-color font-semibold">Name:</span>{" "}
                Yunus Emre Cinar
              </li>
              <li className="text-sm tracking-tighter">
                <span className="text-list-color font-semibold">
                  Member Since:
                </span>{" "}
                Jan 2021
              </li>
              <li className="text-sm tracking-tighter">
                <span className="text-list-color font-semibold">
                  Following:
                </span>{" "}
                30
              </li>
              <li className="text-sm tracking-tighter">
                <span className="text-list-color font-semibold">Clan:</span>{" "}
                Akdeniz University
              </li>
              <li className="text-sm tracking-tighter">
                <span className="text-list-color font-semibold">
                  Last Seen:
                </span>{" "}
                Dec 2022
              </li>
              <li className="text-sm tracking-tighter">
                <span className="text-list-color font-semibold">
                  Followers:
                </span>{" "}
                30
              </li>
              <li className="text-sm tracking-tighter">
                <span className="text-list-color font-semibold">Profiles:</span>{" "}
              </li>
              <li className="text-sm tracking-tighter">
                <span className="text-list-color font-semibold">Allies:</span>{" "}
                30
              </li>
            </ul>
          </div>
        </div>
      </div>
      {state === "Stats" ? (
        <Stat click={handleClick} />
      ) : (
        <Social click={handleClick} />
      )}
    </div>
  );
}

export default Profile;
