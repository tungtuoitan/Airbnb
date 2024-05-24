import RightArrowBtn from "./rightArrowBtn";
import {useDispatch,useSelector} from 'react-redux'
import { useState } from "react";

export default function ArrowRight({rightArrowDisplay}){
    return(
        <div
        className={`ARROW_RIGHT    hidden 7:flex  w-16 h-20 ml-8  gradient-white-toleft cursor-pointer           justify-end items-center   top-0   color222 ${
          rightArrowDisplay === true ? "7:opacity-100" : "7:opacity-0"
        }
              ${
                rightArrowDisplay === true
                  ? "pointer-events-auto"
                  : "pointer-events-none"
              }`}
      >
        <RightArrowBtn />
      </div>
    )
}