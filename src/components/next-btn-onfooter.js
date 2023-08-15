

import { animateScroll } from "react-scroll";


export default function NextBtnOnFooter ({isRightArrowDisplay}){

    return(
        <div
        onClick={() =>
          animateScroll.scrollMore(200, {
            containerId: "navbar",
            horizontal: "true",
            duration: "500",
          })
        }
        className={`RIGHT    9:hidden   absolute w-10  gradient-gray-toleft pb-c10      flex justify-center items-center   top-0 h-full right--24 color-gray7 ${
          isRightArrowDisplay === true ? "" : "hidden"
        }`}
      >
        <i class="fa-solid fa-angle-right"></i>
      </div>
    )
}