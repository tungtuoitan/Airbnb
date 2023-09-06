import { setAmenities } from "../reducer/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import MiniTickIcon from "./miniTickIcon";

export default function CheckContainer2({ index, type }) {
  const dispatch = useDispatch();
  const amenities = useSelector((state) => state.filterSlice.filter.amenities);
  const handleOnClick = (e) => {
    const x = {
      index: index,
      type: type,
      amenities: amenities,
    };
    dispatch(setAmenities(x));
    e.stopPropagation();
  };

  return (
    <div className=" flex items-center || relative || w-6 h-6  ">
      <div
        className={`BLACKK 
        absolute z100 pink-center flex justify-center items-center
         rounded mt-c-1 w-full h-full
        ${amenities[type][index] ? "bg-black222 " : "bg-transparent"}`}
      >
        <MiniTickIcon ownerValue={false} />
      </div>
      <input
        type="checkbox"
        name="checkbox"
        className="GRAY-BORDER  || w-6 h-6 mt-c2  ||  border-gray-400 border-c1 border-solid  
                 "
        onClick={(e) => handleOnClick(e)}
      />
    </div>
  );
}
