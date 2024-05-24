import AmenlityPopUp from "./amenlityPopup";
import { useDispatch, useSelector } from "react-redux";
import NotiPopUp from "./notiPopUp";

export default function NotiContainer() {
  const isNotiOn = useSelector((s) => s.roomSlice.isNotiOn);
  return (
    <div
      className={`w-full h-full 7:p-10 px-6
      flex justify-center items-center 
      fixed top-0 left-0 zmax4 bg-black/50 overflow-none
      ${isNotiOn ? "" : "pointer-events-none opacity-0"}`}
      
    >
      <NotiPopUp/>
    </div>
  );
}
