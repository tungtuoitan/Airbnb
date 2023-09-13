import WeekRow from "./week-row";
import DatesRow from "./dates-row";
import { monthYearContext } from "./monthYearContext";
import { useSelector, useDispatch } from "react-redux";
import { time } from "../function/timeForCalendar";

export default function TableCalendarContainter() {
  const currentMonth = useSelector((state) => state.dateItemSlice.currentMonth);
  const fiveArrs = time.get5ArrOfMonth(currentMonth.year, currentMonth.month);
  return (
    <div className="CALENDAR ">
      <WeekRow />

      <div className=" h-40   overflow-y-auto  y-mandatory snap-start pb-c4 ">
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
  );
}
