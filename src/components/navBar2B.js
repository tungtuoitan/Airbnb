import fakeData from "../datas/fake-data";
import { useSelector, useDispatch } from "react-redux";
import { goPrevMonth, goNextMonth } from "../reducer/dateItemSlice";
import getMonthAndYear2 from "../function/getMonthAndYear2";

export default function NavBar2B() {
  const currentMonth = useSelector((state) => state.dateItemSlice.currentMonth);
  const {month2,year2} = getMonthAndYear2(currentMonth)
  const dispatch = useDispatch();

  return (
    <div className="NAVBAR  flex justify-between mb-4 ">
      <button className="opacity-0"></button>
      <div className="font-base font-bold color222">
        <span>{fakeData.monthNames[month2]}</span>
        <span> {year2}</span>
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
