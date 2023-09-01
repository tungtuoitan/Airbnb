import { useSelector, useDispatch } from "react-redux";
import { setControlValueRight } from "../reducer/filterSlice";

export default function useCreateHandleDragRight() {
  const dispatch = useDispatch();
  const displacement = useSelector((state) => state.filterSlice.displacement);
  return (e) => {
    const currentRight = e.touches[0].clientX - displacement - 16
    dispatch(setControlValueRight(currentRight));
  };
}
