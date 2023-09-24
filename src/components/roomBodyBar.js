import ItemOnBar from "./itemOnBar";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsBarOn } from "../reducer/roomsSlice";
import XBtn from "./xBtn";
import FirstPartOfBill from "./firstPartOfBill";
import Price from "./pricePart";
import Price3 from "./price3";
import XBtnC from "./xBtnC";

export default function RoomBodyBar() {
  const isOn = useSelector((s) => s.roomSlice.isBarOn);
  const dispatch = useDispatch();
  const [focusOn, setFocusOn] = useState(0);
  const isBtnInViewPort = useSelector((s) => s.roomSlice.isBtnInViewPort);

  return (
    <div
      className={`w-full  mb-c-80  bg-white overflow-hidden
       top-0 fixed hidden 7:block 13:flex  justify-center 
      7:px-10 11:px-20 13:px-0  zmax3 h-20 border-b-c1 border-solid border-gray-300
      ${isOn ? "" : "7:hidden 13:hidden"}`}
    >
      <div className="flex relative  gap-6 justify-start items-center h-full 13:w-c1120 ">
        <ItemOnBar
          focusOn={focusOn}
          setFocusOn={setFocusOn}
          title="Photos"
          offset={-80}
        />
        <ItemOnBar
          focusOn={focusOn}
          setFocusOn={setFocusOn}
          title="Amenities"
          offset={-80}
        />
        <ItemOnBar
          focusOn={focusOn}
          setFocusOn={setFocusOn}
          title="Who's Coming"
          offset={-80}
        />
        <ItemOnBar
          focusOn={focusOn}
          setFocusOn={setFocusOn}
          title="About Your Host"
          offset={-78}
        />
        <div
          className={`absolute right-0 flex gap-4  h-full items-center
      ${isBtnInViewPort ? "hidden" : ""}`}
        >
          <Price3 />
          <div className="mb-c-24">
            <XBtnC />
          </div>
        </div>
      </div>
    </div>
  );
}
