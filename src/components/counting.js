import { useDispatch, useSelector } from "react-redux";
import useCreateList from "../hooks/useCreateList";

export default function Counting() {
  const currentSliceIndex = useSelector((s) => s.roomSlice.currentSliceIndex);
  const currentHomeList = useCreateList().currentHomeList;
  const currentHomeId = useSelector((s) => s.roomSlice.currentHomeId);
  const imgArr = currentHomeList[currentHomeId].imgarr;

  return (
    <div
      className="   z1000 text-sm text-white  py-c6 px-4 "
    >
      <span>{currentSliceIndex + 1}</span> / {imgArr.length}
    </div>
  );
}
