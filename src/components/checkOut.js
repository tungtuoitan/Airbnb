import { truncateText } from "../function/makeTextShorter";
import { useDispatch, useSelector } from "react-redux";
import fakeData from "../datas/fake-data";
import { setCurrentPopUp } from "../reducer/searchSlice";
import { resetLastDate } from "../reducer/dateItemSlice";

export default function CheckOut() {
  const firstDate = useSelector((s) => s.dateItemSlice.firstDate);
  const lastDate = useSelector((s) => s.dateItemSlice.lastDate);
  const currentPopUp = useSelector((s) => s.searchSlice.currentPopUp);

  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setCurrentPopUp("checkout"));
    // dispatch(resetLastDate());
  };

  let lastDateText =
    lastDate.length === 0
      ? "Add dates"
      : fakeData.monthShortNames[lastDate[1]].slice(0, 3) + " " + lastDate[0];
  return (
    <div
      className={`h-full text-c12   flex-none  
      w-full text-left flex justify-start items-center
      rounded-t-full overflow-visible
      ${
        currentPopUp === "checkout"
          ? `bg-white box-shadow-u14 zmax3`
          : "hover:bg-gray-200 "
      }
      `}
      onClick={handleOnClick}
    >
      <div
        className="border-r-c1 border-solid border-gray-300 w-full
        "
      >
        <div
          className="text-center text-black222 font-semibold 
      leading-4 whitespace-nowrap "
        >
          Check out
        </div>
        <p
          className={`whitespace-nowrap text-center 
          ${
            lastDateText === "Add dates"
              ? "text-gray-400"
              : "font-black text-black222 text-sm mb-c-1"
          }`}
        >
          {lastDateText}
        </p>
      </div>
    </div>
  );
}
