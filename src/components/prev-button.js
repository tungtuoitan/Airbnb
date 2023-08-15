import React, { useState } from "react";
function PrevButton({ onClick, isPrevBtnDisplay,isHovering }) {
  return (
    <button
    className={`PREV_BTN absolute  bg-white-u1 hover:bg-white w-8 h-8 rounded-full z100 pl-c2 left-2 y-center box-shadow-u2
    ${isPrevBtnDisplay === true ? "block" : "hidden"}
     ${isHovering === true ? "" : "hidden"} 
     ` }
    onClick={onClick}
    >
      <i
        class="fa-solid fa-angle-left fa-sm"
        style={{ color: "#222222", marginRight: "4px",marginTop:'5px' }}
      ></i>
    </button>
  );
}

export default PrevButton;
