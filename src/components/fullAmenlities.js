import AmenlityPopUp from "./amenlityPopup";
import DescPopUp from "./descPopUp";
import { useDispatch, useSelector } from "react-redux";

export default function FullAmenlities() {
  const isAmenlitiesOn = useSelector((s) => s.roomSlice.isAmenlitiesOn);
  return (
    <div
      className={`w-full h-full 7:p-10 
      7:flex justify-center items-center 
      || fixed top-0 left-0 zmax3 bg-black/50
      ${isAmenlitiesOn ? "" : "pointer-events-none opacity-0"}`}
    >
      <AmenlityPopUp/>
    </div>
  );
}
