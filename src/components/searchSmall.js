import InnerSearchSmall from "./innerSearchSmall";
import { setIsSearchBigOn } from "../reducer/searchSlice";
import { useDispatch,useSelector } from "react-redux";

export default function SearchSmall() {
  const dispatch = useDispatch();
  const isSearchBigOn = useSelector((s) => s.searchSlice.isSearchBigOn);
  const handleOnClick = () => {
    dispatch(setIsSearchBigOn());
  };
  return (
    <div
      className={`inline-flex  justify-center items-center 
         text-sm font-semibold color222   trans-small overflow-hidden
         ${isSearchBigOn ? 'h-c1 opacity-0 pointer-events-none  mb-c-1'
         :'h-c46 w-c330 opacity-100'}  `}
      onClick={handleOnClick}
    >
      <InnerSearchSmall />
    </div>
  );
}
