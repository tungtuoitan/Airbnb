import SearchIcon2 from "../icons/search2-icon";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPopUp } from "../reducer/searchSlice";
import SearchRedBtn2 from "./searchRedBtn2";
import SearchRedBtn3 from "./searchRedBtn3";
import { first } from "lodash";
import { useCalculateTotalGuests } from "../hooks/useCalculateTotalGuest";
import { useCreate3W } from "../hooks/useCreate3W";
import { truncateText } from "../function/makeTextShorter";

export default function InnerSearchSmall() {
  const {where,when,who} = useCreate3W()
  const isFirstTimeofWho = useSelector(s=>s.searchSlice.isFirstTimeofWho)

  const dispatch = useDispatch();
  return (
    <>
      <div className={`ml-2 h-c46 flex max-w-c145x w-c280   `}>
        <div
          className="flex items-center h-full flex-none"
          onClick={() => dispatch(setCurrentPopUp("where"))}
        >
          <span className={` flex-none  border-r-1 px-4 border-gray-300`}>
            {where ==='I\'m flexible'? 'Anywhere' : truncateText(where,10)}
          </span>
        </div>
        <div
          className="flex items-center h-full "
          onClick={() => dispatch(setCurrentPopUp("when"))}
        >
          <span className={`   border-r-1  border-gray-300 px-4 `}>
            {when }
          </span>
        </div>
        <div
          className="flex items-center h-full "
          onClick={() => dispatch(setCurrentPopUp("who"))}
        >
          <span className={`  pl-4 pr-2 whitespace-nowrap
          ${isFirstTimeofWho?'font-light':''}`}>
            {isFirstTimeofWho ? 'Add guests' : `${who} guests`} 
          </span>
        </div>
        
      </div>
      <SearchRedBtn3 />
    </>
  );
}
