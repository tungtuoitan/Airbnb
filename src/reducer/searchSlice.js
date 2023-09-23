import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    isSearchBigOn:false,
    currentPopUp: '',
    isFirstTimeofWho:true,
  },
  reducers: {
    setIsSearchBigOn:(state,action)=>{
        state.isSearchBigOn = !state.isSearchBigOn
    },
    setCurrentPopUp:(state,action)=>{
      state.currentPopUp = action.payload
  },
  setIsFirstTimeOfWho:(state,action)=>{
    state.isFirstTimeofWho = false
  }
   
  },
});
export const {setIsSearchBigOn,setCurrentPopUp ,setIsFirstTimeOfWho } = searchSlice.actions;
const searchSliceReducer = searchSlice.reducer;
export default searchSliceReducer;
