export default function YourTripsUI(props) {
  const {
    firstDays,
    lastDays,
    firstDateText,
    lastDateText,
    whoText,
    totalGuests,
  } = props;
  return (
    <div className="mb-4 mt-6 ">
      <p className="text-left text-black22 font-bold text-c18">
        Your Trip
      </p>
      <div className='mt-c4'>
        <div className="text-left mb-c6">
          <span className="font-semibold text-base mt-2">Day</span>
          <div className=" flex justify-between text-sm">
            <span className="text-left">
              {firstDateText} - {lastDateText}
            </span>
            <span className="text-left">{lastDays - firstDays} days</span>
          </div>
        </div>
        
        <div className="text-left mb-4">
          <span className="font-semibold text-base mt-2 ">Guest</span>
          <div className="flex justify-between text-sm">
            <span className="text-left">{whoText}</span>
            <span className="text-left">{totalGuests} guests</span>
          </div>
        </div>
      </div>
    </div>
  );
}
