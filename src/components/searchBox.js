import { useDispatch, useSelector } from "react-redux";
import InnerSearchBig from "./innerSearchBig";
import SearchSmall from "./searchSmall";

export default function SearchBox() {
  const isSearchBigOn = useSelector((s) => s.searchSlice.isSearchBigOn);

  return (
    <div
      className={`rounded-full border-c1 border-gray-300 border-solid 
      cursor-pointer flex-none transition-all
        ${
          isSearchBigOn
            ? `bg-gray-200  h-c65  w-full min-w-c660 max-w-c850  relative grid grid-cols-7`
            : `bg-white h-12 w-auto  shadow-searchbox `
        }`}
    >
      {isSearchBigOn ? <InnerSearchBig /> : <SearchSmall />}
    </div>
  );
}
