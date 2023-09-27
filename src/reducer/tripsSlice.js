import { createSlice } from "@reduxjs/toolkit";

const tripsSlice = createSlice({
  name: "tripsSlice",
  initialState: {
    tripsArr: [
    ]
  },
  reducers: {
    addTrip: (state, action) => {
        state.tripsArr.push( action.payload)
    },
   
  },
});
export const { addTrip } = tripsSlice.actions;
const tripsSliceReducer = tripsSlice.reducer;
export default tripsSliceReducer;
