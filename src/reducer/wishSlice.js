import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wishSlice",
  initialState: {
    wishIdArr: [0,1,2,3,4,5],
  },
  reducers: {
    setWishId: (state, action) => {
      if (state.wishIdArr.includes(action.payload)) {
        state.wishIdArr.pop(action.payload);
      } else {
        state.wishIdArr.push(action.payload);
      }
    },
  },
});
export const { setWishId } = wishSlice.actions;
const wishSliceReducer = wishSlice.reducer;
export default wishSliceReducer;
