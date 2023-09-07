import React from "react";
import Switch from "./switch";
import { useDispatch,useSelector } from "react-redux";
import { setIsTotalPrice } from "../reducer/bodySlice";
import Switch2 from "./switch2";

export default function  TotalPrice () {
  const dispatch = useDispatch()
  const handleOnClick = ()=>{
    dispatch(setIsTotalPrice())
  }
    return (
      <div className="  cursor-pointer  7:w-full 
      border-gray-300 border-1 border-solid    rounded-xl text-c15 
      flex justify-between items-center  p-4 
      11:col-start-2 11:col-end-4"
      onClick={handleOnClick}>
        <div className=" 7:flex gap-c12">
          <p className="manrope-700  color222 text-left mb-c-3 ">
            Display total price
          </p>
          <div className="hidden 7:block w-c1 h-full bg-gray-300 text-transparent  ">
            .
          </div>
          <p className="text-gray7 text-left leading-5 mt-c2 ">Incude all fees, before taxes</p>
        </div>
        <Switch2/>
        
      </div>

    );
  }

