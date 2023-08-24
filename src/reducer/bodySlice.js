import { createSlice } from "@reduxjs/toolkit";

const bodySlice = createSlice({
  name: "bodySlice",
  initialState: {
    displayItems: 20,
  },
  reducers: {
    increaseDisplayItems: (state) => {
      if (state.displayItems <= 40) {
        state.displayItems += 20;
      }
    },
  },
});
export const { increaseDisplayItems } = bodySlice.actions;
const bodySliceReducer = bodySlice.reducer;
export default bodySliceReducer;
