import { useDispatch, useSelector } from "react-redux";
import { setCurrentList } from "../reducer/bodySlice";
import getCurrentHomeList2 from "../function/getCurrentHomeList2";

export default function useUpdateList() {
  const dispatch = useDispatch();
  const filter2 = useSelector((state) => state.filterSlice2.filter);
  const nTimesShuffle = useSelector((s) => s.bodySlice.nTimesShuffle);

  dispatch(setCurrentList(getCurrentHomeList2(filter2, nTimesShuffle)));
}
