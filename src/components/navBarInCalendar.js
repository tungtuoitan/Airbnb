import fakeData from "../datas/fake-data";
import { useSelector, useDispatch } from "react-redux";
import { goPrevMonth, goNextMonth } from "../reducer/dateItemSlice";
import { today } from "../function/timeForCalendar";

export default function NavBarInCalendar() {
  const currentMonth = useSelector((state) => state.dateItemSlice.currentMonth);
  const dispatch = useDispatch();

  return (
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
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
}
