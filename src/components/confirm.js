import ConfirmPopUp from "./confirmPopUp";
import {useDispatch,useSelector} from 'react-redux'
export default function Confirm() {
  const consoleLog = ()=>{
    console.clear()
    console.log('CONFIRM CODE: Xin nhập đủ 6 số bất kì')

  }
  const isConfirmOpen = useSelector(state=>state.loginSlice.isConfirmOpen)
  
  return (
    <div className={`CONFIRM_CONT  || w-full h-screen left-0  
    fixed  top-c-2 || zmax3  justify-center items-center || bg-black/50 border-0 
    || transition-all 
     ${isConfirmOpen ? '7:flex':'hidden'}`}>
      {isConfirmOpen ? consoleLog(): true}
      <ConfirmPopUp/>
    </div>
  );
}
