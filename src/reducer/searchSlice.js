import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    isSearchBigOn:false,
    currentPopUp: '',
  },
  reducers: {
    setIsSearchBigOn:(state,action)=>{
        state.isSearchBigOn = !state.isSearchBigOn
    },
    setCurrentPopUp:(state,action)=>{
      state.currentPopUp = action.payload
  },
   
  },
});
export const {setIsSearchBigOn,setCurrentPopUp  } = searchSlice.actions;
const searchSliceReducer = searchSlice.reducer;
export default searchSliceReducer;
