import { useDispatch, useSelector } from "react-redux";
import fakeData from "../datas/fake-data";
import { useCalendarState } from "@mui/x-date-pickers/internals";
import { useCalculateTotalGuests } from "../hooks/useCalculateTotalGuest";
import YourTripsUI from "./yourTripsUI";

export default function YourTrips() {
  const firstDate = useSelector((s) => s.dateItemSlice.firstDate);
  const lastDate = useSelector((s) => s.dateItemSlice.lastDate);
  let whoText = useSelector((s) => s.whoComing.who);
  if (whoText === "Add guests") {
    whoText = "1 Adult";
  }
  let firstDateText = fakeData.monthNames[firstDate[1]] + " " + firstDate[0];
  let lastDateText = fakeData.monthNames[lastDate[1]] + " " + lastDate[0];
  const firstDays = firstDate[0] + (firstDate[1] + 1) * 30 + firstDate[2] * 365;
  const lastDays = lastDate[0] + (lastDate[1] + 1) * 30 + lastDate[2] * 365;
  const totalGuests = useCalculateTotalGuests();
  return (
    <YourTripsUI
      firstDays={firstDays}
      lastDays={lastDays}
      firstDateText={firstDateText}
      lastDateText={lastDateText}
      totalGuests={totalGuests}
      whoText={whoText}
    />
  );
}
