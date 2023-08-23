import { configureStore, combineReducers } from "@reduxjs/toolkit";
import rootReducer from "./reducer/reducer";
import firstReducer from "./actions/first-slice";
import dateItemSliceReducer from "./reducer/dateItemSlice";
import whoComingReducer from "./reducer/whoComingSlice";

const rooooootReducer = combineReducers({
  root: rootReducer,
  slice: firstReducer,
  dateItemSlice:dateItemSliceReducer,
  whoComing:whoComingReducer,
});
const store = configureStore({
  reducer: rooooootReducer,
});

export default store;
