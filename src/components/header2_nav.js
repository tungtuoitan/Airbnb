import FilterBtn from "./filter-btn";
import { useSelector } from "react-redux";
import RightArrowBtn from "./rightArrowBtn";
import LeftArrowBtn from "./leftArrowBtn";

function Header2Nav() {
  const leftArrowDisplay = useSelector(
    (state) => state.header2Nav.leftArrowDisplay
  );
  const rightArrowDisplay = useSelector(
    (state) => state.header2Nav.rightArrowDisplay
  );


  return (
    <div className=" NAVIGATION  flex justify-between 7:px-10 14:px-20  absolute top-0 left-0 w-full h-full">
      <div
        className={`ARROW_LEFT    hidden  z-10  7:flex 7:opacity-0   h-full    w-10 gradient-white   items-center  color222 ${
          leftArrowDisplay === true ? "7:opacity-100" : "7:opacity-0"
        } ${
          leftArrowDisplay === true
            ? "pointer-events-auto"
            : "pointer-events-none"
        }
              `}
      >
        <LeftArrowBtn />
      </div>

      <div
        className={`RIGHT   hidden 7:flex    z-10 h-full  justify-center items-center    
              ${
                rightArrowDisplay === true
                  ? "pointer-events-auto"
                  : "pointer-events-none"
              }`}
      >
        <div
          className={`ARROW_RIGHT    hidden 7:flex  w-16 h-20 ml-8  gradient-white-toleft           justify-end items-center   top-0   color222 ${
            rightArrowDisplay === true ? "7:opacity-100" : "7:opacity-0"
          }
              ${
                rightArrowDisplay === true
                  ? "pointer-events-auto"
                  : "pointer-events-none"
              }`}
        >
          <RightArrowBtn />
        </div>
        <div className="FILTER_CONTAINER  pointer-events-auto h-full bg-white pl-4 flex items-center">
          <FilterBtn />
        </div>
      </div>
    </div>
  );
}

export default Header2Nav;
