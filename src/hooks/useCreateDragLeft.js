import { useSelector, useDispatch } from "react-redux";
import { setControlValueLeft, setWidthContainer } from "../reducer/filterSlice";

export default function useCreateHandleDragLeft() {
  const dispatch = useDispatch();
  const displacement = useSelector((state) => state.filterSlice.displacement);
  return (e) => {
    const currentLeft = e.touches[0].clientX - displacement - 16; // 16 = widthTarget(32) / 2
    dispatch(setControlValueLeft(currentLeft));
  };
}
