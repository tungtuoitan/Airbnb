import { useDispatch, useSelector } from "react-redux";
import { whereToInputChange } from "../actions/action";
import { setCurrentPopUp } from "../reducer/searchSlice";
import { actionFiveCitiesArr } from "../actions/action";
import fakeData from "../datas/fake-data";
import { forwardRef } from "react";

export const  InputWhere = forwardRef((props,ref)=> {
  const placeholderOnSearchInput = useSelector(
    (state) => state.root.placeholderOnSearchInput
  );
  const whereToInput = useSelector(
    (state) => state.root.whereToInput
  );
  const dispatch = useDispatch();
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
  const handleOnClick = () => {
    dispatch(setCurrentPopUp('where'));
  };
  return (
    <input ref={ref}
      className={` w-full focus:outline-0 bg-transparent
      whitespace-nowrap  
          ${whereToInput === ""
              ? ""
              : "font-black text-black222 text-sm mb-c-1"
          }`}
      
      placeholder={placeholderOnSearchInput}
      value = {whereToInput}
      onChange={(e) => {
        handleOnChange(e);
      }}
      onClick={handleOnClick}
    />
  );
})
