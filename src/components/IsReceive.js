import { useDispatch, useSelector } from "react-redux";
import { toggleIsReceive } from "../reducer/loginSlice";
import IsReceiveDiv1 from "./isReceiveDiv1";
import IsReceiveLabel from "./isReceiveLable";
import TextAirbnb from "./textAirbnb";

export default function IsReceive() {
  
  return (
    <div
      className="CONTAINER || text-c12 text-black222 text-left font-medium leading-tight 
      || mt-6  "
    >
      <TextAirbnb />

      <div className="flex items-center ||  gap-4 mt-4  pb-10 ">
        <div className="w-full h-c20 ||  " >
          <IsReceiveLabel />
        </div>
      </div>
    </div>
  );
}
