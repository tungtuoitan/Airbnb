import ClearDates from "./clearDates";
import NavBarInCalendar from "./navBarInCalendar";
import TableCalendarContainter from "./tableCalendarContainer";
import TableCalendarContainterB from "./tableCalendarContainerB";
import TwoCalendarContainer from "./twoCalendarContainer";

export default function CalendarForRooms() {
  return (
    <div className="CONTAINER flex justify-center">
      <div className="mt-c10 5:mt-c40 w-full  max-w-c500 11:hidden">
        <NavBarInCalendar />
        <TableCalendarContainterB />
        <ClearDates />
      </div>
      <TwoCalendarContainer/>
    </div>
  );
}
