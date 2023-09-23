import WhenBottomBar from "./when-bottom-bar";
import TitleWhenYourTrip from "./titleWhenYourTrip";
import YourDates from "./yourDates";
import Calendar2Container from "./calendar2Container";
export default function WhenPopUp() {
  return (
    <div className="WHEN_YOUR-TRIP  relative overflow-hidden 
     w-full bg-white px-6 pt-6 pb-c72 rounded-3xl box-shadow-whereto">
      <TitleWhenYourTrip />
      <YourDates />
      <Calendar2Container />
      <WhenBottomBar />
    </div>
  );
}
