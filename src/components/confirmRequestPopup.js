import { useSelector } from "react-redux";
import ConfirmHeader from "./confirmHeader";
import ConfirmBody from "./confirmBody";
import { useState, useEffect } from "react";

export default function ConfirmRequestPopUp() {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isConfirmRequestOn = useSelector((s) => s.roomSlice.isConfirmRequestOn);
  return (
    <div
      className={`
      bg-white w-full h-calc-u2 w-calc-u2  max-w-c780
      || absolute  7:relativex
      || rounded-t-xl 7:rounded-xl overflow-hidden 
      ${
        isConfirmRequestOn && widthScreen < 745
          ? "bottom-0  trans-pop"
          : !isConfirmRequestOn && widthScreen < 745
          ? "f1 "
          : ""
      }
      ${
        isConfirmRequestOn && widthScreen >= 745
          ? "confirm-popup trans-pop"
          : !isConfirmRequestOn && widthScreen >= 745
          ? "f2"
          : ""
      }`}
    >
      <div
        className="w-full  h-calc-u2 
            overflow-auto overscroll-contain relative "
      >
        <ConfirmHeader title="Confirm and send request" />
        <ConfirmBody />
      </div>
    </div>
  );
}
