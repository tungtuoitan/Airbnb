import { useDispatch, useSelector } from "react-redux";
import { setPlaceType } from "../reducer/filterSlice";

export default function PlaceTypeItem({ type, price, isMid }) {
  const placeType = useSelector((state) => state.filterSlice.filter.placeType);

  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setPlaceType(type));
  };
  return (
    <div
      className={`CONTAINER || py-4 px-2 w-full max-w-calc-u3 || cursor-pointer
    ${placeType === type ? "bg-black222 box-shadow-u10 bg-img-u1" : "bg-white"}
    ${isMid ? "border-l-c1 border-r-c1 border-solid border-gray-200" : ""}
    ${type==='Any type' ? 'rounded-l-xl':''}
    ${type==='Entire home' ? 'rounded-r-xl':''} `}
      onClick={handleOnClick}
    >
      <div className="INNER || flex flex-col items-center w-full ">
        <span
          className={`font-bold 
        ${placeType === type ? "text-white" : "text-black222"}`}
        >
          {type}
        </span>
        <span
          className={`font-light 
        ${placeType === type ? "text-white/80" : "text-black222"}`}
        >
          ${price} avg.
        </span>
      </div>
    </div>
  );
}
