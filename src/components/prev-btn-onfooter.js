import { animateScroll } from "react-scroll";


export default function PrevBtnOnFooter ({isLeftArrowDisplay}){

    return(
        <div
                  onClick={() =>
                    animateScroll.scrollMore(-200, {
                      containerId: "navbar",
                      horizontal: "true",
                      duration: "500",
                    })
                  }
                  className={`LEFT   9:hidden absolute w-10  gradient-gray pb-c10     h-full left--24 flex pl-c13 items-center  color-gray7 z-10 ${
                    isLeftArrowDisplay === true ? "" : "hidden"
                  }`}
                >
                  <i class="fa-solid fa-angle-left"></i>
                </div>
    )
}