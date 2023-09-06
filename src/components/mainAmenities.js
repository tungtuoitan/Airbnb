import { useSelector } from "react-redux";
import Enssentials from "./essentials";
import Feature from "./feature";
import ShowMore2 from "./showMore2";
import Location from "./location";

export default function MainAmenities() {
  const isDisplayFull = useSelector(
    (state) => state.filterSlice.filter.isDisplayFull
  );
  return (
    <>
      <Enssentials />
      <div className={`${isDisplayFull ? "" : "hidden"}`}>
        <Feature />
        <Location />
      </div>
      <ShowMore2 />
    </>
  );
}
