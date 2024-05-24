import SixDash from "./sixDash";
import { useState, useRef, useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import {changeCode} from '../reducer/loginSlice'

export default function InputConfirm() {
  const dispatch = useDispatch()
  const code = useSelector(state=>state.loginSlice.code)
  const handleOnChange = (e) => {
    if (!isNaN(Number(e.target.value)) && e.target.value.length<=6) {
      dispatch(changeCode(e.target.value))
    }
  };
  

  

  const [isDashesOpen,setIsDashesOpen] = useState(true)
  const handleOnBlur = ()=>{
    setIsDashesOpen(true)
  }
  const handleOnClick = ()=>{
    setIsDashesOpen(false)
  }
  const inputRef = useRef(null);

  return (
    <div
      className="w-c183 h-c56 rounded-lg border-c1 border-solid border-mdgray mt-6
    relative"
    >
      <input
        type="text"
        className="absolute top-0 left-0 || w-full h-full pl-c22 || rounded-lg || 
        tracking-10 text-c18
         "
        onChange={(e) => {
          handleOnChange(e);
        }}
        onBlur = {handleOnBlur}
        onClick = {handleOnClick}
        value={code}
        ref={inputRef}
      />
      <div
        className={`
      ${isDashesOpen && code===''  ? "" : "hidden"}`}
      >
        <SixDash />
      </div>
    </div>
  );
}
