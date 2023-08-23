import React, { state, useState, createContext } from "react";
import WeekRow from "./week-row";
import DatesRow from "./dates-row";
import fakeData from "../datas/fake-data";
import { monthYearContext } from "./monthYearContext";
import { useSelector, useDispatch } from "react-redux";
import { time } from "../function/timeForCalendar";
import { goPrevMonth, goNextMonth } from "../reducer/dateItemSlice";
import { today } from "../function/timeForCalendar";

function Calendar2() {
  const currentMonth = useSelector((state) => state.dateItemSlice.currentMonth);
  const dispatch = useDispatch();

  const fiveArrs = time.get5ArrOfMonth(currentMonth.year, currentMonth.month);

  return (
    <div className="CONTAINER     ">
      <div className="mt-4 ">
        <div className="NAVBAR  flex justify-between mb-4 ">
          <button onClick={() => dispatch(goPrevMonth())}>
            <i
              className={`fa-solid fa-angle-right fa-rotate-180
            ${currentMonth.month === today.month ? "opacity-30" : ""}`}
            ></i>
          </button>
          <div className="font-base font-bold color222">
            <span>{fakeData.monthNames[currentMonth.month]}</span>
            <span> {currentMonth.year}</span>
          </div>
          <button
            onClick={() => {
              dispatch(goNextMonth());
            }}
          >
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>

        <div className="CALENDAR ">
          <WeekRow />

          <div className=" h-40  overflow-y-scroll   y-mandatory snap-start pb-c4 ">
            <table className="w-full ">
              <tbody className="w-full  ">
                <monthYearContext.Provider
                  value={{ month: currentMonth.month, year: currentMonth.year }}
                >
                  <DatesRow fiveArrs={fiveArrs} index1={0} />
                  <DatesRow fiveArrs={fiveArrs} index1={1} />
                  <DatesRow fiveArrs={fiveArrs} index1={2} />
                  <DatesRow fiveArrs={fiveArrs} index1={3} />
                  <DatesRow fiveArrs={fiveArrs} index1={4} />

                  {fiveArrs[5][0] !== "." ? (
                    <DatesRow fiveArrs={fiveArrs} index1={5} />
                  ) : (
                    <></>
                  )}
                </monthYearContext.Provider>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calendar2;
