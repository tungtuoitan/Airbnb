import { createSlice } from "@reduxjs/toolkit";

const bodySlice = createSlice({
  name: "bodySlice",
  initialState: {
    displayItems: 20,
    isTotalPrice: false,
  },
  reducers: {
    increaseDisplayItems: (state) => {
      if (state.displayItems <= 40) {
        state.displayItems += 20;
      }
    },
    setIsTotalPrice:(state,action)=>{
      state.isTotalPrice=!state.isTotalPrice
    }
  },
});
export const { increaseDisplayItems,setIsTotalPrice } = bodySlice.actions;
const bodySliceReducer = bodySlice.reducer;
export default bodySliceReducer;
