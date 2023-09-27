import { useDispatch,useSelector } from "react-redux"
import { setCurrentPopUp, setIsSearchBigOn } from "../reducer/searchSlice"


export default function GrayScreen(){
    const isSearchBigOn = useSelector(s=>s.searchSlice.isSearchBigOn)
    const dispatch = useDispatch()
    const handleOnClick =  ()=>{
      dispatch(setIsSearchBigOn())
      dispatch(setCurrentPopUp(''))
    }
    return(
        <div className={`w-full h-screen bg-black/50 
        fixed left-0 z1000 trans-gray 
        ${isSearchBigOn ? 'top-40 ':'opacity-0 top-20 pointer-events-none'}`}
        onClick={handleOnClick}></div>
    )
}