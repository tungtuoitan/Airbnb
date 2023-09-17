import Line from "./line";
import SearchRedBtn from "./searchRedBtn";
import { useDispatch, useSelector } from "react-redux";
import { useCalculateTotalGuests } from "../hooks/useCalculateTotalGuest";
import { useState } from "react";
import { useEffect } from "react";
import { setCurrentPopUp } from "../reducer/searchSlice";

export default function Who() {
  const dispatch = useDispatch()
  const currentPopUp = useSelector((s) => s.searchSlice.currentPopUp);
  const amountGuests = useCalculateTotalGuests();
  const [isFirstTime, setIsFirstTime] = useState(true);
 
  const handleOnClick = ()=>{
    dispatch(setCurrentPopUp('who'))
    setIsFirstTime(false)
  }

  return (
    <div
      className={`h-full pl-6 9:pl-c28 text-c12 flex  justify-between items-center 
    flex-none col-start-6 col-end-8 overflow-visible rounded-full
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
          currentPopUp === "who" || !isFirstTime
          ? "font-black text-black222 text-sm mb-c-1"
            : "text-gray-400"
        }`}
        >
          {isFirstTime
            ? "Add guests"
            : amountGuests + " guests"
            }
        </p>
      </div>
      <SearchRedBtn />
    </div>
  );
}
