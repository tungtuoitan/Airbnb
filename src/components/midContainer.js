import TextContainer from "./textContainer";
import SearchBig from "./searchBig";
import SearchSmall from "./searchSmall";
import { useDispatch, useSelector } from "react-redux";

export default function MidContainer() {
  const dispatch = useDispatch()
  const isSearchBigOn = useSelector((s) => s.searchSlice.isSearchBigOn);
  return (
    <div>
      {isSearchBigOn ? (
        <>
          <TextContainer />
        </>
      ) : (
        <SearchSmall />
      )}
    </div>
  );
}
