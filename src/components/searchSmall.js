import SearchIcon2 from "../icons/search2-icon";
import {style} from '../styles/searchBoxLaptop-style'
import { useDispatch } from "react-redux";
import { setIsSearchBigOn } from "../reducer/searchSlice";

export default function SearchSmall() {
  const dispatch = useDispatch()
  const handleOnClick = ()=>{
    dispatch(setIsSearchBigOn())
  }
  
  return (
    <div className={`inline-flex justify-center items-center
    h-12 rounded-full border-gray-200 border-1 w-auto shadow-searchbox
     text-sm font-semibold color222 cursor-pointer`}
     onClick={handleOnClick}>
      <div className={`ml-2`}>
        <span className={`w-28 border-r-1 px-4 border-gray-300`}>Anywhere</span>
        <span className={`w-28 border-r-1 px-4 border-gray-300`}>Any week</span>
        <span className={`w-28 px-4 pl-4 font-light color71`}>Add guests</span>
      </div>
      <div className={`bg-main-color w-8 h-8 rounded-2xl 
      text-white flex justify-center align items-center m-c7 `}>
        <SearchIcon2 />
      </div>
    </div>
  );
}
