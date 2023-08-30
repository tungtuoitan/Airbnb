import {Link} from 'react-router-dom'

export default function TripsBody() {
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
      <Link to='/'
          className="flex justify-center items-center 
      || rounded-lg border-black222 border-solid border-c1 
      || font-semibold text-black222 
      || w-c160 px-c23 py-c11 
      || whitespace-nowrap"
      
        >
          Start searching
      </Link>
    </div>
  );
}
