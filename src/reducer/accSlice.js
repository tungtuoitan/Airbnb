import { createSlice } from "@reduxjs/toolkit";

const accSlice = createSlice({
  name: "accSlice",
  initialState: {
    isLogged: false   ,
    logInFrom: ''
  },
  reducers: {
    toggleIsLogged : (state,action)=>{
      state.isLogged = !state.isLogged
    },
    setLogInFrom : (state,action)=>{
      state.logInFrom = action.payload
    }
  },
});
export const { toggleIsLogged,setLogInFrom } = accSlice.actions;
const accSliceReducer = accSlice.reducer;
export default accSliceReducer;
