import HeaderFilter from "./HeaderFilter";
import FilterBottomBar from "./search-popup-mobile/filterBottomBar";
import FilterBody from "./filterBody";
import { useSelector } from "react-redux";
import useCreateList from "../hooks/useCreateList";

export default function PopUpFilter() {
  const isFilterOn = useSelector((s) => s.filterSlice.isFilterOn);
  const currentHomeList = useCreateList().currentHomeList;
  if (currentHomeList.length < 12 && currentHomeList.length > 3) {
    console.log("Vì data mẫu có hạn, xin vui lòng không filter nhiều");
  }

  return (
    <div
      className={`bg-white w-full h-calc-u2 w-calc-u2  max-w-c780 zmax3 relative rounded-t-xl 7:rounded-xl overflow-hidden 
      ${isFilterOn ? "trans-pop" : "mb--1000"}`}
    >
      <div
        className="w-full  h-calc-u2 overflow-auto overscroll-contain relative "
      >
        <HeaderFilter title="Filters" />
        <FilterBody />
      </div>
      <FilterBottomBar />
    </div>
  );
}
