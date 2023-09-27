import { Link } from "react-router-dom";
import TripsIcon from "./tripsIcon";
export default function TripsBtn() {
  const path = window.location.pathname
  return (
    <Link to="/trips" className=" flex items-center flex-col gap-c3 || mt-c12 mb-2 w-1/5">
      <TripsIcon />
      <span className={`${path==='/trips'? 'text-black222 font-semibold':''}`}>Trips</span>
    </Link>
  );
}
