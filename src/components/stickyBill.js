import FinalPriceCalculate from "./finalPriceCalculate";
import FirstPartOfBill from "./firstPartOfBill";
import MainInfo from "./mainInfo";
import XBtn from "./xBtn";
import { calculateTotalNights } from "../function/calculateTotalNight"; 
import {useState,useEffect,useRef} from 'react'

export default function StickyBill() {
  const refBill = useRef(null)
  
  const totalNights = calculateTotalNights();
  return (
    <div ref={refBill}
      className="w-full  bg-white rounded-xl 
        border-c1 border-solid border-gray-300
        sticky top-c120 ml- p-6 box-shadow-u12"
    >
      <FirstPartOfBill />
      <MainInfo />
      <XBtn />  
      {totalNights === "?" ? <></> : <FinalPriceCalculate />}
    </div>
  );
}
