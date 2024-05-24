import AmenlityBody from "./amenlityBody";
import AmenlityHeader from "./amenlityHeader";
import DescBody from "./descBody";
import DescHeader from "./descHeader";
import { useSelector, useDispatch } from "react-redux";
import { useState,useEffect } from "react";

export default function AmenlityPopUp() {
  const isAmenlitiesOn = useSelector((s) => s.roomSlice.isAmenlitiesOn);
  const [widthScreen,setWidthScreen ] = useState(window.innerWidth)
  useEffect(()=>{
    const handleResize = () => {
      setWidthScreen(window.innerWidth)
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[])
  return (
    <div
      className={`bg-white w-full h-calc-u2 w-calc-u2  max-w-c780 
      || absolute  7:relativex
      || rounded-t-xl 7:rounded-xl overflow-hidden 
      ${isAmenlitiesOn && widthScreen <=745 ?'bottom-0  trans-pop'
      :!isAmenlitiesOn && widthScreen<=745? 'f1 ':''}
      ${isAmenlitiesOn && widthScreen>745 ?'confirm-popup trans-pop'
      :!isAmenlitiesOn && widthScreen>745 ?'f2':''}`}
    >
      <div
        className="w-full max-w-c780 h-calc-u2 overflow-x-hidden
            overflow-y-scroll overscroll-contain relative  "
      >
        <AmenlityHeader />
        <AmenlityBody/>
      </div>
    </div>
  );
}
