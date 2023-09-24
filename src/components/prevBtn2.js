import React, { useState } from "react";
import { useContext } from "react";
import { IndexContext } from "../context/indexContext";
import { useSelector } from "react-redux";
import { checkIsLaptop } from "../function/checkIsLaptop";

function PrevButton2({ onClick,isHovering }) {
  const i = useContext(IndexContext)
  const hoveringIndex = useSelector(s=>s.bodySlice.hoveringIndex)
    const onClickk = (e)=>{
        e.preventDefault()
        onClick()
    }
  return (
    <button name="prev-btn"
    className={`PREV_BTN absolute  bg-white-u1 hover:bg-white w-8 h-8 rounded-full z100 pl-c2 left-c12 y-center box-shadow-u2
     ${isHovering && i ===hoveringIndex ? "" : "hidden"}
     ${checkIsLaptop()? '':'hidden'} 
     ` }
    onClick={e=>onClickk(e)}
    >
      <i name='prev-btn'
        className="fa-solid fa-angle-left fa-sm"
        style={{ color: "#222222", marginRight: "4px",marginTop:'5px' }}
      ></i>
    </button>
  );
}

export default PrevButton2;
