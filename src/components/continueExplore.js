import { useDispatch, useSelector } from "react-redux";
import { increaseDisplayItems } from "../reducer/bodySlice";
export default function ContinueExplore() {
  const displayItems = useSelector((s) => s.bodySlice.displayItems);
  const totalItems = useSelector((s) => s.bodySlice.currentList).length;
  
  const dispatch = useDispatch();
  const handleOnClick = () => {
    if (displayItems < totalItems) {
      dispatch(increaseDisplayItems());
    }
  };

  return (
    <div className="CONTINUE  color222  pt-14">
      <p className="font-bold font-size18 mb-4 text-center ">
        Continue exploring design homes
      </p>
      <button
        onClick={handleOnClick}
        className={` text-white px-c24 py-c12 rounded-md font-semibold text-base   whitespace-nowrap
        ${
          displayItems > totalItems
            ? "bg-black/50"
            : "bg-222 hover:bg-black border-1  border-black "
        }`}
      >
        Show more
      </button>
    </div>
  );
}
