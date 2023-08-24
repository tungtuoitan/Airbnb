import { useDispatch } from "react-redux";
import {increaseDisplayItems} from '../reducer/bodySlice'

export default function ContinueExplore() {

    const dispatch = useDispatch()
    const handleOnClick = ()=>{dispatch(increaseDisplayItems())}
  return (
    <div className="CONTINUE  color222  pt-14">
      <p className="font-bold font-size18 mb-4 text-center ">
        Continue exploring design homes
      </p>
      <button
        onClick={handleOnClick}
        className="border-1 bg-222 text-white px-c24 py-c12 border-black rounded-md font-semibold text-base hover:bg-black "
      >
        Show more
      </button>
    </div>
  );
}
