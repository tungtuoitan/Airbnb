import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react'

export default function SearchBoxLaptop({currentState,handleOnClickSearchBox}) {

const handleOnClickAnywhere = ()=>{}
  return (
    <div className={`SEARCH_BOX_LAPTOP   h-12     inline-flex justify-center items-center  
    rounded-full border-gray-200 border-1 w-auto shadow-searchbox text-sm font-semibold 
    color222  

    `}
    onClick={handleOnClickSearchBox}
    >
      <div className="  ml-2 flex h-full">
        <div className=" w-22  px-4  flex items-center pb-c2  "
        onClick={()=>{handleOnClickAnywhere()}}
        >
          Anywhere
        </div>
        <div className=" border-r-1 border-gray-200 border-solid my-c10"></div>
        <div className=" w-22 px-4  flex items-center    pb-c2 ">
          Any week
        </div>
        <div className=" border-r-1 border-gray-200 border-solid my-c10"></div>

        <div className=" w-22  pl-4 pr-2 font-light color71  flex items-center  pb-c2 ">Add guests</div>
      </div>
      <div className=" bg-main-color w-8 h-8 rounded-2xl text-white flex justify-center align items-center m-c7   ">
        <i class="fa-solid fa-magnifying-glass fa-xs"></i>
      </div>
    </div>
  );
}
