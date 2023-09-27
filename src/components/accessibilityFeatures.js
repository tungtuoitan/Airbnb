import GuestEntranceAndParking from "./guestEntranceAndParking";
import TitleOnFilter from "./titleOnFilter";

export default function AccessibilityFeatures(){
    return(
        <div>
             <div className='px-6'>
            <div className='py-8 border-b-c1 border-gray-300 border-solid'>
                  <TitleOnFilter title='Accessibility features'/>
                  {/* <GuestEntranceAndParking/> */}
            </div>
            
        </div>
        </div>
    )
}