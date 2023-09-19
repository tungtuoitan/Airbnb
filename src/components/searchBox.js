import { useDispatch, useSelector } from "react-redux";
import InnerSearchBig from "./innerSearchBig";
import SearchSmall from "./searchSmall";

export default function SearchBox() {
  const isSearchBigOn = useSelector((s) => s.searchSlice.isSearchBigOn);
  const currentPopUp = useSelector((s) => s.searchSlice.currentPopUp);

  return (
    <div
      className={`rounded-full border-c1 border-gray-300 border-solid 
      cursor-pointer flex-none transition-all overflow-visible bg-black 
        ${
          isSearchBigOn
            ? `h-c65  w-full min-w-c660 max-w-c850  relative grid grid-cols-7`
            : `h-12 w-auto  shadow-searchbox `
        }
        
        ${isSearchBigOn && currentPopUp==='' ? 'bg-white '
      : isSearchBigOn && currentPopUp!=='' ? 'bg-gray-200' :'bg-white'}

        `}
    >
      {isSearchBigOn ? <InnerSearchBig /> : <SearchSmall />}
    </div>
  );
}
