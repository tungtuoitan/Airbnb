import React, { useState } from "react";
function PrevButton2({ onClick,isHovering }) {
    const onClickk = (e)=>{
        e.preventDefault()
        onClick()
    }
  return (
    <button
    className={`PREV_BTN absolute  bg-white-u1 hover:bg-white w-8 h-8 rounded-full z100 pl-c2 left-c12 y-center box-shadow-u2
     ${isHovering === true ? "" : "hidden"} 
     ` }
    onClick={e=>onClickk(e)}
    >
      <i
        className="fa-solid fa-angle-left fa-sm"
        style={{ color: "#222222", marginRight: "4px",marginTop:'5px' }}
      ></i>
    </button>
  );
}

export default PrevButton2;
