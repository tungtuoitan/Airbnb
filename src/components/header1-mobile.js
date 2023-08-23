import { useDispatch, useSelector } from "react-redux";
import { actionSearchPopUp } from "../actions/action";
import U1Icon from "../icons/u1Icon";
import SearchIcon3 from "../icons/searchIcon3";
import ThreeAny from "./threeAny";

export default function Header1Mobile() {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(actionSearchPopUp());
  };
  return (
    <div className="HEADER_1_MOBILE    flex 7:hidden w-min-285   justify-center">
      <div className="SEARCH_BAR          flex justify-between items-center  w-calc-48 h-14 mt-c14 rounded-full border-gray-200 border-1  shadow-searchbox-smartf text-sm font-semibold color222">
        <div className="w-max--48   " onClick={handleOnClick}>
          <div className=" flex items-center">
            <SearchIcon3 />
            <ThreeAny />
          </div>
        </div>
        <U1Icon />
      </div>
    </div>
  );
}
