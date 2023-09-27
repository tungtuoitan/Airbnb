import { useDispatch,useSelector } from "react-redux";
import { whereToInputChange, actionFiveCitiesArr } from "../../actions/action";
import fakeData from "../../datas/fake-data";
import {useEffect,useRef} from 'react'
import { useDisplayByTyping } from "../../hooks/useDisplayByTyping";


export default function InputTypingSearch (){
    const dispatch = useDispatch(); 
  const isTypingSearchPopUpOpen = useSelector(state=>state.root.isTypingSearchPopUpOpen)
  const displayResults = useDisplayByTyping()

  const handleOnChange = (e) => {
    dispatch(whereToInputChange(e.target.value));
    displayResults(e.target.value)
  };
  const inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  },[isTypingSearchPopUpOpen])
    return(
        <input
          className="INPUT      w-full h-full pr-c20 pl-12 text-light 
          placeholder:text-sm text-sm focus:outline-0
      placeholder:text-gray-600 font-medium rounded-3xl bg-grayf7 "
          placeholder="Search destinations"
          ref={inputRef}
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
    )
}