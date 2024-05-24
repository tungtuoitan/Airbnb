import React, { useState, useEffect } from "react";

export default function PrevBtn3({ onClick }) {
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
      onMouseEnter={handleOnMouseEnterLeave}
      onMouseLeave={handleOnMouseEnterLeave}
      onClick={(e) => onClickk(e)}
      className={`prev-btn3 left-0 absolute  border-c1 border-solid border-white
       w-12 h-12 rounded-full z100 pl-c2  y-center
     ${widthScreen >= 745 ? "" : "hidden"} 
     ${isHover ? "" : "opacity-50"}
     `}
    >
      <i
        className={`fa-solid fa-angle-left 
         ${isHover ? "rotate359 fa-lg" : "rotate0 fa-sm"}`}
        style={{ color: "white", marginRight: "4px", marginTop: "5px" }}
      ></i>
    </button>
  );
}
