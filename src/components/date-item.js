import React, { createRef, useState, useEffect, useRef ,useContext} from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { pickDate} from "../reducer/dateItemSlice";
import {monthYearContext} from './monthYearContext'

function DateItem({ item, available }) {
  let isSearchPopUpOpen = useSelector((state) => state.isSearchPopUpOpen);
  let firstDate = useSelector((state) => state.dateItemSlice.firstDate);
  let lastDate = useSelector((state) => state.dateItemSlice.lastDate);

  const [heightDataItem, setHeightDataItem] = useState(0);
  const xRef = useRef(null);
  const onMouseEnter = () => {};
  const dispatch = useDispatch();
  const monthYear = useContext(monthYearContext)
  const dateArr = [item,monthYear.month,monthYear.year] 

  const handleOnClick = (item) => {
    // console.log(dateArr,monthYear)
  dispatch(pickDate(dateArr));
  };
  useEffect(() => {
    const x = xRef.current;

    setHeightDataItem(x.offsetWidth);
  }, [isSearchPopUpOpen]);

  return (
    <>
      {item !== "." ? (
        <td
          onClick={() => handleOnClick(item)}
          ref={xRef}
          onMouseEnter={() => onMouseEnter()}
          className={`ITEMM     w-full  gap-c4 font-size14 font-medium  flex justify-center items-center
          ${
            available === true
              ? `rounded-full border-1  border-white box-border 
          ${
            item===firstDate[0] && monthYear.month ===firstDate[1] && monthYear.year ===firstDate[2] || 
            item===lastDate[0] && monthYear.month ===lastDate[1] && monthYear.year ===lastDate[2]
              ? "bg-black text-white"
              : "bg-white text-black"
          }   `
              : "w-full  gap-c4 colorb0"
          }`}
          style={{ height: `${heightDataItem}px` }}
          key={uuidv4()}
        >
          {item}
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
