import React from "react";
import ShowMoreBtn from "./show-more-btn";
import FullDesc from "./fullDesc";

export default function ShortDesc({ TextArr }) {
  return (
    <div className=" pt-8 text-left">
      <div className="pb-8 border-b-1 border-solid border-gray-300">
        <p className="text-base color222 mb-c10">{TextArr[0]}</p>
        <ShowMoreBtn />
      </div>
      <FullDesc />
    </div>
  );
}
