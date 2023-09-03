import { createSlice } from "@reduxjs/toolkit";
import homeList from "../datas/home-list";
const random5 = () => {
  return Math.floor(Math.random() * 30);
};

const filterSlice = createSlice({
  name: " filterSlice",
  initialState: {
    // # 1
    homeAmountByPrice: [
      77 + random5(),
      74 + random5(),
      71 + random5(),
      68 + random5(),
      65 + random5(),
      62 + random5(),
      59 + random5(),
      56 + random5(),
      53 + random5(),
      50 + random5(),
      47 + random5(),
      44 + random5(),
      41 + random5(),
      38 + random5(),
      35 + random5(),
      32 + random5(),
      29 + random5(),
      26 + random5(),
      23 + random5(),
      20 + random5(),
      17 + random5(),
      14 + random5(),
      11 + random5(),
      8 + random5(),
      5 + random5(),
      2 + random5(),
      1 + random5(),
      4 + random5(),
      7 + random5(),
      10 + random5(),
      13 + random5(),
      16 + random5(),
      19 + random5(),
      22 + random5(),
      25 + random5(),
      28 + random5(),
      31 + random5(),
      34 + random5(),
      37 + random5(),
      40 + random5(),
      43 + random5(),
      46 + random5(),
      49 + random5(),
      52 + random5(),
      55 + random5(),
      58 + random5(),
      61 + random5(),
      64 + random5(),
      67 + random5(),
      70 + random5(),
      73 + random5(),
      76 + random5(),
      79 + random5(),
      80 + random5(),
    ],
    // ## 2
    leftSliderValue: 0,
    rightSliderValue:100,
    // isPress:[false,false],
    isPress:false,
    displacement: 0,
    graphWidth: 0,
    graphHeight:0,

    // # beds and bedrooms
    placeType: "Any type",
    amountBeds: "Any",
    amountBedrooms: "Any",
    amountBathrooms: "Any",

    // # homeList
    currentHomeList: homeList,
  },
  reducers: {
    // # place type
    setPlaceType: (state, action) => {
      state.placeType = action.payload;
    },
    // # Beds and bedrooms
    setAmountBeds: (state, action) => {
      state.amountBeds = action.payload;
    },
    setAmountBedrooms: (state, action) => {
      state.amountBedrooms = action.payload;
    },
    setAmountBathrooms: (state, action) => {
      state.amountBathrooms = action.payload;
    },
    // ## Price range
    setLeftSlider: (state, action) => {
      if (action.payload < 0) {
        state.leftSliderValue = 0;
      } else if (action.payload > state.rightSliderValue - 24 ) {
        state.leftSliderValue = state.rightSliderValue - 24;
      } else {
        state.leftSliderValue = action.payload;
      }
    },
    setRightSlider: (state, action) => {
      if (action.payload < state.leftSliderValue + 24) {  // minimum
        state.rightSliderValue = state.leftSliderValue + 24;
      } else if (action.payload > state.graphWidth - 32 ) {
        state.rightSliderValue = state.graphWidth - 32;
      } else {
        state.rightSliderValue = action.payload;
      }
    },
    setIsPress:(state,action)=>{
      state.isPress= action.payload
    },
   
    setDisplacement :(state,action)=>{
      state.displacement = action.payload
    },
    setGraphWidth :(state,action)=>{
      state.graphWidth = action.payload
    },
    setGraphHeight :(state,action)=>{
      state.graphHeight = action.payload
    },
    // ##
    setCurrentHomeList: (state, action) => {
      const homeListNow = [];
      for (let i = 0; i < homeList.length; i++) {
        if (
          homeList[i].placeType === state.placeType ||
          state.placeType === "Any type"
        ) {
          homeListNow.push(homeList[i]);
        }
      }
      state.currentHomeList = homeListNow;
    },
  },
});
export const {
  setPlaceType,
  setLeftSlider,
  setRightSlider,
  setIsPress,
  setAmountBeds,
  setAmountBathrooms,
  setAmountBedrooms,
  setDisplacement,
  setCurrentHomeList,
  setGraphWidth,
  setGraphHeight,
} = filterSlice.actions;
const filterSliceReducer = filterSlice.reducer;
export default filterSliceReducer;
