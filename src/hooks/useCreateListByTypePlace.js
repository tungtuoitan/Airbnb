import { useSelector } from "react-redux";
import { homeList } from "../datas/homeListOriginal";
import { filterWidthTypePlace } from "../function/filterWithTypePlace";

export default function useCreateListByTypePlace() {
  const filter2 = useSelector((state) => state.filterSlice2.filter);

console.log("useCreateListByTypePlace runned")
  
  
  const hlByPlaceType2 = filterWidthTypePlace(filter2, homeList);
  return {
    homeListByTypePlace: hlByPlaceType2,
  };
}
