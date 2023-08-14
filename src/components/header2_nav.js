import React from "react";

class Header2Nav extends React.Component{
    render(){
        const {onClickLeftArrow,onClickRightArrow,arrowLeftDisplay,arrowRightDisplay}=this.props
        return(
            <div className=" NAVIGATION  flex justify-between 7:px-10 14:px-20  absolute top-0 left-0 w-full h-full">
            <div
              className={`ARROW_LEFT    hidden  z-10  7:flex 7:opacity-0   h-full    w-10 mt-c7 gradient-white   items-center  color222 ${
                arrowLeftDisplay === true ? "7:opacity-100" : "7:opacity-0"
              } `}
            >
              <div
                onClick={() => {
                  onClickLeftArrow();
                }}
                className={`border-1 border-gray-400 w-7 h-7 pt-1px pr-1px rounded-full bg-white ${arrowLeftDisplay===true ? 'pointer-events-auto': 'pointer-events-none'}`}
              >
                <i class="fa-solid fa-angle-left fa-sm"></i>
              </div>
            </div>
    
            <div className={`RIGHT   hidden 7:flex    z-10 h-full mt-c7      justify-center items-center  `}>
              <div className={`ARROW_RIGHT    hidden 7:flex  w-16 h-20 ml-8  gradient-white-toleft           justify-end items-center   top-0   color222 ${arrowRightDisplay===true ? '7:opacity-100': '7:opacity-0'}`}>
                <div 
                  onClick={() => {
                    onClickRightArrow();
                  }}
                  className={`bg-white color222 border-1 pt-1px border-gray-400 w-7 h-7 rounded-full bg-white ${arrowRightDisplay===true ? 'pointer-events-auto': 'pointer-events-none'}`}
                >
                  <i class="fa-solid fa-angle-right fa-sm"></i>
                </div>
              </div>
              <div className="h-full bg-white pl-4 flex items-center">

              <button className="-------- bg-white   flex justify-center items-center gap-2 p-4 pr-c18 w-22 h-12 border-1 rounded-xl        ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      height: "14px",
                      width: "14px",
                      fill: "currentcolor",
                    }}
                  >
                    <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                  </svg>
                </span>
                <span className="font-size12 font-bold color222">Filters</span>
              </button>
              </div>
            </div>
          </div>

        )
    }
}

export default Header2Nav