import SearchIcon2 from "../icons/search2-icon";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPopUp } from "../reducer/searchSlice";
import SearchRedBtn2 from "./searchRedBtn2";
import SearchRedBtn3 from "./searchRedBtn3";

export default function InnerSearchSmall() {
  const dispatch = useDispatch();
  return (
    <>
      <div className={`ml-2 h-c46 flex  `}>
        <div
          className="flex items-center h-full flex-none"
          onClick={() => dispatch(setCurrentPopUp("where"))}
        >
          <span className={` flex-none  border-r-1 px-4 border-gray-300`}>
            Anywhere
          </span>
        </div>
        <div
          className="flex items-center h-full "
          onClick={() => dispatch(setCurrentPopUp("when"))}
        >
          <span className={`   border-r-1  border-gray-300 px-4 `}>
            Anyweek
          </span>
        </div>
        <div
          className="flex items-center h-full "
          onClick={() => dispatch(setCurrentPopUp("who"))}
        >
          <span className={` font-light pl-4 pr-2`}>
            Add guests
          </span>
        </div>
        
      </div>
      <SearchRedBtn3 />
    </>
  );
}
