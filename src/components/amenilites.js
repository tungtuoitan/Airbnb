import Enssentials from "./enssentials";
import TitleOnFilter from "./titleOnFilter";



export default function Amenilites(){
    return(
        <div className='px-6'>
            <div className='py-8 border-b-c1 border-gray-300 border-solid'>
                  <TitleOnFilter title='Amenities'/>
                  <Enssentials/>
            </div>
            
        </div>
    )
}