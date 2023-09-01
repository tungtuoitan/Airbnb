import HeaderFilter from "./HeaderFilter";
import FilterBottomBar from "./search-popup-mobile/filterBottomBar";
import HeaderPopUp from "./headerPopUp";
import FilterBody from "./filterBody";

export default function PopUpFilter() {
  return (
    <div
      className="POPUP_FILTER || bg-white w-full max-w-c780 h-calc-u2 
        ||  absolute bottom-0 7:relative 7:bottom-auto
        || rounded-t-xl 7:rounded-xl overflow-hidden   "
    >
      <div
        className="w-full max-w-c780 h-calc-u2 
            overflow-y-scroll relative "
      >
        <HeaderFilter title="Filters" />
        <FilterBody />
      </div>
      <FilterBottomBar />
    </div>
  );
}
