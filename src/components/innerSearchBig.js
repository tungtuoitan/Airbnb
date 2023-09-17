import Who from "./Who";
import CheckIn from "./checkIn";
import Date from "./checkIn";
import CheckOut from "./checkOut";
import Line from "./line";
import SearchRedBtn from "./searchRedBtn";
import Where from "./where";
import { useDispatch, useSelector } from "react-redux";

export default function InnerSearchBig() {
  return (
    <>
      <Where />
      <CheckIn />
      <Who />
    </>
  );
}
