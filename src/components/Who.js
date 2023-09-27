import Line from "./line";
import SearchRedBtn from "./searchRedBtn";
import { useDispatch, useSelector } from "react-redux";
import { useCalculateTotalGuests } from "../hooks/useCalculateTotalGuest";
import { useState } from "react";
import { useEffect } from "react";
import { setCurrentPopUp, setIsFirstTimeOfWho } from "../reducer/searchSlice";

export default function Who() {
  const dispatch = useDispatch()
  const isFirstTimeofWho = useSelector((s) => s.searchSlice.isFirstTimeofWho);
  const currentPopUp = useSelector((s) => s.searchSlice.currentPopUp);
  const amountGuests = useCalculateTotalGuests();
  const isSearchBigOn = useSelector((s) => s.searchSlice.isSearchBigOn);
 
  const handleOnClick = ()=>{
    dispatch(setCurrentPopUp('who'))
    dispatch(setIsFirstTimeOfWho(false))
  }

  return (
    <div
      className={`h-full pl-6x 9:pl-c28x  flex  justify-between items-center 
    flex-none col-start-6 col-end-8 overflow-hidden rounded-full trans-who
    ${isSearchBigOn ? 'text-c12 pl-6 9:pl-c28':'text-c1'}
    ${
      currentPopUp === "who"
        ? `bg-white box-shadow-u14 zmax3`
        : ""
    }
    ${
      currentPopUp === ""
        ? "hover:bg-gray-200"
        : currentPopUp === "when" || currentPopUp === "where"
        ? "hover:bg-gray-300"
        : ""
    }`}
    onClick={handleOnClick}>
      <div>
        <div
          className="text-left text-black222 font-semibold leading-4
        "
        >
          Who
        </div>
        <p
          className={`whitespace-nowrap text-center 
        ${
           isFirstTimeofWho
          ?"text-gray-400"
          : "font-black text-black222 text-sm mb-c-1"
        }`}
        >
          {isFirstTimeofWho
            ? "Add guests"
            : amountGuests + " guests"
            }
        </p>
      </div>
      <SearchRedBtn />
    </div>
  );
}
