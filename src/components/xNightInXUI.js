import Calendar2Container from "./search-popup-mobile/calendar2Container";
import YourDates from "./search-popup-mobile/yourDates";
import { useGetCurrentHome } from "../hooks/useGetCurrentHome";
import CalendarForRooms from "./calendarForRooms";
import CalendarRoomContainer from "./search-popup-mobile/calendarRoomContainer";
import { calculateTotalNights } from "../function/calculateTotalNight";
import WhosComingPart from "./search-popup-mobile/whosComingPart";

export default function XNightsInXUI() {
  const x = calculateTotalNights();
  const currentHome = useGetCurrentHome();
  return (
    <div name="calendar" className="pb-8  text-left bg-white">
      <div>
        <div>
          <h2 className="font-size22 pb-c4 font-semibold color222 text-left">
            {x} nights in {currentHome.name}
          </h2>
          <YourDates />
        </div>
        <CalendarRoomContainer />
      </div>
    </div>
  );
}
