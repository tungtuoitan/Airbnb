import { createSlice } from "@reduxjs/toolkit";
import { filterDefault } from "../datas/filterDefault";

const filterSlice = createSlice({
  name: " filterSlice",
  initialState: {
    // #
    isFilterOn: false,
    zRandom: Math.random(),

    //# Filter Info
    filter: {
      placeType: "Any type",
      leftPrice: 0,
      rightPrice: 275,
      //
      amountBeds: "Any",
      amountBedrooms: "Any",
      amountBathrooms: "Any",
      propertyType: "",
      // #
      amenities: {
        essentials: [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ],
        features: [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ],
        location: [false, false],
      },
      isDisplayFull: false,
      //
      bookingOptions: {
        instantBook: false,
        selfCheckIn: false,
      },
    },

    // ## 2
    leftSliderValue: 0,
    rightSliderValue: 99,
    // #
    isPress: [false, false],
    displacement: 0,
    graphWidth: 0,
    graphHeight: 0,
    graphFake: {
      "Any type": [
        0, 1, 2, 4, 8, 5, 6, 12, 10, 8, 11, 13, 12, 16, 20, 14, 12, 10, 11, 14,
        12, 13, 12, 11, 8, 9, 11, 6, 4, 4, 3, 2, 2, 1, 4, 2, 6, 7, 5, 4, 3, 6,
        5, 3, 2, 1, 2, 3, 4, 2,
      ],
      Room: [
        1, 2, 3, 0, 1, 2, 0, 5, 3, 1, 4, 6, 5, 9, 13, 7, 5, 3, 4, 7, 5, 6, 5, 4,
        1, 2, 4, 2, 0, 2, 2, 4, 3, 2, 1, 2, 2, 1, 2, 5, 2, 1, 2, 0, 0, 1, 2, 3,
        1, 2,
      ],
      "Entire home": [
        1, 1, 1, 4, 7, 3, 6, 7, 7, 7, 6, 4, 3, 3, 13, 9, 6, 6, 8, 7, 7, 10, 7,
        1, 1, 3, 2, 0, 3, 2, 4, 3, 1, 4, 1, 2, 1, 7, 3, 2, 3, 3, 2, 4, 2, 2, 4,
        1, 1,
      ],
    },
  },
  reducers: {
    setIsFilterOn: (state, action) => {
      state.isFilterOn = !state.isFilterOn;
    },
    // # place type
    setPlaceType: (state, action) => {
      state.filter.placeType = action.payload;
    },

    // # Beds and bedrooms
    setAmountBeds: (state, action) => {
      state.filter.amountBeds = action.payload;
    },
    setAmountBedrooms: (state, action) => {
      state.filter.amountBedrooms = action.payload;
    },
    setAmountBathrooms: (state, action) => {
      state.filter.amountBathrooms = action.payload;
    },
    // ## Price range
    setLeftSlider: (state, action) => {
      if (action.payload < 0) {
        state.leftSliderValue = 0;
      } else if (action.payload > state.rightSliderValue - 24) {
        state.leftSliderValue = state.rightSliderValue - 24;
      } else {
        state.leftSliderValue = action.payload;
      }
    },
    setRightSlider: (state, action) => {
      if (action.payload < state.leftSliderValue + 24) {
        // minimum
        state.rightSliderValue = state.leftSliderValue + 24;
      } else if (action.payload > state.graphWidth - 32) {
        state.rightSliderValue = state.graphWidth - 32;
      } else {
        state.rightSliderValue = action.payload;
      }
    },
    setLeftValue: (state, action) => {
      state.leftSliderValue = action.payload;
    },
    setRightValue: (state, action) => {
      state.rightSliderValue = action.payload;
    },
    setLeftPrice: (state, action) => {
      if(action.payload > 0) state.filter.leftPrice = action.payload;
    },
    setRightPrice: (state, action) => {
      if(action.payload > 0) state.filter.rightPrice = action.payload;
    },
    setIsPress: (state, action) => {
      state.isPress = action.payload;
    },

    setDisplacement: (state, action) => {
      state.displacement = action.payload;
    },
    setGraphWidth: (state, action) => {
      state.graphWidth = action.payload;
    },
    setGraphHeight: (state, action) => {
      state.graphHeight = action.payload;
    },
    // ##
    setPropertyType: (state, action) => {
      state.filter.propertyType = action.payload;
    },
    // #
    setAmenities: (state, action) => {
      const { index, type, amenities } = action.payload;
      const newAmenities = { ...amenities };
      const newX = [...newAmenities[type]];
      //#
      newX[index] = !newX[index];
      newAmenities[type] = newX;
      //#
      state.filter.amenities = newAmenities;
    },
    //#
    setIsFull: (state, action) => {
      state.filter.isDisplayFull = !state.filter.isDisplayFull;
    },
    //
    setBookingOptions: (state, action) => {
      if (action.payload === "Instant Book") {
        state.filter.bookingOptions.instantBook =
          !state.filter.bookingOptions.instantBook;
      } else {
        state.filter.bookingOptions.selfCheckIn =
          !state.filter.bookingOptions.selfCheckIn;
      }
    },
    setFilterDefault: (state, action) => {
      state.filter = { ...filterDefault };
    },
  },
});
export const {
  setIsFilterOn,
  setPlaceType,
  setLeftSlider,
  setRightSlider,
  setLeftValue,
  setRightValue,
  setLeftPrice,
  setRightPrice,
  setIsPress,
  setAmountBeds,
  setAmountBathrooms,
  setAmountBedrooms,
  setPropertyType,
  //#
  setDisplacement,
  setGraphWidth,
  setGraphHeight,
  //#
  setAmenities,
  setIsFull,
  //
  setBookingOptions,
  setFilterDefault,
} = filterSlice.actions;
const filterSliceReducer = filterSlice.reducer;
export default filterSliceReducer;
