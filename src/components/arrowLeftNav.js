import LeftArrowBtn from "./leftArrowBtn";
import { useSelector } from "react-redux";



export default function ArrowLeftNav (){
    const leftArrowDisplay = useSelector(
        (state) => state.header2Nav.leftArrowDisplay
      );
    return(
        <div
        className={`ARROW_LEFT    hidden  z-10  7:flex 7:opacity-0   h-full    
        w-10 gradient-white   items-center  color222 ${
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
    )
}