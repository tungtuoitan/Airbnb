import { useDispatch,useSelector } from "react-redux";
import { whereToInputChange, actionFiveCitiesArr } from "../actions/action";
import fakeData from "../datas/fake-data";
import {useEffect,useRef} from 'react'


export const useSendFiveCitiesArr = ()=>{
    const dispatch = useDispatch()
    const handleOnChange = (e) => {
        dispatch(whereToInputChange(e.target.value));
    
        if (e.target.value.length === 1) {
          let firstKeyword = e.target.value[0];
          let fiveCitiesArr = fakeData.citiesByLetter[firstKeyword];
          if (fiveCitiesArr === undefined) {
              fiveCitiesArr = [];
            } else {
            dispatch(actionFiveCitiesArr(fiveCitiesArr));
          }
        } else {
          dispatch(actionFiveCitiesArr([]));
        }
      };
}