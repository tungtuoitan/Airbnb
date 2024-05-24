import LeftBodyRoom from "./leftBodyRoom";
import RightBodyRoom from "./rightBodyRoom";
import RoomBodyBar from "./roomBodyBar";
import RoomBottomBar from "./roomBottomBar";
import NotiContainer from "./notiContainer";
import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsBarOn } from "../reducer/roomsSlice";

export default function BodyRoom() {
  const dispatch = useDispatch();
  const contRef = useRef(null);
  const handleResize = () => {
    if (contRef.current) {
      if (contRef.current.getBoundingClientRect().top <= 0) {
        dispatch(setIsBarOn(true));
      } else {
        dispatch(setIsBarOn(false));
      }
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);
  return (
    <div ref={contRef} className="relative">
      <RoomBodyBar />
      <div className="flex w-screen justify-center   ">
        <div className="w-full px-6 7:px-10 11:px-20 13:px-0 relative 13:w-c1120 flex justify-between  ">
          <LeftBodyRoom />
          <RightBodyRoom />
        </div>
      </div>
      <NotiContainer />
      <RoomBottomBar />
    </div>
  );
}
