import React, { useRef, useState } from "react";
import StarIcon from "./starIcon";
import { homeList } from "../datas/homeListOriginal";
import { useContext } from "react";
import { IndexContext } from "../context/indexContext";
import useCreateList from "../hooks/useCreateList";
import dateItemSliceReducer, { pickLastDate } from "../reducer/dateItemSlice";
import fakeData from "../datas/fake-data";
import { useSelector } from "react-redux";

export default function TextGroup() {
  const i = useContext(IndexContext);
  const firstDate = useSelector((s) => s.dateItemSlice.firstDate);
  const lastDate = useSelector((s) => s.dateItemSlice.lastDate);
  const isTotalPrice = useSelector((s) => s.bodySlice.isTotalPrice);

  const currentHomeList = useCreateList().currentHomeList;
  let index;
  for (let j = 0; j < currentHomeList.length; j++) {
    if (currentHomeList[j].id === i) {
      index = j;
      break;
    }
  }
  let whenText =
    firstDate.length === 0 && lastDate.length === 0
      ? "Any week"
      : firstDate.length !== 0 && lastDate.length === 0
      ? fakeData.monthShortNames[firstDate[1]] + " " + firstDate[0] + " - ... "
      : firstDate.length === 0 && lastDate.length !== 0
      ? "... - " + fakeData.monthShortNames[lastDate[1]] + " " + lastDate[0]
      : fakeData.monthShortNames[firstDate[1]] +
        " " +
        firstDate[0] +
        " - " +
        fakeData.monthShortNames[lastDate[1]] +
        " " +
        lastDate[0];

  return (
    <div className="TEXT_CONTAINER   set-row-height grid-in-detail-item text-c15  unknown-leading-15 gap-c2 ">
      <div className="manrope-700 line">
        {currentHomeList[index].city}, {currentHomeList[index].country}
      </div>
      <div className="text-gray7 leading-5">
        <span>Stay with {currentHomeList[index].owner.name}</span>
        <span className="m-c4">.</span>
        <span>{`(${currentHomeList[index].owner.more_info.work})`}</span>{" "}
        <span></span>
      </div>
      <div className="text-gray7">{whenText}</div>
      <div className="mt-c6">
        <span className="manrope-700 mr-c4">
          ${isTotalPrice ? parseInt(currentHomeList[index].priceOneNight*1.1) : currentHomeList[index].priceOneNight }
        </span>
        <span>night</span>
      </div>
      <div className="text-right flex justify-end items-center manrope-700">
        <StarIcon />
        <p className="font-normal ">
          {currentHomeList[index].owner.account.rating}
        </p>
      </div>
    </div>
  );
}
