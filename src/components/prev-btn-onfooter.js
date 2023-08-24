import { animateScroll } from "react-scroll";
import { useSelector } from "react-redux";

export default function PrevBtnOnFooter() {
  const isLeftArrowDisplay = useSelector(
    (state) => state.footerSlice.isLeftArrowDisplay
  );
  const handleOnClick = () =>
    animateScroll.scrollMore(-200, {
      containerId: "navbar",
      horizontal: "true",
      duration: "500",
    });

  return (
    <div
      onClick={handleOnClick}
      className={`LEFT   9:hidden absolute w-10  gradient-gray pb-c10     h-full left--24 flex pl-c13 items-center  color-gray7 z-10 ${
        isLeftArrowDisplay === true ? "" : "hidden"
      }`}
    >
      <i className="fa-solid fa-angle-left"></i>
    </div>
  );
}
