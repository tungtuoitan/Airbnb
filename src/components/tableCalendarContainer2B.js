import WeekRow from "./week-row";

import { monthYearContext } from "./monthYearContext";
import { useSelector, useDispatch } from "react-redux";
import { time } from "../function/timeForCalendar";
import getMonthAndYear2 from "../function/getMonthAndYear2";
import DatesRow from "./dates-row";

export default function TableCalendarContainter2B() {
  const currentMonth = useSelector((state) => state.dateItemSlice.currentMonth);
  const { month2, year2 } = getMonthAndYear2(currentMonth);
  const fiveArrs = time.get5ArrOfMonth(year2, month2);
  return (
    <div className="CALENDAR mt-c10 5:mt-c20 ">
      <WeekRow />

      <div className="  overflow-y-auto  y-mandatory snap-start pb-c4 ">
        <table className="w-full ">
          <tbody className="w-full  ">
            <monthYearContext.Provider value={{ month: month2, year: year2 }}>
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
  );
}
