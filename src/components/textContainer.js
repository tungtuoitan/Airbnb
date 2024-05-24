import BackBtn from "./backBtn";
import BackBtn2 from "./xBtn2";
import SearchBig from "./searchBig";
import XBtn2 from "./xBtn2";
import { useDispatch, useSelector } from "react-redux";
import TextX from "./textX";

export default function TextContainer() {
  const isSearchBigOn = useSelector((s) => s.searchSlice.isSearchBigOn);

  return (
    <div
      className={`flex justify-center gap-4 items-center trans-text
    ${isSearchBigOn ? "text-base  h-full mt-2 mb-6 " : "text-c1 h-c1 opacity-0 pointer-events-none   "}`}
    >
      <TextX content={'Where you want to go?'}/>
      <XBtn2 />
    </div>
  );
}
