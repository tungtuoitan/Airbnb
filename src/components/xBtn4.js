import ArrowLeft from "./arrowLeft";
import {useDispatch,useSelector} from 'react-redux'
import { setCurrentPopUp } from "../reducer/searchSlice";

export default function XBtn4() {
  const dispatch = useDispatch()
    const handleOnClick =  ()=>{
      dispatch(setCurrentPopUp(''))
    }
  
  return (
    <div
      className={`absolute right-4 top-4 w-c32 h-c32 || flex justify-center 
    items-center || text-black222 cursor-pointer hover:bg-gray-200
    bg-gray-300 border-c1 border-solid border-gray-300 rounded-full`}
      onClick={handleOnClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14" height="14" viewBox="0 0 50 50">
<path d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z"></path>
</svg>
    </div>
  );
}
