import { createSlice } from "@reduxjs/toolkit";

const header1Slice = createSlice({
  name: "header1Slice",
  initialState: {
    isMenuOn: false,
  },
  reducers: {
    
    setCurrentChoice: (state, action) => {
      state.currentChoice = action.payload;
    },
    setIsMenuOn: (state,action) => {
      state.isMenuOn = action.payload;
    },
  },
});
export const {  setCurrentChoice, setIsMenuOn } =
  header1Slice.actions;
const header1SliceReducer = header1Slice.reducer;
export default header1SliceReducer;
