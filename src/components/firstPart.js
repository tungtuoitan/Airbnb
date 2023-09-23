import { useSelector, useDispatch } from "react-redux";
import useCreateList from "../hooks/useCreateList";
import { unstable_createMuiStrictModeTheme } from "@mui/material";
import TextA from "./textA";
import TextAmini from "./textAmini";
import fakeData from "../datas/fake-data";

export default function FirstPart() {
  const currentHomeList = useCreateList().currentHomeList;
  const currentHomeId = useSelector((s) => s.roomSlice.currentHomeId);
  const curHome = currentHomeList[currentHomeId];
  return (
    <div
      className="w-full  flex  gap-4 mt-6 pb-6
    border-b-c1 border-solid border-gray-300"
    >
      <img className="rounded-lg w-c126 h-c104" src={`${curHome.imgarr[0]}`} />
      <div className=" h-c104 flex flex-col justify-between ">
        <div className="text-left">
          <p className="text-gray-400 text-c12">{curHome.property_type}</p>
          <p className="text-c14 text-black22 ">
            {curHome.name} - {fakeData.descAboutHomeArr[currentHomeId]}
          </p>
        </div>
        <TextAmini />
      </div>
    </div>
  );
}
