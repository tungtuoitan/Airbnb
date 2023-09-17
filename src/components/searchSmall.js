import InnerSearchSmall from "./innerSearchSmall";
import { setIsSearchBigOn } from "../reducer/searchSlice";
import { useDispatch } from "react-redux";

export default function SearchSmall() {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setIsSearchBigOn());
  };
  return (
    <div
      className={`inline-flex  justify-center items-center
         text-sm font-semibold color222    `}
      onClick={handleOnClick}
    >
      <InnerSearchSmall />
    </div>
  );
}
