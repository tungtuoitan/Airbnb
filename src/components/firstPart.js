import { useSelector } from "react-redux";
import TextAmini from "./textAmini";
import fakeData from "../datas/fake-data";
import { truncateText } from "../function/makeTextShorter";
import {useState,useEffect} from 'react'

export default function FirstPart() {
  const currentHomeList = useSelector((s) => s.bodySlice.currentList);
  const currentHomeId = useSelector((s) => s.roomSlice.currentHomeId);
  const curHome = currentHomeList[currentHomeId];
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
      className="w-full  flex  gap-4 mt-6 pb-6 border-b-c1 border-solid border-gray-300"
    >
      <img className="rounded-lg w-c126 h-c104" src={`${curHome.imgarr[0].replace("Airbnb/","")}`} />
      <div className=" h-c104 flex flex-col justify-between ">
        <div className="text-left">
          <p className="text-gray-400 text-c12">{curHome.property_type}</p>
          <p className="text-c14 text-black22 ">
            {curHome.name} - { widthScreen <=400 
            ? truncateText(fakeData.descAboutHomeArr[currentHomeId],40)
          : fakeData.descAboutHomeArr[currentHomeId]} 
          </p>
        </div>
        <TextAmini />
      </div>
    </div>
  );
}
