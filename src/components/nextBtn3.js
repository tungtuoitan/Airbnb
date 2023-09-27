import { useState,useEffect } from "react";

export default function NextButton3({ onClick }) {
  const [isHover, setIsHover] = useState(false);
  const handleOnMouseEnterLeave = () => setIsHover(!isHover);
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
  const onClickk = (e) => {
    e.preventDefault();
    onClick();
  };
  return (
    <button
      className={`next-btn3 absolute    w-12 h-12 border-white border-solid border-c1
      rounded-full  y-center   z100 
      ${widthScreen >= 745 ? "" : "hidden"} 
   ${isHover ? "" : "opacity-50"}`}
      onMouseEnter={handleOnMouseEnterLeave}
      onMouseLeave={handleOnMouseEnterLeave}
      onClick={(e) => onClickk(e)}
    >
      <i
        className={`fa-solid fa-angle-right 
         ${isHover ? "rotate359 fa-lg" : "rotate0 fa-sm"}`}
        style={{ color: "white", marginLeft: "0" }}
      ></i>
    </button>
  );
}
