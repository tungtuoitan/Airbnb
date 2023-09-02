import { useSelector, useDispatch } from "react-redux";
import { setRightSlider } from "../reducer/filterSlice";

export default function useCreateHandleDragRight() {
  const dispatch = useDispatch();
  const displacement = useSelector((state) => state.filterSlice.displacement);
  return (e) => {
    if (e.clientX !== 0) {
      const currentRight = e.clientX - displacement - 16;
      console.log(e.clientX);
      dispatch(setRightSlider(currentRight));
    }
  };
}
