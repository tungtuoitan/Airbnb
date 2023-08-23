import { createSlice, current } from "@reduxjs/toolkit";
import { today } from "../function/timeForCalendar";

const dateItemSlice = createSlice({
  name: "dateItemSlice",
  initialState: {
    firstDate: [],
    lastDate: [],
    currentMonth: {
      month: today.month,
      year: today.year,
    }, // là cái date khi user nhấn prev / next, chứ k phải time trực tuyến
    whereText: 'Add dates'
  },
  reducers: {
    pickDate: (state, action) => {
      let { firstDate, lastDate } = state;
      let { payload } = action;
      if (firstDate.length === 0 && lastDate.length === 0) {
        state.firstDate = [...payload];
      } else if (firstDate.length === 0 && lastDate.length !== 0) {
        // nếu click vào last
        if (JSON.stringify(lastDate) === JSON.stringify(payload)) {
          state.lastDate = [];
        } else {
          state.firstDate = [...payload];
        }
      } else if (firstDate.length !== 0 && lastDate.length === 0) {
        // nếu click vào first
        if (JSON.stringify(firstDate) === JSON.stringify(payload)) {
          state.firstDate = [];
        } else {
          state.lastDate = [...payload];
        }
      } else {
        if (JSON.stringify(firstDate) === JSON.stringify(payload)) {
          // nếu click vào first
          state.firstDate = [];
        } else if (JSON.stringify(lastDate) === JSON.stringify(payload)) {
          // nếu click vào last
          state.lastDate = [];
        } else {
          state.lastDate = [...payload];
        }
      }

      // nếu first > last thì đảo ngược
      if (
        state.firstDate[2] > state.lastDate[2] ||
        (state.firstDate[2] === state.lastDate[2] &&
          state.firstDate[1] > state.lastDate[1]) ||
        (state.firstDate[2] === state.lastDate[2] &&
          state.firstDate[1] === state.lastDate[1] &&
          state.firstDate[0] > state.lastDate[0])
      ) {
        let firstDateCopy = [...state.firstDate];
        state.firstDate = [...state.lastDate];
        state.lastDate = [...firstDateCopy];
      }
    },
    goPrevMonth: (state, action) => {
      if (state.currentMonth.month === today.month) {
        return;
      }
      if (state.currentMonth.month === 0) {
        return {
          ...state,
          currentMonth: { month: 11, year: state.currentMonth.year - 1 },
        };
      } else {
        state.currentMonth = {
          month: state.currentMonth.month - 1,
          year: state.currentMonth.year,
        };
      }
    },
    goNextMonth: (state, action) => {
      if (state.currentMonth.month === 11) {
        return {
          ...state,
          currentMonth: { month: 0, year: state.currentMonth.year + 1 },
        };
      } else {
        return {
          ...state,
          currentMonth: {
            month: state.currentMonth.month + 1,
            year: state.currentMonth.year,
          },
        };
      }
    },
    resetDate : (state,action)=>{
      state.firstDate = [],
      state.lastDate = []
    }
  },
});
export const { pickDate, goPrevMonth, goNextMonth,resetDate } = dateItemSlice.actions;
const dateItemSliceReducer = dateItemSlice.reducer;
export default dateItemSliceReducer;
