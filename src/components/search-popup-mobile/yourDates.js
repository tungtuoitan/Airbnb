
import {useSelector } from "react-redux";
import fakeData from "../../datas/fake-data";

export default function YourDates() {
  const firstDate = useSelector((state) => state.dateItemSlice.firstDate);
  const lastDate = useSelector((state) => state.dateItemSlice.lastDate);

  return (
    <div className="PICK_YOUR_CALLENDAR    text-left text-sm color222">
      {firstDate.length === 0 || lastDate.length === 0
        ? `Pick your callendar`
        : `${fakeData.dateInString[firstDate[0] - 1]}.${
            fakeData.monthShortNames[firstDate[1]]
          } - ${fakeData.dateInString[lastDate[0] - 1]}.${
            fakeData.monthShortNames[lastDate[1]]
          }`}
    </div>
  );
}
