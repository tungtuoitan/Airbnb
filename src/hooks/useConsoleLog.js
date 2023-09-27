
import { useState,useEffect } from "react";
export const useConsoleLog=()=>{

  const [isFirstTime,setIsFirstTime] = useState(true)
  useEffect(()=>{
    if(isFirstTime){
      // alert('Airbnb xin chào, nếu có vấn đề về đăng kí/ đăng nhập, xin hãy xem qua hướng dẫn trong console!')
    }
    setIsFirstTime(false)

  },[])
}