import Who from "./Who";
import CheckIn from "./checkIn";
import Where from "./where";
import { useSelector } from "react-redux";

export default function InnerSearchBig() {
  const isSearchBigOn = useSelector((s) => s.searchSlice.isSearchBigOn);

  return (
    <div
      className={`grid grid-cols-7  overflow-hidden trans-a 
                  ${
                    isSearchBigOn
                      ? "h-full w-full max-w-c850 opacity-100"
                      : " h-c1 w-c1 opacity-0 mt-c-1 pointer-events-none"
                  }`}
    >
      <Where />
      <CheckIn />
      <Who />
    </div>
  );
}
