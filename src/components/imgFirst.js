import React from "react";
import { useContext } from "react";
import { IndexContext } from "../context/indexContext";
import "./slider.css";
import { useSelector } from "react-redux";
import DotsSlide from "./dots-slide";

export default function ImgFirst() {
  const itemWidth = useSelector((s) => s.bodySlice.itemWidth);
  const i = useContext(IndexContext);
  const currentHomeList = useSelector((s) => s.bodySlice.currentList);

  let index;
  for (let j = 0; j < currentHomeList.length; j++) {
    if (currentHomeList[j].id === i) {
      index = j;
      break;
    }
  }
  const imgArr = currentHomeList[index].imgarr;

const lastChar = window.location.href[window.location.href.length -1 ]
  return (
    <div
      className="relative"
      style={{ width: itemWidth + "px", height: itemWidth + "px" }}
    >
      <img
        src={lastChar === "/" ? imgArr[0].replace("Airbnb/",'') : imgArr[0] }
        className="XXX m-0 max-w-full w-full h-full max-h-full object-cover   "
      />
      <DotsSlide imgArr={imgArr} currentIndex={0} />
    </div>
  );
}
