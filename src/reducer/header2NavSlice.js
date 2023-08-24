import { createSlice } from "@reduxjs/toolkit";

const header2NavSlice = createSlice({
  name: "header2NavSlice",
  initialState: {
    leftArrowDisplay:false,
    rightArrowDisplay:true
    }, 
  reducers: {
    showLeftArrow: (state)=>{
        state.leftArrowDisplay = true
    },
    hideLeftArrow: (state)=>{
        state.leftArrowDisplay = false
    },
    showRightArrow: (state)=>{
        state.rightArrowDisplay = true
    },
    hideRightArrow: (state)=>{
        state.rightArrowDisplay = false
    },
  },
});
export const {showLeftArrow,hideLeftArrow,showRightArrow,hideRightArrow  } = header2NavSlice.actions;
const header2NavReducer = header2NavSlice.reducer;
export default header2NavReducer;
