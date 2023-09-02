import { useSelector, useDispatch } from "react-redux";
import { setLeftSlider, setGraphWidth } from "../reducer/filterSlice";

export default function useCreateHandleTouchMoveLeft() {
  const dispatch = useDispatch();
  const displacement = useSelector((state) => state.filterSlice.displacement);
  return (e) => {
    const currentLeft = e.touches[0].clientX - displacement - 16; // 16 = widthTarget(32) / 2
    dispatch(setLeftSlider(currentLeft));
  };
}
