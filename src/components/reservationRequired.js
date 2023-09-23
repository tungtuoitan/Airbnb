import { useDispatch, useSelector } from "react-redux";
import { setConfirmRequestOn, setIsNotiOn } from "../reducer/roomsSlice";
import { Link } from "react-scroll";
import NotiContainer from "./notiContainer";
import { addTrip } from "../reducer/tripsSlice";
import { useCalculateTotalPriceIncludeTaxes } from "../hooks/useCalculateTotalPriceIncludeTaxes";
import { useCalculateTotalGuests } from "../hooks/useCalculateTotalGuest";

export default function RequiredBtn() {
  const currentHomeId = useSelector((s) => s.roomSlice.currentHomeId);
  const firstDate = useSelector((s) => s.dateItemSlice.firstDate);
  const lastDate = useSelector((s) => s.dateItemSlice.lastDate);
  const adults = useSelector((s) => s.whoComing.adults);
  const children = useSelector((s) => s.whoComing.children);
  const infants = useSelector((s) => s.whoComing.infants);
  const pets = useSelector((s) => s.whoComing.pets);
  const totalDays =
    lastDate[0] +
    (lastDate[1] + 1) * 30 +
    lastDate[2] * 365 -
    (firstDate[0] + (firstDate[1] + 1) * 30 + firstDate[2] * 365);

  const currentTrip = {
    homeIndex: currentHomeId,
    firstDate: firstDate,
    lastDate: lastDate,
    totalDays: totalDays,
    totalPrice: useCalculateTotalPriceIncludeTaxes(),
    totalGuests: useCalculateTotalGuests(),
    bookingStatus: "Waiting for response",
  };
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setIsNotiOn());
    dispatch(setConfirmRequestOn());
    dispatch(addTrip(currentTrip));
  };

  return (
    <button
      onClick={handleOnClick}
      className="require-btn w-full rounded-lg 
    py-c12 font-bold text-white color-pink-main px-6 "
    >
      Send reservation required
    </button>
  );
}
