import { createSlice } from "@reduxjs/toolkit";

const header2Slice = createSlice({
  name: "header2Slice",
  initialState: {
    displayingIndex:0
    }, 
  reducers: {
    setDisplayingIndex: (state,action)=>{
        state.displayingIndex = action.payload
    }
  },
});
export const {setDisplayingIndex  } = header2Slice.actions;
const header2Reducer = header2Slice.reducer;
export default header2Reducer;
