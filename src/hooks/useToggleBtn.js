import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fakeData from "../datas/fake-data";


export default function useToggleBtn (){
    const [isEnable,setIsEnable] = useState(true);
    const firstName = useSelector((state) => state.loginSlice.userInfo.firstName);
    const lastName = useSelector((state) => state.loginSlice.userInfo.lastName);
    const birthdate = useSelector((state) => state.loginSlice.userInfo.birthdate);
    const email = useSelector((state) => state.loginSlice.userInfo.email);
    
    useEffect(()=>{
      if (
        fakeData.regexCheckName.test(firstName) &&
        fakeData.regexCheckName.test(lastName) &&
        fakeData.regexCheckDate.test(birthdate) &&
        fakeData.regexCheckSlash.test(birthdate.slice(-4)) &&
        fakeData.regexCheckEmail.test(email)
    
      ) {
        setIsEnable(true);
      } else {
        setIsEnable(false);
      }
    
    },[firstName,lastName,birthdate,email])
    return isEnable
    
}