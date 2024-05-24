import { setIsFull } from "../reducer/filterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ShowMore2() {
  const dispatch = useDispatch();
  const isDisplayFull = useSelector(
    (state) => state.filterSlice.filter.isDisplayFull
  );
  const handleShowMore = () => {
    dispatch(setIsFull());
  };

  return (
    <a
      className={`text-base  text-black222 underline font-bold text-left
        || pt-c6 pb-2 flex justify-start cursor-pointer
        `}
      onClick={handleShowMore}
    >
      {isDisplayFull ? 'ShowLess':'Show More'}
    </a>
  );
}
