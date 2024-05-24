

import { useDispatch,useSelector } from "react-redux";
export default function MobileAvt (){
  const firstName = useSelector((s) => s.loginSlice.userInfo.firstName);
  const letter1 = firstName[0].toUpperCase();
    return(
        <div
          className="AVT || w-c54 h-c54 rounded-full bg-black222 
          || flex justify-center items-center"
        >
          <span className="text-white font-bold text-c20">{letter1}</span>
        </div>
    )
}