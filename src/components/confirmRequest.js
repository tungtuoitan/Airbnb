import ConfirmRequestPopUp from "./confirmRequestPopup";
import PopUpFilter from "./popupFilter";
import { useDispatch, useSelector } from "react-redux";

export default function ConfirmRequest() {
    const isConfirmRequestOn = useSelector(s=>s.roomSlice.isConfirmRequestOn)
  return (
    <div
      className={`w-full h-full 7:p-10 
      7:flex justify-center items-center 
      || fixed top-0 left-0 zmax3 
      ${isConfirmRequestOn ? 'bg-black/50'
      :'pointer-events-none  bg-transparent invisiblex '}`}
    >
      <ConfirmRequestPopUp   /> 
    </div>
  );
}
