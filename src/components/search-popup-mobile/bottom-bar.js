import { useDispatch } from "react-redux"
import { actionResetWhere,actionSearchPopUp } from "../../actions/action"
import { resetAllOfWho } from "../../reducer/whoComingSlice"
import { resetDate } from "../../reducer/dateItemSlice"
import { SearchIcon } from "../../icons/search-icon"

export default function(){
  const dispatch = useDispatch()
  const handleClearAll = ()=>{
    dispatch(actionResetWhere())
    dispatch(resetAllOfWho())
    dispatch(resetDate())
  }
  const handleSearch = ()=>{
    dispatch(actionSearchPopUp())
    
  }

    return(
        <div
        className="BOTTOM_BAR   absolute bottom-0 w-full   bg-gray-80 
         border-top-05px border-solid border-gray-200
         px-6 py-c12 flex justify-between items-center"
      >
        <button className=" font-base color222 underline font-bold h-full "
        onClick = {handleClearAll}>
          Clear all
        </button>
        <button
          className=" main-gradient w-32 h-12 rounded-lg border1 flex justify-center 
          items-center"
        >
          <div className="flex justify-center items-center gap-c10"
          onClick={handleSearch}>
            <div className="mt-c2">
              <SearchIcon/>
            </div>
            <span className="text-white font-bold ">Search</span>
          </div>
        </button>
      </div>
    )
}