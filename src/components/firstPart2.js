import { useSelector, useDispatch } from "react-redux";
import useCreateList from "../hooks/useCreateList";
import { unstable_createMuiStrictModeTheme } from "@mui/material";
import TextA from "./textA";
import TextAmini from "./textAmini";
import { indexOf } from "lodash";
import fakeData from "../datas/fake-data";

export default function FirstPart2({ item, index }) {
  const currentHomeList = useCreateList().currentHomeList;
  const curHome = currentHomeList[item.homeIndex];
  
  return (
    <div className="trip-item w-full  flex  gap-4 mb-6">
      <img className="rounded-lg w-c126 h-c104" src={`${curHome.imgarr[0]}`} />
      <div className=" h-c104 flex flex-col justify-between ">
        <div>
          <div className="flex gap-2 items-center">
            <div className="w-c12 h-c12 ml-c-2 bg-blue-500 rounded-full">.</div>
            <span className="text-c12 italic">{item.bookingStatus}</span>
          </div>
          <div>
            <p className="text-c16 font-semibold text-black22 ">
              The {curHome.name} 
            </p>
            <p className="text-black222 text-sm pb-8 pr-2">
              Total ${item.totalPrice} on {item.totalDays} days with {item.totalGuests}{" "}
              guests
            </p>
            {/* <p className={`text-gray-400 text-c12
            ${window.innerWidth >550 ? '':'hidden'}`}>{fakeData.descAboutHomeArr[item.homeIndex]}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
