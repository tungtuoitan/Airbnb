import { createSlice } from "@reduxjs/toolkit";

const dateItemSlice = createSlice({
  name: "dateItemSlice",
  initialState: {
    firstDate: [],
    lastDate: [],
    today:[]
  },
  reducers: {
    pickDate: (state, action) => {
        // nếu pickDate bé hơn firstDate thì reset firstDate
      if (
        state.firstDate.length === 0 || // cái click đầu tiên

        action.payload[2] < state.firstDate[2] || // năm bé hơn là ok

        action.payload[1] < state.firstDate[1] && 
        action.payload[2] === state.firstDate[2] ||  // năm bằng nhau và tháng bé hơn

        action.payload[0] < state.firstDate[0]  &&  // năm, tháng bằng nhau thì ngày phải bé hơn
        action.payload[1] === state.firstDate[1]  &&
        action.payload[2] === state.firstDate[2]   
      ) {
        return { ...state, firstDate: action.payload };

        // nếu không thì reset lastDate
      } else {
        return { ...state, lastDate: action.payload };
      }
    },
  },
});
export const { pickDate } = dateItemSlice.actions;
const dateItemSliceReducer = dateItemSlice.reducer;
export default dateItemSliceReducer;
