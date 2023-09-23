import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wishSlice",
  initialState: {
    wishIdArr: [],
  },
  reducers: {
    setWishId: (state, action) => {
      if (state.wishIdArr.includes(action.payload)) {
        state.wishIdArr = state.wishIdArr.filter(item => item !==action.payload);
      } else {
        state.wishIdArr.push(action.payload);
      }
    },
    setWishId2: (state,action)=>{
    }
  },
});
export const { setWishId } = wishSlice.actions;
const wishSliceReducer = wishSlice.reducer;
export default wishSliceReducer;
