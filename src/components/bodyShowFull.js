import {
  setCurrentSliceIndexByIndex,
  setIsDisplay1By1,
} from "../reducer/roomsSlice";
import Gallery from "./gallery";
import { useDispatch, useSelector } from "react-redux";

export default function BodyShowFull() {
  const currentHomeId = useSelector((s) => s.roomSlice.currentHomeId);
  const currentHomeList = useSelector((s) => s.bodySlice.currentList);
  const curHome = currentHomeList[currentHomeId];
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setIsDisplay1By1());
    dispatch(setCurrentSliceIndexByIndex(0));
  };

  return (
    <div className="overflow-x-hidden overflow-y-auto w-full h-full overscroll-contain   ">
      <div className={`body-show-full   w-full pb-c164 `}>
        <div>
          <img
            src={`${curHome.imgarr[0]}`}
            className="w-full mb-2 hover-filter cursor-pointer"
            onClick={handleOnClick}
          />
          <Gallery />
        </div>
      </div>
    </div>
  );
}
