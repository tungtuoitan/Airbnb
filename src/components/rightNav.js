import { useSelector } from "react-redux";
import ArrowRight from "./arrowRight";
import FilterBtnContainer from "./filterBtnContainer";
import TotalPrice from "./total-price";
import TotalPrice2 from "./totalPrice2";

export default function RightNav() {
  const rightArrowDisplay = useSelector(
    (state) => state.header2Nav.rightArrowDisplay
  );
  const widthScreen = useSelector((state) => state.header2Nav.widthScreen);
  return (
    <div
      className={`RIGHT  hidden 7:flex  z-10 h-full  justify-center items-center    
              ${
                rightArrowDisplay === true
                  ? "pointer-events-auto"
                  : "pointer-events-none"
              }`}
    >
      <ArrowRight rightArrowDisplay={rightArrowDisplay} />
      {/* {widthScreen <1640 ? (<FilterBtnContainer />): <></>} */}
      <FilterBtnContainer />
      <div className="bg-white h-full hidden 16:flex items-center">
        <TotalPrice2 />
      </div>
    </div>
  );
}
