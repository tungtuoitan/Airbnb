import Who from "./Who";
import CheckIn from "./checkIn";
import Date from "./checkIn";
import CheckOut from "./checkOut";
import Line from "./line";
import SearchRedBtn from "./searchRedBtn";
import Where from "./where";
import { useDispatch,useSelector } from "react-redux";

export default function SearchBig() {
  const isSearchBigOn = useSelector(s=>s.searchSlice.isSearchBigOn)
  return (
    <div
      className={`bg-white  rounded-full h-c65   relative w-full max-w-c850
      border-c1 border-gray-300 border-solid grid grid-cols-7
      ${isSearchBigOn ? '':'hidden'}`}
    >
      <Where />
      <CheckIn />
      <CheckOut />
      <Who />
    </div>
  );
}
