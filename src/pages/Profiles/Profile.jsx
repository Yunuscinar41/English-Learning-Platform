import React, { useState } from "react";
import profileImg from "../../assets/Profile/profileImg.png";
import Social from "./Social";
import Stat from "./Stat";

function Profile() {
  const [state, setState] = useState("Stats");

  function handleClick(value) {
    setState(value);
  }

  // const stat = function showStats() {
  //   return (
  //     <div className="flex flex-row bg-part w-1/2 p-4 rounded-lg relative">
  //       <div className="flex flex-row pt-4 pb-8">
  //         <div className="flex flex-row ">
  //           <img src={progressIcon} className="w-20 h-20" />
  //           <div className="ml-5">
  //             <h1 className="mb-2 text-lg font-medium">Progress</h1>
  //             <ul>
  //               <li className="text-sm tracking-tighter">
  //                 <span className="text-list-color font-semibold">Rank:</span>{" "}
  //                 2,649
  //               </li>
  //               <li className="text-sm tracking-tighter">
  //                 <span className="text-list-color font-semibold">Honor:</span>{" "}
  //                 3kyu
  //               </li>
  //               <li className="text-sm tracking-tighter">
  //                 <span className="text-list-color font-semibold">
  //                   Leaderboard Position:{" "}
  //                 </span>{" "}
  //                 #4,085
  //               </li>
  //               <li className="text-sm tracking-tighter">
  //                 <span className="text-list-color font-semibold">
  //                   Honor Percentile:{" "}
  //                 </span>
  //                 Top 0.840%
  //               </li>
  //               <li className="text-sm tracking-tighter">
  //                 <span className="text-list-color font-semibold">
  //                   Total Completed Kata:{" "}
  //                 </span>{" "}
  //                 457
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //         <div className="absolute right-16">
  //           <ul>
  //             <li className="text-sm tracking-tighter">
  //               <span className="text-list-color font-semibold">Overall: </span>{" "}
  //               / 65.4%
  //             </li>
  //             <li className="text-sm tracking-tighter">
  //               <span className="text-list-color font-semibold">C#: </span> /
  //               39.2%
  //             </li>
  //             <li className="text-sm tracking-tighter">
  //               <span className="text-list-color font-semibold">Go: </span> /
  //               10.%
  //             </li>
  //             <li className="text-sm tracking-tighter">
  //               <span className="text-list-color font-semibold">Java: </span> /
  //               28.7%
  //             </li>
  //             <li className="text-sm tracking-tighter">
  //               <span className="text-list-color font-semibold">
  //                 JavaScript:{" "}
  //               </span>{" "}
  //               / 4.1%
  //             </li>
  //             <li className="text-sm tracking-tighter">
  //               <span className="text-list-color font-semibold">Kotlin: </span>{" "}
  //               / 0.7%
  //             </li>
  //             <li className="text-sm tracking-tighter">
  //               <span className="text-list-color font-semibold">Python: </span>{" "}
  //               / 62.5%
  //             </li>
  //             <li className="text-sm tracking-tighter">
  //               <span className="text-list-color font-semibold">SQL: </span> /
  //               63.4%
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // const social = function showSocial() {
  //   return <div>Thaaa</div>;
  // };

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
