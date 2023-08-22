import { configureStore, combineReducers } from "@reduxjs/toolkit";
import rootReducer from "./reducer/reducer";
import firstReducer from "./actions/first-slice";
import dateItemSliceReducer from "./reducer/dateItemSlice";

const rooooootReducer = combineReducers({
  root: rootReducer,
  slice: firstReducer,
  dateItemSlice:dateItemSliceReducer
});
const store = configureStore({
  reducer: rooooootReducer,
});

export default store;
