import { createSlice } from "@reduxjs/toolkit";

const footerSlice = createSlice({
  name: "footerSlice",
  initialState: {
    displayingIndex: 0,
    isShortList: true,
    numberOnShortList: 0,
    isLeftArrowDisplay: false,
    isRightArrowDisplay: true,
  },
  reducers: {
    setDisplayingIndex: (state, action) => {
      state.displayingIndex = action.payload;
    },
    showMore: (state) => {
      state.isShortList = !state.isShortList;
    },
    setLeftArrowDisplay: (state,action)=>{
      state.isLeftArrowDisplay=action.payload
    },
    setRightArrowDisplay: (state,action)=>{
      state.isRightArrowDisplay=action.payload
    },
    setNumberOnShortList: (state,action)=>{
      state.numberOnShortList= action.payload
    }
  },
});
export const { setDisplayingIndex, showMore,setLeftArrowDisplay,setRightArrowDisplay,setNumberOnShortList } = footerSlice.actions;
const footerSliceReducer = footerSlice.reducer;
export default footerSliceReducer;
