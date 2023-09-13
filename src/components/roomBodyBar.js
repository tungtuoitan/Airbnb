import ItemOnBar from "./itemOnBar";
import { useState, useRef, useEffect } from "react";

export default function RoomBodyBar() {
  const [isOn, setIsOn] = useState(false);
  const [focusOn, setFocusOn] = useState(0);

  const contRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (contRef.current) {
        if (contRef.current.offsetTop !== 0) {
          setIsOn(true);
        } else {
          setIsOn(false);
        }
      }
    };
    handleResize();
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  return (
    <div
      ref={contRef}
      className={`w-screen  bg-white overflow-hidden
      sticky top-0 absolute hidden 7:block 13:flex  justify-center 
      7:px-10 11:px-20 13:px-0  zmax3
      ${isOn ? "h-20 border-b-c1 border-solid border-gray-300" : "h-0"}`}
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
          title="Reviews"
          offset={0}
        />
        <ItemOnBar
          focusOn={focusOn}
          setFocusOn={setFocusOn}
          title="Location"
          offset={0}
        />
      </div>
    </div>
  );
}
