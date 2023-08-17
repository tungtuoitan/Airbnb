import Calendar from '../calendar'
export default function WhenYourTrip() {
  return (
    <div className="WHEN_YOUR-TRIP  relative overflow-hidden w-full bg-white p-6 rounded-3xl box-shadow-whereto">
      <div className="font-size22 color222 font-bold text-left mb-c12">
        When's your trip?
      </div>
      <div className=" flex- justify-center">
        {/*  */}
        {/* <div className="bg-eb rounded-full inline-flex px-c4 justify-center ">
          <div className="bg-white text-sm color222 rounded-full w-c100 
          flex justify-center items-center my-c4 h-c36 box-shadow-u3
          border-u3 font-medium">Dates</div>
          <div className=" font-sm color222 rounded-full w-c100 flex justify-center items-center my-c4 h-c36 ">Dates</div>
          <div className=" font-sm color222 rounded-full w-c100 flex justify-center items-center my-c4 h-c36 ">Dates</div>
        </div> */}
        <Calendar/>
      </div>
    </div>
  );
}
