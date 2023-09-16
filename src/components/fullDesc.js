import DescPopUp from "./descPopUp";
import PopUpFilter from "./popupFilter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setIsDescOn } from "../reducer/roomsSlice";

export default function FullDesc() {
  const dispatch = useDispatch();
  const isDescOn = useSelector((s) => s.roomSlice.isDescOn);
  const handleOnClick = (e) => {
    if (e.target.getAttribute("name")) dispatch(setIsDescOn(false));
  };

  return (
    <div
      name="container"
      className={`w-full h-full 7:p-10 
      7:flex justify-center items-center 
      || fixed top-0 left-0 zmax3 bg-black/50 overscroll-contain 
      ${isDescOn ? "" : "pointer-events-none opacity-0"}`}
      onClick={(e) => handleOnClick(e)}
    >
      <DescPopUp />
    </div>
  );
}
