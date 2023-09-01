import React from "react";
import Switch from "./switch";

export default function BookingItem ({title,content}){
    return (
      <div className="    7:w-full  text-c15 flex justify-between items-center py-c12 mt-c4 ">
        <div className=" 7:flex gap-c12">
          <p className="text-medium color222 text-left mb-c-3 ">
            {title}
          </p>
          <div className="hidden 7:block w-c1 h-full bg-gray-300 text-transparent  ">
            .
          </div>
          <p className="text-gray7 text-left text-sm leading-5 mt-c2 ">{content}</p>
        </div>
        <div className="pl-2">

        <Switch/>
        </div>
        
      </div>

    );
  }

