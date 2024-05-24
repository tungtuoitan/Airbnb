import { useSelector, useDispatch } from "react-redux";
import { setRightSlider } from "../reducer/filterSlice";

export default function useCreateHandleTouchMoveRight() {
  const dispatch = useDispatch();
  const displacement = useSelector((state) => state.filterSlice.displacement);
  return (e) => {
    const currentRight = e.touches[0].clientX - displacement - 16
    dispatch(setRightSlider(currentRight));
  };
}
