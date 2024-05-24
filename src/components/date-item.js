import React, {
  createRef,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { pickDate } from "../reducer/dateItemSlice";
import { monthYearContext } from "./monthYearContext";
import { today } from "../function/timeForCalendar";
import { setCurrentPopUp, setIsFirstTimeOfWho } from "../reducer/searchSlice";

function DateItem({ item, available }) {
  let isSearchPopUpOpen = useSelector((state) => state.isSearchPopUpOpen);
  let firstDate = useSelector((state) => state.dateItemSlice.firstDate);
  let lastDate = useSelector((state) => state.dateItemSlice.lastDate);

  const [heightDataItem, setHeightDataItem] = useState(0);
  const xRef = useRef(null);
  const onMouseEnter = () => {};
  const dispatch = useDispatch();
  const monthYear = useContext(monthYearContext);
  const dateArr = [item, monthYear.month, monthYear.year];

  // logic of callendar
  const firstDays =
    firstDate[0] + (firstDate[1] + 1) * 40 + firstDate[2] * 3650;
  const lastDays = lastDate[0] + (lastDate[1] + 1) * 40 + lastDate[2] * 3650;
  const currentDays = item + (dateArr[1] + 1) * 40 + dateArr[2] * 3650;
  const todayDays = today.date + (today.month + 1) * 40 + today.year * 3650;
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    if (firstDate.length !== 0 && lastDate.length !== 0 && isClicked) {
      dispatch(setCurrentPopUp("who"));
      dispatch(setIsFirstTimeOfWho(false))
    }
    if (isClicked === true) {
      setIsClicked(false);
    }
  }, [isClicked]);

  const handleOnClick = (item) => {
    if (currentDays > todayDays) {
      setIsClicked(true);
      dispatch(pickDate(dateArr));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (xRef.current) {
        setHeightDataItem(xRef.current.offsetWidth);
      }
    };
    const handleResizeRAF = () => requestAnimationFrame(handleResize);
    handleResize();
    window.addEventListener("resize", handleResizeRAF);
    return () => {
      window.removeEventListener("resize", handleResizeRAF);
    };
  }, [isSearchPopUpOpen, heightDataItem]);

  return (
    <>
      {item !== "." ? (
        <td
          onClick={() => handleOnClick(item)}
          ref={xRef}
          onMouseEnter={() => onMouseEnter()}
          className={`ITEMM  relative w-full z10000  gap-c4 font-size14 font-medium  
          flex justify-center items-center cursor-pointer 
           
          ${
            (item === firstDate[0] &&
              monthYear.month === firstDate[1] &&
              monthYear.year === firstDate[2]) ||
            (item === lastDate[0] &&
              monthYear.month === lastDate[1] &&
              monthYear.year === lastDate[2])
              ? "border-trans"
              : ""
          }
          ${
            currentDays > todayDays
              ? "hover:border-c1 hover:border-solid hover:border-black222"
              : ""
          }
          }
          
          ${
            available === true
              ? `rounded-full border-1  border-white box-border 
          ${
            (item === firstDate[0] &&
              monthYear.month === firstDate[1] &&
              monthYear.year === firstDate[2]) ||
            (item === lastDate[0] &&
              monthYear.month === lastDate[1] &&
              monthYear.year === lastDate[2])
              ? " text-white relative"
              : "text-black"
          }   `
              : "w-full  gap-c4 colorb0"
          }`}
          style={{ height: `${heightDataItem}px` }}
          key={uuidv4()}
        >
          <span
            className={`relative z100000 
            ${currentDays > todayDays ? "" : "opacity-30"}
            `}
          >
            {item}
          </span>
          <div
            className={`BLACKK absolute top-0 left-0 w-full h-full z10000  
          ${
            available === true
              ? `rounded-full 
          ${
            (item === firstDate[0] &&
              monthYear.month === firstDate[1] &&
              monthYear.year === firstDate[2]) ||
            (item === lastDate[0] &&
              monthYear.month === lastDate[1] &&
              monthYear.year === lastDate[2])
              ? "bg-222 "
              : "transparent "
          }   `
              : "w-full  colorb0"
          } `}
          ></div>

          <div
            className={`GRAYY    scale-plus-2
            ${
              firstDate.length === 0 || lastDate.length === 0
                ? "1"
                : currentDays > firstDays && currentDays < lastDays
                ? "bg-gray247x bg-black/10 z1000"
                : currentDays === firstDays
                ? "first-gradient z1000"
                : currentDays === lastDays
                ? "last-gradient z1000"
                : "4"
            }   
            
              `}
          ></div>
        </td>
      ) : (
        <td
          className=" w-full  gap-c4 h-calc-w opacity-0  "
          ref={xRef}
          style={{ height: `${heightDataItem}px` }}
          key={uuidv4()}
        >
          .
        </td>
      )}
    </>
  );
}

export default DateItem;
