import Calendar2 from "../calendar2";
import WhenBottomBar from "./when-bottom-bar";
import SmallPanel from "./small-panel";
import { useDispatch, useSelector } from "react-redux";
import {
  actionClickWhen,
  actionClickWho,
  actionClickWhere,
} from "../../actions/action";
import fakeData from "../../datas/fake-data";

export default function WhenYourTrip() {
  let isWhenYourTripOpen = useSelector(
    (state) => state.root.isWhenYourTripOpen
  );
  let when = useSelector((state) => state.root.when);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(actionClickWhen());
  };
  const firstDate = useSelector((state) => state.dateItemSlice.firstDate);
  const lastDate = useSelector((state) => state.dateItemSlice.lastDate);

  return isWhenYourTripOpen === true ? (
    <div className="WHEN_YOUR-TRIP  relative overflow-hidden w-full bg-white px-6 pt-6 pb-c72 rounded-3xl box-shadow-whereto">
      <div className="font-size22 color222 font-bold text-left mb-c2">
        When's your trip?
      </div>
      <div className="text-left text-sm color222">
        {firstDate.length === 0 || lastDate.length === 0
          ? `Pick your callendar`
          : `${fakeData.dateInString[firstDate[0]-1]}.${fakeData.monthShortNames[firstDate[1]]} - ${
            fakeData.dateInString[lastDate[0]-1]
            }.${fakeData.monthShortNames[lastDate[1]]}`}
      </div>

      <div className="CONTAINER flex- justify-center ">
        <Calendar2 />
      </div>
      <WhenBottomBar />
    </div>
  ) : (
    <SmallPanel content={"When"} value={when} handleOnClick={handleOnClick} />
  );
}
