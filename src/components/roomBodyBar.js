import ItemOnBar from "./itemOnBar";
import { useState, useRef, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setIsBarOn } from "../reducer/roomsSlice";

export default function RoomBodyBar() {
  const isOn = useSelector(s=>s.roomSlice.isBarOn)
  const dispatch = useDispatch()
  const [focusOn, setFocusOn] = useState(0);

  return (
    <div
     
      className={`w-full mb-c-80  bg-white overflow-hidden
       top-0 fixed hidden 7:block 13:flex  justify-center 
      7:px-10 11:px-20 13:px-0  zmax3 h-20 border-b-c1 border-solid border-gray-300
      ${isOn ? "" : "7:hidden 13:hidden"}`}
    >
      <div className="flex gap-6 justify-start items-center h-full 13:w-c1120 ">
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
      </div>
    </div>
  );
}
