import { configureStore, combineReducers } from "@reduxjs/toolkit";
import rootReducer from "../reducer/reducer";
import firstReducer from "../actions/first-slice";
import dateItemSliceReducer from "../reducer/dateItemSlice";
import whoComingReducer from "../reducer/whoComingSlice";
import header2NavReducer from "../reducer/header2NavSlice";
import header2Reducer from "../reducer/header2Slice";
import bodySliceReducer from "../reducer/bodySlice";

const rooooootReducer = combineReducers({
  root: rootReducer,
  slice: firstReducer,
  dateItemSlice:dateItemSliceReducer,
  whoComing:whoComingReducer,
  header2Nav:header2NavReducer,
  header2:header2Reducer,
  bodySlice:bodySliceReducer
});
const store = configureStore({
  reducer: rooooootReducer,
});

export default store;
