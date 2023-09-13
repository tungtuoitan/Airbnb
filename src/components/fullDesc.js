import DescPopUp from "./descPopUp";
import PopUpFilter from "./popupFilter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function FullDesc() {
  const isDescOn = useSelector((s) => s.roomSlice.isDescOn);
  
  return (
    <div
      className={`w-full h-full 7:p-10 
      7:flex justify-center items-center 
      || fixed top-0 left-0 zmax3 bg-black/50 overscroll-contain
      ${isDescOn ? "" : "pointer-events-none opacity-0"}`}
    >
      <DescPopUp />
    </div>
  );
}
