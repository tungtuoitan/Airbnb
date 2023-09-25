import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "roomSlice",
  initialState: {
    currentHomeId: 0,
    currentSliceIndex: 0,
    imgTotal: 5,
    isDescOn: false,
    isAmenlitiesOn: false,
    isNotiOn:false,
    isSticked:false,
    isBarOn:false,
    isConfirmRequestOn:false,
    isShowFullImgOn:false,
    isDisplay1By1:false,
    isBtnInViewPort:false,
  },
  reducers: {
    setCurrentSliceIndex: (state, action) => {
      if (action.payload === "left") {
        if (state.currentSliceIndex >= state.imgTotal -1) {
          console.log(state.currentSliceIndex,state.imgTotal,0)
          state.currentSliceIndex = 0;
        } else {
          state.currentSliceIndex += 1; 
        }
      }
      if (action.payload === "right") {
        if (state.currentSliceIndex === 0) {
          state.currentSliceIndex = state.imgTotal - 1;
        } else {
          state.currentSliceIndex -= 1;
        }
      }
    },
    setCurrentSliceIndexByIndex: (state,action)=>{
      state.currentSliceIndex = action.payload
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
    },
    setConfirmRequestOn: (state,action)=>{
      state.isConfirmRequestOn = !state.isConfirmRequestOn
    },
    setIsShowFullImgOn:(state,action)=>{
      state.isShowFullImgOn= !state.isShowFullImgOn
    },
    setIsDisplay1By1:(state,action)=>{
      state.isDisplay1By1= !state.isDisplay1By1
    },
    setIsBtnOnViewPort:(state,action)=>{
      state.isBtnInViewPort = action.payload
    }
  },
}); 
export const {
  setCurrentSliceIndex,
  setIsBtnOnViewPort,
  setIsDisplay1By1,
  setCurrentHomeId,
  setIsDescOn,
  setConfirmRequestOn,
  setIsAmenlitiesOn,
  setIsNotiOn,
  setIsSticked,
  setIsBarOn,
  setIsShowFullImgOn,
  setCurrentSliceIndexByIndex,
} = roomSlice.actions;
const roomSliceReducer = roomSlice.reducer;
export default roomSliceReducer;
