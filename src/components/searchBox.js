import { useSelector } from "react-redux";
import SearchSmall from "./searchSmall";
import { lazy, Suspense } from "react";
const InnerSearchBig = lazy(() => import("./innerSearchBig"));

export default function SearchBox() {
  const isSearchBigOn = useSelector((s) => s.searchSlice.isSearchBigOn);
  const currentPopUp = useSelector((s) => s.searchSlice.currentPopUp);

  return (
    <div
      className={`rounded-full border-c1 border-gray-300 border-solid cursor-pointer flex-none zmax trans-box  overflow-hiddenx flex flex-col justify-center items-center
        ${
          isSearchBigOn
            ? `h-c65  w-full min-w-c660 max-w-c850  relative `
            : `h-12 w-c330 min-w-c330 max-w-c360  shadow-searchbox  `
        }
        
        ${
          isSearchBigOn && currentPopUp === ""
            ? "bg-white "
            : isSearchBigOn && currentPopUp !== ""
            ? "bg-gray-200"
            : "bg-white"
        }
      `}
    >
      <Suspense>
        <InnerSearchBig />
      </Suspense>
      <SearchSmall />
    </div>
  );
}
