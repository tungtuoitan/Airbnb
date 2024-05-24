import { useDispatch, useSelector } from "react-redux";
import { setBookingOptions } from "../reducer/filterSlice";
import SwitchUI from "./switchUI";

export default function Switch({ title }) {
  const dispatch = useDispatch();
  const handleOnClick = (e) => {
    e.stopPropagation();
    dispatch(setBookingOptions(title));
  };
  const bookingOptions = useSelector(
    (s) => s.filterSlice.filter.bookingOptions
  );
  const ownerValue =
    title === "Instant Book"
      ? bookingOptions.instantBook
      : bookingOptions.selfCheckIn;
  return <SwitchUI handleOnClick={handleOnClick} ownerValue={ownerValue} />;
}
