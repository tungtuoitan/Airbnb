import { Link } from "react-router-dom";
import BtnU1 from "./btnU1";
import TripsEmty from "./tripsEmty";
import FirstPart2 from "./firstPart2";
import { useSelector } from "react-redux";

export default function TripsBody() {
  const tripsArr = useSelector((s) => s.tripsSlice.tripsArr);
  return (
    <>
      {tripsArr.length !== 0 ? (
        <>
          <div className="grid 7:grid-cols-2 14:grid-cols-3 gap-6">
            {tripsArr.map((item, index) => (
              <FirstPart2 key={index} index={index} item={item} />
            ))}
          </div>
        </>
      ) : (
        <TripsEmty />
      )}
    </>
  );
}
