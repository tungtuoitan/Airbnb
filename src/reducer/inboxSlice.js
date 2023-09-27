import { createSlice } from "@reduxjs/toolkit";

const inboxSlice = createSlice({
  name: "inboxSlice",
  initialState: {
    isMessOn: true,
    currentChoice:'All conversations', 
    isPopUpOn:false
  },
  reducers: {
    setIsmessOn : (state,action)=>{
      state.isMessOn = action.payload
    },
    setCurrentChoice:(state,action)=>{
      state.currentChoice = action.payload
    },
    toggleIsPopUpOn:(state)=>{
      state.isPopUpOn = !state.isPopUpOn
    }
   
    
  },
});
export const { setIsmessOn,setCurrentChoice,toggleIsPopUpOn } = inboxSlice.actions;
const inboxSliceReducer = inboxSlice.reducer;
export default inboxSliceReducer;
