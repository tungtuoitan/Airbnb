import { createSlice } from "@reduxjs/toolkit";
import fakeData from "../datas/fake-data";
const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    isConfirmOpen: false,
    code: "",
    threePhoneNumber: fakeData.threePhoneNumber[0][1],
    country: fakeData.threePhoneNumber[0][0],
    valueSelected: `${fakeData.threePhoneNumber[0][1]} ${fakeData.threePhoneNumber[0][0]} `,
    isFinishOpen: false,
    isLastNameFocus: false,
    userInfo: {
      firstName: "",
      lastName: "", 
      birthdate: "",
      email: "", 
      phoneNumber:'',
      isCheckedReceive:false
    },
  },
  reducers: {
    toggleIsConfirmOpen: (state) => {
      state.isConfirmOpen = !state.isConfirmOpen;
    },
    toggleIsFinishOpen: (state) => {
      state.isFinishOpen = !state.isFinishOpen;
    },
    changeCode: (state, action) => {
      state.code = action.payload;
    },
    changePhoneNumber: (state, action) => {
      state.userInfo.phoneNumber = action.payload;
    },
    setValueSelected: (state, action) => {
      state.valueSelected = action.payload;

      //set code
      const startIndex = state.valueSelected.indexOf("("); // Tìm vị trí bắt đầu của dấu "("
      const endIndex = state.valueSelected.indexOf(")"); // Tìm vị trí kết thúc của dấu ")"
      state.threePhoneNumber = state.valueSelected.substring(
        startIndex + 1,
        endIndex
      );
    },
    setFirstName: (state, action) => {
      state.userInfo.firstName = action.payload;

    },
    setLastName: (state, action) => {
      state.userInfo.lastName =action.payload;
    },
    setBirthdate: (state, action) => {
      state.userInfo.birthdate = action.payload;
    },
    setEmail: (state, action) => {
      state.userInfo.email = action.payload;
    },
    setIsLastNameFocus: (state,action)=>{
       state.isLastNameFocus = action.payload
    },
    toggleIsCheckedReceive:(state,action)=>{
      state.userInfo.isCheckedReceive = !state.userInfo.isCheckedReceive

    }
  },
});
export const {
  toggleIsConfirmOpen,
  changeCode,
  setValueSelected,
  toggleIsFinishOpen,
  setFirstName,
  setLastName,
  setBirthdate,
  setEmail,
  changePhoneNumber,
  setIsLastNameFocus,
  toggleIsCheckedReceive
} = loginSlice.actions;
const loginSliceReducer = loginSlice.reducer;
export default loginSliceReducer;
