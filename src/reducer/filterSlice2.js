import { createSlice } from "@reduxjs/toolkit";
import { filterDefault } from "../datas/filterDefault";

const filterSlice2 = createSlice({
  name: " filterSlice2",
  initialState: {
    filter: {
        placeType: "Any type",
        leftPrice: 0,
        rightPrice: 1300,
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
      }
  },
  reducers: {
    setUpdateFilter2: (state,action)=>{
        state.filter = {...action.payload}
    },
    setFilterDefault2: (state, action) => {
      state.filter = { ...filterDefault };
    },
  }
});

export const {setUpdateFilter2,setFilterDefault2} = filterSlice2.actions;
const filterSlice2Reducer = filterSlice2.reducer;
export default filterSlice2Reducer;
