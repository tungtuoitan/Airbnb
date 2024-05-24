import ClearDates from "./clearDates";
import NavBar2A from "./navBar2A";
import NavBar2B from "./navBar2B";
import TableCalendarContainter2A from "./tableCalendarContainer2A";
import TableCalendarContainter2B from "./tableCalendarContainer2B";

export default function TwoCalendarContainer2() {
  return (
    <div className="  w-full ">
      <div className="flex w-full  gap-c60 ">
        <div className="mt-c20 5:mt-c40 w-full  max-w-c500 ">
          <NavBar2A />
          <TableCalendarContainter2A />
        </div>
        <div className="mt-c20 5:mt-c40 w-full  max-w-c500 ">
          <NavBar2B />
          <TableCalendarContainter2B />
        </div>
      </div>
      <div className="flex justify-left">
        <ClearDates />
      </div>
    </div>
  );
}
