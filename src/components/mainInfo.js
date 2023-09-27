import CheckInPart from "./checkInPart";
import CheckOutPart from "./checkOutPart";
import GuestPart from "./guestPart";
import { Link } from "react-scroll";
export default function MainInfo() {
  return (
    <div
      className="w-full border-c1 border-solid border-gray-300
        rounded-lg mb-4 cursor-pointer"
    > 
      <Link
        to="calendar"
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
        className="border-b-c1 border-solid border-gray-300
      grid grid-cols-2"
      >
        <CheckInPart />
        <CheckOutPart />
      </Link>
      <GuestPart />
    </div>
  );
}
