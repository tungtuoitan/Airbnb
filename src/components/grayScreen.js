import { useDispatch,useSelector } from "react-redux"
import { setIsSearchBigOn } from "../reducer/searchSlice"


export default function GrayScreen(){
    const isSearchBigOn = useSelector(s=>s.searchSlice.isSearchBigOn)
    const dispatch = useDispatch()
    const handleOnClick =  ()=>{
      dispatch(setIsSearchBigOn())
    }
    return(
        <div className={`w-full h-screen bg-black/50 
        fixed top-40 left-0 z1000x
        ${isSearchBigOn ? '':'hidden'}`}
        onClick={handleOnClick}></div>
    )
}