import { useDispatch,useSelector } from "react-redux"
import { setCurrentPopUp } from "../reducer/searchSlice"
import SearchIcon2 from "../icons/search2-icon"


export default function SearchRedBtn2(){
    const currentPopUp = useSelector(s=>s.searchSlice.currentPopUp)
    const dispatch = useDispatch()
    const handleOnClick = ()=>dispatch(setCurrentPopUp(''))
    return(
        <div
          className={`bg-main-color  h-8 rounded-2xl 
      text-white flex justify-center align items-center m-c7 flex-none
      ${currentPopUp==='' ?'w-8':''} `}
      onClick= {handleOnClick}
        >
          <SearchIcon2 />
          <span className={`font-bold text-white
          ${currentPopUp==='' ?'hidden':''} `}>Search</span>
        </div>
    )
}