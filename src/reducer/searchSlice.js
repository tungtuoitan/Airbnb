import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    isSearchBigOn:true,
  },
  reducers: {
    setIsSearchBigOn:(state,action)=>{
        state.isSearchBigOn = !state.isSearchBigOn
    }
   
  },
});
export const {setIsSearchBigOn  } = searchSlice.actions;
const searchSliceReducer = searchSlice.reducer;
export default searchSliceReducer;
