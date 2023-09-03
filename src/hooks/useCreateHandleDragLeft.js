import { useSelector, useDispatch } from "react-redux";
import { setLeftSlider, setGraphWidth } from "../reducer/filterSlice";

export default function useCreateHandleDragLeft() {
  const dispatch = useDispatch();
  const displacement = useSelector((state) => state.filterSlice.displacement);
  return (e) => {
    e.preventDefault()
    if (e.clientX !== 0) {
      const currentLeft = e.clientX - displacement - 16; // 16 = widthTarget(32) / 2
      dispatch(setLeftSlider(currentLeft));
    }
  };
}
