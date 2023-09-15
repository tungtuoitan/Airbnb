import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "roomSlice",
  initialState: {
    currentHomeId: 0,
    currentSliceIndex: 0,
    imgTotal: 4,
    isDescOn: false,
    isAmenlitiesOn: false,
    isNotiOn:false,
    isSticked:false,
    isBarOn:false,
  },
  reducers: {
    setCurrentSliceIndex: (state, action) => {
      if (action.payload === "left") {
        if (state.currentSliceIndex >= state.imgTotal) {
          state.currentSliceIndex = 0;
        } else {
          state.currentSliceIndex += 1;
        }
      }
      if (action.payload === "right") {
        if (state.currentSliceIndex === 0) {
          state.currentSliceIndex = state.imgTotal;
        } else {
          state.currentSliceIndex -= 1;
        }
      }
    },
    setCurrentHomeId: (state, action) => {
      state.currentHomeId = action.payload;
    },
    setIsDescOn: (state, action) => {
      state.isDescOn = !state.isDescOn;
    },
    setIsAmenlitiesOn: (state, action) => {
      state.isAmenlitiesOn = !state.isAmenlitiesOn;
    },
    setIsNotiOn : (state,action)=>{
      state.isNotiOn = !state.isNotiOn;
    },
    setIsSticked: (state,action)=>{
      state.isSticked = action.payload
    },
    setIsBarOn: (state,action)=>{
      state.isBarOn = action.payload
    }
  },
});
export const {
  setCurrentSliceIndex,
  setCurrentHomeId,
  setIsDescOn,
  setIsAmenlitiesOn,
  setIsNotiOn,
  setIsSticked,
  setIsBarOn
} = roomSlice.actions;
const roomSliceReducer = roomSlice.reducer;
export default roomSliceReducer;
