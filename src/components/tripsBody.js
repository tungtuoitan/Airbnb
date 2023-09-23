import { Link } from "react-router-dom";
import BtnU1 from "./btnU1";
import TripsEmty from "./tripsEmty";
import FirstPart2 from "./firstPart2";
import { useSelector } from "react-redux";

export default function TripsBody() {
  const tripsArr = useSelector((s) => s.tripsSlice.tripsArr);
  return (
    <div>
      {tripsArr.length !== 0 ? (
        tripsArr.map((item, index) => {
          return <FirstPart2 index={index} item={item} />;
        })
      ) : (
        <TripsEmty />
      )}
    </div>
  );
}
