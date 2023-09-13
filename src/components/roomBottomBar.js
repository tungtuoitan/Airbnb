import XBtnB from "./XBtnB";
import FirstPartOfBill from "./firstPartOfBill";
import LeftOfBar from "./leftOfBar";
import XBtn from "./xBtn";



export default function RoomBottomBar (){
    return(
        <div className="w-full fixed bottom-0 zmax3 7:hidden bg-white
        px-6 py-4 flex justify-between items-center
        border-t-c1 border-solid border-gray-300 h-20">
            <LeftOfBar/>
            <XBtnB/>
        </div>
    )
}