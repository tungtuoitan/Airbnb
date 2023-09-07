import { useSelector } from "react-redux";
import ArrowRight from "./arrowRight";
import FilterBtnContainer from "./filterBtnContainer";

export default function RightNav() {
  const rightArrowDisplay = useSelector(
    (state) => state.header2Nav.rightArrowDisplay
  );
  return (
    <div
      className={`RIGHT   hidden 7:flex    z-10 h-full  justify-center items-center    
              ${
                rightArrowDisplay === true
                  ? "pointer-events-auto"
                  : "pointer-events-none"
              }`}
    >
      <ArrowRight rightArrowDisplay={rightArrowDisplay} />
      <FilterBtnContainer />
    </div>
  );
}
