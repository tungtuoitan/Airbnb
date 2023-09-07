import React, { useRef, useState } from "react";
import StarIcon from "./starIcon";
import { homeList } from "../datas/homeListOriginal";
import { useContext } from "react";
import { IndexContext } from "../context/indexContext";

export default function TextGroup() {
  const i = useContext(IndexContext);

  return (
    <div className="TEXT_CONTAINER   set-row-height grid-in-detail-item text-c15  unknown-leading-15 gap-c2 ">
      <div className="manrope-700 line">
        {homeList[i].city}, {homeList[i].country}
      </div>
      <div className="text-gray7 leading-5">
        <span>Stay with {homeList[i].owner.name}</span>
        <span className="m-c4">.</span>
        <span>{homeList[i].owner.more_info.work}</span> <span></span>
      </div>
      <div className="text-gray7">Jul 22 - 27</div>
      <div className="mt-c6">
        <span className="manrope-700 mr-c4">${homeList[i].price}</span>
        <span>night</span>
      </div>
      <div className="text-right flex justify-end items-center manrope-700">
        <StarIcon />
        <p className="font-normal ">{homeList[i].owner.account.rating}</p>
      </div>
    </div>
  );
}
