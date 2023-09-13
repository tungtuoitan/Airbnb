import AmenlityPopUp from "./amenlityPopup";
import { useDispatch, useSelector } from "react-redux";
import NotiPopUp from "./notiPopUp";

export default function NotiContainer() {
  const isNotiOn = useSelector((s) => s.roomSlice.isNotiOn);
  return (
    <div
      className={`w-full h-full 7:p-10 
      7:flex justify-center items-center 
      || fixed top-0 left-0 zmax3 bg-black/50 overflow-hidden overscroll-contain
      ${isNotiOn ? "" : "pointer-events-none opacity-0"}`}
    >
      <NotiPopUp/>
    </div>
  );
}
