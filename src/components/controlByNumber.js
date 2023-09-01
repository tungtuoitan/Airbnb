import { useState, useEffect } from "react";
import InputLeft from "./inputLeft";
import PriceBox from "./priceBox";

export default function ControlByNumber() {
  return (
    <div className="w-full mt-c-20 7:mt-c-10 
    || flex justify-between items-center gap-6">
      <PriceBox title='Minimum'/>
      <div className='h-c1 w-10 bg-gray-400 '></div>
      <PriceBox title='Maximum'/>
    </div>
  );
}
