import { useSelector } from "react-redux";
import WhiteTopBar from "./whiteTopBar";
import BodyShowFull from "./bodyShowFull";
import Display1by1 from "./display1by1";

export default function ShowFullImg() {
  const isShowFullImgOn = useSelector((s) => s.roomSlice.isShowFullImgOn);
  return (
    <div
      className={`show-full-img fixed left-0 w-full h-screen bg-white zmax3 overscroll-contain overflow-hidden  
                  ${isShowFullImgOn ? "top-0" : "top-1000"}`}
    >
      <WhiteTopBar />
      <BodyShowFull />
      <Display1by1 />
    </div>
  );
}
