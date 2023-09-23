import { useDispatch, useSelector } from "react-redux";
import fakeData from "../datas/fake-data";
import { setCurrentPopUp } from "../reducer/searchSlice";
import { resetFirstDate } from "../reducer/dateItemSlice";
import { useEffect } from "react";

export default function CheckIn() {
  const firstDate = useSelector((s) => s.dateItemSlice.firstDate);
  const lastDate = useSelector((s) => s.dateItemSlice.lastDate);
  const currentPopUp = useSelector((s) => s.searchSlice.currentPopUp);
  const isSearchBigOn = useSelector((s) => s.searchSlice.isSearchBigOn);
  const dispatch = useDispatch();

  const handleOnClick = () => {
      dispatch(setCurrentPopUp("when"));
  };

  let firstDateText =
    firstDate.length === 0
      ? "Add dates"
      : fakeData.monthShortNames[firstDate[1]].slice(0, 3) + " " + firstDate[0];

  let lastDateText =
    lastDate.length === 0
      ? "Add dates"
      : fakeData.monthShortNames[lastDate[1]].slice(0, 3) + " " + lastDate[0];

  return (
    <div
      className={`h-full text-c12   flex-none  
      w-full text-left flex justify-start items-center
      rounded-full overflow-visible flex col-start-4 col-end-6
      ${isSearchBigOn ? 'text-c12':'text-c1'}
      
      ${currentPopUp === "when" ? `bg-white box-shadow-u14 zmax3` : ""}
      ${
        currentPopUp === ""
          ? "hover:bg-gray-200"
          : currentPopUp === "where" || currentPopUp === "who"
          ? "hover:bg-gray-300"
          : ""
      }`}
      onClick={handleOnClick}
    >
      <div className={` pl-c20 border-r-1 border-solid border-gray-300 
      ${isSearchBigOn ? 'w-full':'w-c1'}`}>
        <div
          className="text-center text-black222 font-bold leading-4 whitespace-nowrap
         "
        >
          Check in
        </div>
        <p
          className={`whitespace-nowrap text-center 
          ${
            firstDateText === "Add dates"
              ? "text-gray-400"
              : "font-black text-black222 text-smx mb-c-1"
          }`}
        >
          {firstDateText}
        </p>
      </div>

      <div className={` pr-c20 border-r-1 border-solid border-gray-300 
      ${isSearchBigOn ? 'w-full':'w-c1'}`}>
        <div className="text-center text-black222 font-semibold leading-4 whitespace-nowrap  ">
          Check out
        </div>
        <p
          className={`whitespace-nowrap text-center 
          ${
            lastDateText === "Add dates"
              ? "text-gray-400"
              : "font-black text-black222 text-sm mb-c-1"
          }`}
        >
          {lastDateText}
        </p>
      </div>
    </div>
  );
}
