import React from "react";
import { useDispatch } from "react-redux";
import { setIsDescOn } from "../reducer/roomsSlice";

export default function ShowMoreBtn() {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setIsDescOn());
  };
  return (
    <button
      className=" flex items-center justify-center gap-c5 "
      onClick={handleOnClick}
    >
      <span className="font-4 underline font-bold">Show more</span>
      <i className="fa-solid fa-angle-right fa-xs mt-c2 fa-"></i>
    </button>
  );
}
