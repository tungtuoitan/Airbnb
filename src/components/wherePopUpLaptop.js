import { useDispatch,useSelector } from "react-redux"
import DestinationItem2 from "./search-popup-mobile/destination-item2"
import DestinationItemsByKeyword from "./search-popup-mobile/destinationItemsByKeyword"
import { DestinationItemList2 } from "./search-popup-mobile/destinationItemList2"
import RegionList from "./regionList"
import { setCurrentPopUp } from "../reducer/searchSlice"
import XBtn3 from "./xBtn3"


export default function WherePopUpLaptop(){
    
    return(
        <div className=" bg-white mt-4 w-full max-w-c850 
        rounded-3xl zmax px-8 9:px-10 pt-10 pb-6 overscroll-contain
         flex justify-between relative box-shadow-u13  "
        >
            <DestinationItemsByKeyword/>
            <RegionList/>
            <XBtn3/>
            
        </div>
    )
}