import ArrowLeft from "./arrowLeft";
import {useDispatch,useSelector} from 'react-redux'
import { setIsSearchBigOn } from "../reducer/searchSlice";
import { setCurrentPopUp } from "../reducer/searchSlice";
import { setIsDescOn, setIsDisplay1By1 } from "../reducer/roomsSlice";

export default function CloseBtn() {
  const dispatch = useDispatch()
    const handleOnClick =  ()=>{
      dispatch(setIsDisplay1By1())
    }
  return (
    <div
      className={`w-8 7:w-c74  flex justify-center items-center gap-2
    text-black222 cursor-pointer  zmax3`}
      onClick={handleOnClick}
    >
      <i className="fa-solid fa-xmark text-white mt-c1"></i>
      <span className="text-white hidden 7:block">Close</span>
      
    </div>
  );
}
