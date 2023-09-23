import { createSlice } from "@reduxjs/toolkit";
import { checkIsLaptop } from "../function/checkIsLaptop";

const bodySlice = createSlice({
  name: "bodySlice",
  initialState: {
    displayItems: 20,
    isTotalPrice: false,
    nTimesShuffle: 1,
    isHoverItem: false,
    hoveringIndex: 999,
    isLaptop: checkIsLaptop(),
    itemWidth: 0,
  },
  reducers: {
    increaseDisplayItems: (state) => {
      state.displayItems += 20;
    },
    setIsTotalPrice: (state, action) => {
      state.isTotalPrice = !state.isTotalPrice;
    },
    setNTimesShuffle: (state, action) => {
      let newNtimes = 3;
      while (newNtimes === state.nTimesShuffle) {
        newNtimes = Math.floor(Math.random() * 4 + 1);
      }
      state.nTimesShuffle = newNtimes;
    },
    setIsHoverItem: (state, action) => {
      state.isHoverItem = action.payload;
    },
    setHoveringIndex: (state, action) => {
      state.hoveringIndex = action.payload;
    },
    setItemWidth: (state, action) => {
      state.itemWidth = action.payload;
    },
  },
});
export const {
  increaseDisplayItems,
  setItemWidth,
  setIsTotalPrice,
  setNTimesShuffle,
  setIsHoverItem,
  setHoveringIndex,
} = bodySlice.actions;
const bodySliceReducer = bodySlice.reducer;
export default bodySliceReducer;
