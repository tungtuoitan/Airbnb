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

export default function LeftBodyRoom() {
  const [width,setWidth] = useState(0)

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
  
  return (
    <div className="  w-full relative   "
    style={{width:`${width*2}px`}}>
      <GoodPrice />
      <TextAboutOwner />
      <SomeThingsAboutHome />
      <ShortDesc TextArr={TextAboutArr[0]} />
      <WhereYouSleep />
      <ShortAmenlities />
      <WhosComingPart/>
      <XNightsInXUI />
      
    </div>
  );
}
