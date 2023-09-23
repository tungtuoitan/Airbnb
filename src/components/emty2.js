
import { useState,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux";
import { setWidthScreen } from "../reducer/header2NavSlice";

export default function Emty2(){
    const dispatch = useDispatch()
    const widthScreen = useSelector(s=>s.header2Nav.widthScreen)


    useEffect(() => {
        const handleResize = () => {
          dispatch(setWidthScreen(window.innerWidth))
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      },[]);

    return <div className={`h-full bg-black
    ${widthScreen >=1640 ? 'emty2':'7:w-c82'}`}></div>
    
}