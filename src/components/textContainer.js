import BackBtn from "./backBtn";
import BackBtn2 from "./xBtn2";
import SearchBig from "./searchBig";
import XBtn2 from "./xBtn2";

export default function TextContainer() {
  return (
    <div className="  flex justify-center gap-4 items-center">
      <div className="  justify-center items-center shrink-0 mt-0 ">
        <span
          className="text-base font-bold text-black222 mt-c60 
        underline decoration-2 underline-offset-4 main-color"
        >
          Where you want to go? 
        </span>
      </div>
          <XBtn2 />
    </div>
  );
}
