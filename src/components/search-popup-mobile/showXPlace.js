 import { actionSearchPopUp } from "../../actions/action";
import useCreateList from "../../hooks/useCreateList";
import InSearchBtn from "./inSearchBtn";
import { useDispatch, useSelector } from "react-redux";
import { setIsFilterOn } from "../../reducer/filterSlice";
import {Link} from 'react-router-dom'
import { setDisplayingIndex } from "../../reducer/header2Slice";

export default function ShowXPlace() {
  const dispatch = useDispatch();
  const currentHomeList = useCreateList().currentHomeList;
  
  const content =
    currentHomeList.length === 0
      ? "No exact matches"
      : `Show ${currentHomeList.length} place`;

  const handleOnClick = () => {
    if (currentHomeList.length !== 0) {
      dispatch(setIsFilterOn())
      window.scrollTo({top:0,behavior:'smooth'})
      dispatch(setDisplayingIndex(999));
    }
    
  };
  return (
    <Link to ='/'
      className=" bg-black222 ||  h-12 px-c24
      ||  flex justify-center items-center || rounded-lg "
      onClick = {handleOnClick}
    >
      <div
        className="flex  justify-center items-center 
      ||  text-white font-bold whitespace-nowrap "
      >
        <span>{content}</span>
      </div>
    </Link>
  );
}
