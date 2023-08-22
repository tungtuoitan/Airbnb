import React, { state, useState, createContext } from "react";
import WeekRow from "./week-row";
import DatesRow from "./dates-row";
import fakeData from "../datas/fake-data";
import {monthYearContext} from './monthYearContext'
import {useSelector,useDispatch} from 'react-redux'

// calendar Object
const today2 = useSelector(state=>state.dateItemSlice.today)
console.log(today2)
const today = new Date();
let year0 = today.getFullYear();
let month0 = today.getMonth();

function getWeekOfDay1(year, month) {
  const date = new Date(year, month, 1).getDay();
  return date;
}

let get5ArrOfMonth = (y, m) => {
  let dateOfMonth = Array.from({ length: 42 }, () => ".");
  let Day1Index = getWeekOfDay1(y, m, 1);
  dateOfMonth[Day1Index] = 1;
  for (let i = Day1Index; i < 42; i++) {
    dateOfMonth[i] = i - (Day1Index - 1);
    if (dateOfMonth[i] > 31) {
      dateOfMonth[i] = ".";
    }
  }

  return [
    dateOfMonth.slice(0, 7),
    dateOfMonth.slice(7, 14),
    dateOfMonth.slice(14, 21),
    dateOfMonth.slice(21, 28),
    dateOfMonth.slice(28, 35),
    dateOfMonth.slice(35, 42),
  ];
};

function Calendar2() {
  const [month, setMonth] = useState(month0);
  const [year, setYear] = useState(year0);

  const prev = () => {
    let monthCopy;
    let yearCopy;
    if (month === 0) {
      monthCopy = 11;
      yearCopy = year - 1;
    } else {
      monthCopy = month - 1;
      yearCopy = year;
    }
    setMonth(monthCopy);
    setYear(yearCopy);
  };
  const next = () => {
    let monthCopy;
    let yearCopy;
    if (month === 11) {
      monthCopy = 0;
      yearCopy = year + 1;
    } else {
      monthCopy = month + 1;
      yearCopy = year;
    }
    setMonth(monthCopy);
    setYear(yearCopy);
  };
  const fiveArrs = get5ArrOfMonth(year, month);


  return (
    <div className="CONTAINER     ">
      <div className="mt-4 ">
        <div className="NAVBAR  flex justify-between mb-4 ">
          <button onClick={() => prev()}>
            <i class="fa-solid fa-angle-right fa-rotate-180"></i>
          </button>
          <div className="font-base font-bold color222">
            <span>{fakeData.monthNames[month]}</span>
            <span> {year}</span>
          </div>
          <button
            onClick={() => {
              next();
            }}
          >
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>

        <div className="CALENDAR ">
          <WeekRow />

          <div className="overflow-y-scroll  h-40   ">
            <table className="w-full">
              <tbody className="w-full">
                <monthYearContext.Provider
                  value={{ month: month, year: year }}
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
