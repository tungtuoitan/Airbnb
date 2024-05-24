import ConfirmPopUp from "./confirmPopUp";
import { useSelector } from "react-redux";
export default function Confirm() {

  const isConfirmOpen = useSelector((state) => state.loginSlice.isConfirmOpen);

  return (
    <div
      className={`CONFIRM_CONT w-full h-screen left-0 fixed  top-c-2 zmax3  justify-center items-center bg-black/50 border-0 transition-all 
     ${isConfirmOpen ? "7:flex" : "hidden"}`}
    >
      <ConfirmPopUp />
    </div>
  );
}
