import ArrowLeft from "./arrowLeft";
import {useDispatch,useSelector} from 'react-redux'
import { setIsSearchBigOn } from "../reducer/searchSlice";

export default function XBtn2() {
  const dispatch = useDispatch()
    const handleOnClick =  ()=>{
      dispatch(setIsSearchBigOn())
    }
  
  return (
    <div
      className={` w-c32 h-c32 || flex justify-center 
    items-center || text-black222 cursor-pointer hover:bg-gray-200
    bg-gray-300x border-c1 border-solid border-gray-300 rounded-full`}
      onClick={handleOnClick}
    >
      <i class="fa-solid fa-xmark text-black222"></i>
    </div>
  );
}
