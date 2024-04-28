import DefaultAvtIcon from "../icons/default-avt-icon";
import HamburgerIcon from "../icons/hamburger-icon";
import MenuPopUp from "./menuPopUp";
import { setIsMenuOn } from "../reducer/header1Slice";
import { useDispatch, useSelector } from "react-redux";
import Avt from "./avt";
import MenuPopUp2 from "./menuPopUp2";
import { useRef } from "react";
import GreetingText2 from "./greeting2";

export default function RightofHeader1a() {
  const contRef = useRef(null);
  const dispatch = useDispatch();
  const isLogged = useSelector((s) => s.accSlice.isLogged);
  const isMenuOn = useSelector((state) => state.header1Slice.isMenuOn);

  const handleOnClick = () => {
    dispatch(setIsMenuOn(!isMenuOn));
  };

  return (
    <div
      ref={contRef}
      className={`w-c100 flex items-center justify-end gap-4 relative`}
    >
      <GreetingText2 />
      <div
        className={` flex pl-c12 gap-c12 items-center box-shadow-u15   
    border-1 border1-gray rounded-full w-c77 h-c42 relative cursor-pointer
    `}
        onClick={handleOnClick}
      >
        <HamburgerIcon />
        {isLogged ? <Avt /> : <DefaultAvtIcon />}
        {isLogged ? <MenuPopUp2 contRef={contRef} /> : <MenuPopUp contRef={contRef} />}
      </div>
    </div>
  );
}
