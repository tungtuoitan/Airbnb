import Calendar2 from '../calendar2'
import WhenBottomBar from './when-bottom-bar';
export default function WhenYourTrip() {
  return (
    <div className="WHEN_YOUR-TRIP  relative overflow-hidden w-full bg-white px-6 pt-6 pb-c72 rounded-3xl box-shadow-whereto">
      <div className="font-size22 color222 font-bold text-left mb-c2">
        When's your trip?
      </div>
      <div className='text-left text-sm color222'>Aug 17  --  Aug 23</div>

      <div className="CONTAINER flex- justify-center ">
      
        <Calendar2/>
        
      </div>
      <WhenBottomBar/>
    </div>
  );
}
