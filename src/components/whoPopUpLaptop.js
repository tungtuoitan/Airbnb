import { useDispatch, useSelector } from "react-redux";
import DestinationItem2 from "./search-popup-mobile/destination-item2";
import DestinationItemsByKeyword from "./search-popup-mobile/destinationItemsByKeyword";
import { DestinationItemList2 } from "./search-popup-mobile/destinationItemList2";
import RegionList from "./regionList";
import { setCurrentPopUp } from "../reducer/searchSlice";
import XBtn3 from "./xBtn3";
import CalendarLaptop from "./twoCalendarContainer2";
import TwoCalendarContainer2 from "./twoCalendarContainer2";
import Who2 from "./search-popup-mobile/who2";

export default function WhoPopUpLaptop() {
  return (
    <div
      className={`bg-white mt-4 w-11/12 max-w-c850
      rounded-3xl zmax px-12 pt-10 pb-6 relative 
      box-shadow-u13`}
    >
      <Who2/>
      <XBtn3 />
    </div>
  );
}
