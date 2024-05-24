import { allPlaces } from "../datas/allPlaces";
import { useDispatch } from "react-redux";
import { actionFiveCitiesArr } from "../actions/action";

export const useDisplayByTyping = ()=>{
    
    const dispatch = useDispatch();
    return (typingValue)=>{
      const resultArr = [];
      for (let i = 0; i < allPlaces.length; i++) {
        if (
          allPlaces[i]
            .toLocaleLowerCase()
            .includes(typingValue.toLocaleLowerCase()) &&
            allPlaces[i].toLocaleLowerCase()[0] ===
            typingValue.toLocaleLowerCase()[0]
        ) {
          resultArr.push(allPlaces[i]);
        }
      }
      if (resultArr.length < 4) {
        dispatch(actionFiveCitiesArr(resultArr));
      } else {
        dispatch(actionFiveCitiesArr(resultArr.slice(0, 5)));
      }
      return
    }}
