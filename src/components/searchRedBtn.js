import { useDispatch, useSelector } from "react-redux";
import { setIsSearchBigOn, setCurrentPopUp } from "../reducer/searchSlice";
import { setNTimesShuffle } from "../reducer/bodySlice";
import { setDisplayingIndex } from "../reducer/header2Slice";

export default function SearchRedBtn() {
  const currentPopUp = useSelector((s) => s.searchSlice.currentPopUp);
  const isSearchBigOn = useSelector((s) => s.searchSlice.isSearchBigOn);
  const nTimesShuffle = useSelector((s) => s.bodySlice.nTimesShuffle);

  const dispatch = useDispatch();
  const handleOnClick = () => {
    if (nTimesShuffle === 1) {
      alert(
        "Vì data mẫu có hạn nên kết quả tìm kiếm sẽ không khớp, mong quý khách thông cảm."
      );
    }
    dispatch(setNTimesShuffle());
    dispatch(setCurrentPopUp(""));
    dispatch(setIsSearchBigOn(false));
    dispatch(setDisplayingIndex(999))
    window.scrollTo({top:0,behavior:'smooth'})
  };
  return (
    <div
      onClick={handleOnClick}
      className={`h-12  rounded-full bg-main-color trans-red    flex-none
      flex justify-center items-center mr-c8 flex  items-center border1
      ${currentPopUp === "" ? "w-12" : "w-12 9:w-c115 px-c20  "}
     
      
      `}
      
    >
      <i className="fa-solid fa-magnifying-glass fa-md text-white fa-lg trans-search"></i>
      <span
        className={`text-white font-bold text-base pb-c2 hidden 9:block   transx overflow-hidden 
      ${currentPopUp === "" ? " w-c1 opacity-0" : "9:w-c50 ml-2 opacity-100"}`}
      >
        Search
      </span>
    </div>
  );
}
