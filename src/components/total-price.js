import React from "react";
import Switch from "./switch";
import { useDispatch,useSelector } from "react-redux";
import { setIsTotalPrice } from "../reducer/bodySlice";
import Switch2 from "./switch2";
import Switch3 from "./switch3";

export default function  TotalPrice () {
  const widthScreen = useSelector(s=>s.header2Nav.widthScreen)
  const dispatch = useDispatch()
  const handleOnClick = ()=>{
    dispatch(setIsTotalPrice())
  }
    return (
      <div className="  cursor-pointer  7:w-full border-gray-300 border-1 border-solid    
      rounded-xl 16:rounded-lg text-c15 16:text-c14
      flex justify-between items-center  px-4 py-4 16:px-8
      totalprice 16:py-0 16:h-c50 "
      onClick={handleOnClick}>
        <div className=" 7:flex gap-c12 pb-c1">
          <p className="manrope-700  color222 text-left  pt-c1 ">
            Display total price
          </p>
          <div className="hidden 7:block w-c1 h-full bg-gray-300 text-transparent  ">
            .
          </div>
          <p className="text-gray7 text-left leading-5 mt-c2 16:mt-c1 ">{
            widthScreen>=1640 ? `Incude all fees, before taxes, on average around 10%`
            :'Incude all fees, before taxes'
          }
          </p>
        </div>
        {widthScreen >=1640 ? (<Switch3/>):(<Switch2/>)}
        
      </div>

    );
  }

