import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wishSlice",
  initialState: {
    wishIdArr: [],
    wishLength:0
  },
  reducers: {
    setWishId: (state, action) => {
      if (state.wishIdArr.includes(action.payload)) {
        let newArr = state.wishIdArr.filter(item => item !==action.payload);
        state.wishIdArr = [...newArr]
        state.wishLength = newArr.length
      } else {
        let newArr = [...state.wishIdArr]
        newArr.push(action.payload);
        state.wishIdArr =[ ...newArr]
        state.wishLength = newArr.length
      }

    },
    
  },
});
export const { setWishId } = wishSlice.actions;
const wishSliceReducer = wishSlice.reducer;
export default wishSliceReducer;
