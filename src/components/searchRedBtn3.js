import SearchIcon2 from "../icons/search2-icon";
import {useDispath,useSelector} from 'react-redux'

export default function SearchRedBtn3() {
  const isSearchBigOn = useSelector((s) => s.searchSlice.isSearchBigOn);

  return (
    <div
      className={`bg-main-color w-8 h-8 rounded-2xl trans-
      text-white flex justify-center align items-center m-c7 flex-none
    `}
    >
      <SearchIcon2 />
    </div>
  );
}
