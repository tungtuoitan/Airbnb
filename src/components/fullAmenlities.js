import AmenlityPopUp from "./amenlityPopup";
import DescPopUp from "./descPopUp";
import { useDispatch, useSelector } from "react-redux";
import { setIsAmenlitiesOn } from "../reducer/roomsSlice";

export default function FullAmenlities() {
  const dispatch = useDispatch()
  const handleOnClick = (e)=>{
    if(e.target.getAttribute('name')==='container'){
      dispatch(setIsAmenlitiesOn())
    }
  }
  const isAmenlitiesOn = useSelector((s) => s.roomSlice.isAmenlitiesOn);
  return (
    <div name='container'
      className={`w-full h-full 7:p-10 
      7:flex justify-center items-center 
      || fixed top-0 left-0 zmax3 bg-black/50 overflow-scroll overscroll-contain
      ${isAmenlitiesOn ? "" : "pointer-events-none opacity-0"}`}
      onClick={(e)=>{handleOnClick(e)}}
    >
      <AmenlityPopUp/>
    </div>
  );
}
