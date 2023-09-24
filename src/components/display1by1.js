import { useDispatch, useSelector } from "react-redux";
import WhiteTopBar from "./whiteTopBar";
import BodyShowFull from "./bodyShowFull";
import Gallery from "./bodyShowFull";
import BodyDisplay1By1 from "./bodyDisplay1by1";
import BlackTopBar from "./blackTopBar";
import Slider3 from "./bodyDisplay1by1";
import Slider4 from "./slider4";

export default function Display1by1() {
  const dispatch = useDispatch();
  const isDisplay1By1 = useSelector((s) => s.roomSlice.isDisplay1By1);
  return (
    <div
      className={`show-full-img fixed left-0 w-full h-screen bg-black zmax4
      overscroll-contain overflow-hidden 
        ${isDisplay1By1 ? "top-0" : "top-1000"}`}
    >
      <BlackTopBar />
      <Slider3/>
      
    </div>
  );
}
