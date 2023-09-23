import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useToggleBtn from "../hooks/useToggleBtn";
import { setLogInFrom, toggleIsLogged } from "../reducer/accSlice";

export default function MainBtn({ content }) {
  const dispatch = useDispatch();
  const logInFrom = useSelector((state) => state.accSlice.logInFrom);
  const isEnable = useToggleBtn();

  // useEffect(()=>{
  //   if(window.location.pathname==='/sign-up' ){
  //     dispatch(setLogInFrom('/'))
  //   }else if(window.location.pathname==='/wishlists'){
  //     dispatch(setLogInFrom('/wishlists'))
  //   }
  // },[])
  
  const handleOnClick = ()=>{
    if(isEnable){
      dispatch(toggleIsLogged(true))
    }
  }

  return (
    <Link
      to={isEnable ? `${logInFrom}` : ""}
      className={`BUTTON   w-full rounded-md  py-c12 flex justify-center items-center
        weight-800 text-white
        ${isEnable ? "main-gradient" : "bg-lgrayd"}`}
        onClick={handleOnClick}
    >
      {content}
    </Link>
  );
}
