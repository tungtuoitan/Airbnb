import { createSlice } from "@reduxjs/toolkit";

const header2NavSlice = createSlice({
  name: "header2NavSlice",
  initialState: {
    leftArrowDisplay: false,
    rightArrowDisplay: true,
    widthScreen: 0,
    isScreen16: window.innerWidth >= 1640 ? true : false,
  },
  reducers: {
    showLeftArrow: (state) => {
      state.leftArrowDisplay = true;
    },
    hideLeftArrow: (state) => {
      state.leftArrowDisplay = false;
    },
    showRightArrow: (state) => {
      state.rightArrowDisplay = true;
    },
    hideRightArrow: (state) => {
      state.rightArrowDisplay = false;
    },
    setWidthScreen: (state, action) => {
      state.widthScreen = action.payload;
    },
    setIsScreen16: (state, action) => {
      state.isScreen16 = window.innerWidth >= 1640 ? true : false;
    },
  },
});
export const {
  showLeftArrow,
  hideLeftArrow,
  showRightArrow,
  hideRightArrow,
  setWidthScreen,
  setIsScreen16,
} = header2NavSlice.actions;
const header2NavReducer = header2NavSlice.reducer;
export default header2NavReducer;
