import { configureStore, combineReducers } from "@reduxjs/toolkit";
import rootReducer from "../reducer/reducer";
import firstReducer from "../actions/first-slice";
import dateItemSliceReducer from "../reducer/dateItemSlice";
import whoComingReducer from "../reducer/whoComingSlice";
import header2NavReducer from "../reducer/header2NavSlice";
import header2Reducer from "../reducer/header2Slice";
import bodySliceReducer from "../reducer/bodySlice";
import footerSliceReducer from "../reducer/footerSlice";
import loginSliceReducer from "../reducer/loginSlice";
import accSliceReducer from "../reducer/accSlice";
import inboxSlice from '../reducer/inboxSlice'
import inboxSliceReducer from "../reducer/inboxSlice";
import filterSliceReducer from "../reducer/filterSlice";

const rooooootReducer = combineReducers({
  root: rootReducer,
  slice: firstReducer,
  dateItemSlice:dateItemSliceReducer,
  whoComing:whoComingReducer,
  header2Nav:header2NavReducer,
  header2:header2Reducer,
  bodySlice:bodySliceReducer,
  footerSlice:footerSliceReducer,
  loginSlice:loginSliceReducer,
  accSlice:accSliceReducer,
  inboxSlice:inboxSliceReducer,
  filterSlice:filterSliceReducer
});
const store = configureStore({
  reducer: rooooootReducer,
});

export default store;
