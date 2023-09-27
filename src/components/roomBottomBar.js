import XBtnB from "./XBtnB";
import FirstPartOfBill from "./firstPartOfBill";
import LeftOfBar from "./leftOfBar";
import XBtn from "./xBtn";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";



export default function RoomBottomBar (){
  const isNotiOn = useSelector((s) => s.roomSlice.isNotiOn);

    return(
        <div className={`w-full fixed bottom-0 z10000 7:hidden bg-white
        px-6 py-4 flex justify-between items-center
        border-t-c1 Lborder-solid border-gray-300 h-20
        `}>
            <LeftOfBar/>
            <XBtnB/>
        </div >
    )
}