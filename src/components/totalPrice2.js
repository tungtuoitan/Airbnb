import React from "react";
import Switch from "./switch";
import { useDispatch,useSelector } from "react-redux";
import { setIsTotalPrice } from "../reducer/bodySlice";
import Switch2 from "./switch2";
import Switch3 from "./switch3";

export default function  TotalPrice2 () {
  const widthScreen = useSelector(s=>s.header2Nav.widthScreen)
  const dispatch = useDispatch()
  const handleOnClick = ()=>{
    dispatch(setIsTotalPrice())
  }
    return (
      <div className="totalprice  cursor-pointer  hidden   w-c220 
      border-gray-300 border-1 border-solid    hover:border-black222
      16:rounded-xl text-c15 16:text-c14 bg-white
      16:flex justify-between items-center px-4 h-c48   16:py-0 ml-4 "
      onClick={handleOnClick}>
        <div className=" 7:flex gap-c12 pb-c1">
          <p className="font-size12 font-bold color222 text-left  pt-c1 ">
            Display total price
          </p>
        </div>
        <Switch3/>
        
      </div>

    );
  }

