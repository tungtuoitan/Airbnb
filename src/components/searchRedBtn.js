import { useDispatch,useSelector } from "react-redux";

export default function SearchRedBtn() {
  const currentPopUp = useSelector(s=>s.searchSlice.currentPopUp)
  return (
    <div
      className={`h-12 rounded-full bg-main-color transition-all
      flex justify-center items-center mr-c8 flex gap-2 items-center
      ${currentPopUp==='' ? 'w-12':' px-c20 '}`}
    >
      <i className="fa-solid fa-magnifying-glass fa-md text-white fa-lg"></i>
      <span className={`text-white font-bold text-base pb-c2 transition-all
      ${currentPopUp==='' ? 'hidden':''}`}>Search</span>
    </div>
  );
}
