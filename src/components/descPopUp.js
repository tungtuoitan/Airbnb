import DescBody from "./descBody";
import DescHeader from "./descHeader";

export default function DescPopUp() {
  return (
    <div
      className="POPUP_FILTER || bg-white w-full max-w-c780 h-calc-u2 
        ||  absolute bottom-0 7:relative 7:bottom-auto
        || rounded-t-xl 7:rounded-xl  overflow-hidden overscroll-contain"
    >
      <div
        className="w-full max-w-c780 h-calc-u2 overflow-x-hidden
            overflow-y-scroll overscroll-contain relative  "
      >
        <DescHeader />
        <DescBody />
      </div>
    </div>
  );
}