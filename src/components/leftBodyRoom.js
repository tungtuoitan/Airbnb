import ShortDesc from "./shortDesc";
import XNightsInX from "../components/x-nights-in-x";
import WhereYouSleep from "../components/whereYouSleep";
import TextAboutOwner from "../components/TextAboutOwner";
import GoodPrice from "../components/good-price";
import SomeThingsAboutHome from "./someInforAboutHome";
import { homeFeatureIcons } from "./someInfosAboutHomeArr";
import MeetYourHost from "../components/meet-your-host";
import ShortAmenlities from "./shortAmenlities";
import { TextAboutArr } from "./TextAboutArr";
import FullDesc from "./fullDesc";
import XNightsInXUI from "./xNightInXUI";
import WhosComing from "./search-popup-mobile/whos-coming";
import WhoPopUps from "./search-popup-mobile/whoPopups";
import WhosComingPart from "./search-popup-mobile/whosComingPart";
import WhosComingLaptop from "./search-popup-mobile/whosComingLaptop";
import {useState,useEffect,useRef} from 'react'
import { useDispatch,useSelector } from "react-redux";
import { setIsSticked } from "../reducer/roomsSlice";

export default function LeftBodyRoom() {

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth / 3.5 > 360) {
        setWidth(360);
      } else if (window.innerWidth / 3.5 < 230) {
        setWidth(230);
      } else {
        setWidth(window.innerWidth / 3.5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(()=>{
    const handleScroll = () => {
      const rect = leftRef.current.getBoundingClientRect()
      if(rect.top<=90 && (window.innerHeight - rect.bottom)<=0){
        dispatch(setIsSticked('sticked'))
      }else if(rect.top<=90 && (window.innerHeight - rect.bottom)>0){
        dispatch(setIsSticked('absolute'))
      }
      else{
        dispatch(setIsSticked(false))
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  })
  return (
    <div  ref = {leftRef} className="  w-full relative pr-c60  "
    style={{width:`calc(100% - ${width}px)`}}>
      <GoodPrice />
      <TextAboutOwner />
      <SomeThingsAboutHome />
      <ShortDesc TextArr={TextAboutArr[0]} />
      <WhereYouSleep />
      <ShortAmenlities />
      <WhosComingPart />
      <WhosComingLaptop />
      <XNightsInXUI />
      
    </div>
  );
}
