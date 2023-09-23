import React from "react";
import locationTypeArr from "../datas/location.js";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayingIndex } from "../reducer/footerSlice.js";

export default function ListLocationType() {
  const dispatch = useDispatch();
  const displayingIndex = useSelector(
    (state) => state.footerSlice.displayingIndex
  );
  const onClickLocationType = (index) => {
    dispatch(setDisplayingIndex(index));
  };
  return (
    <>
      {locationTypeArr.map((item, index) => {
        return (
          <li
            onClick={() => {
              onClickLocationType(index);
            }}
            key={index}
            className={`flex pr-6 py-c7 whitespace-nowrap   cursor-pointer hover:text-black222  relative ${
              index === displayingIndex
                ? "color222     after-w-calc  after:h-c2 after:absolute bg222-after after:top-c43  "
                : ""
            } `}
          >
            {item.locationType}
          </li>
        );
      })}
    </>
  );
}
