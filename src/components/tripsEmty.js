import BtnU1 from "./btnU1";

export default function TripsEmty() {
  return (
    <div className="pt-8 pb-12 || border-b-c1 border-solid border-gray-300">
      <div
        className="text-c22 font-semibold text-black222 
          || pt- pb-c4 "
      >
        No trips booked...yet
      </div>
      <p className="mb-c16">
        Time to dust off your bags and start planning your next adventure
      </p>
      <BtnU1 name={"Start searching"} />
    </div>
  );
}
