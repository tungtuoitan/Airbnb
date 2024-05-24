import Adjust from "./adjust";
import TitleOnFilter from "./titleOnFilter";
import ControlByNumber from "./controlByNumber";
import { useSelector } from "react-redux";

export default function PriceRange() {
  const isFilterOn = useSelector(s=>s.filterSlice.isFilterOn)
  return (
    <div className="px-6 ">
      <div
        className="py-6 11:px-10  || border-b-c1 border-solid border-gray-400
      "
      >
        <TitleOnFilter title="Price range" />
        {isFilterOn ? <Adjust/> : <></>}
        <ControlByNumber />
      </div>
    </div>
  );
}
