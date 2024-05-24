import { actionIsTypingSearchPopUpOpen } from "../../actions/action";
import { useDispatch } from "react-redux";
import Input2WhereTo from "./input2WhereTo";
import SearchIcon4 from "../../icons/searchIcon4";

export default function InputWhereTo() {
 
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(actionIsTypingSearchPopUpOpen());
  };


  return (
    <div
      className="INPUT_CONTAINER     border-1 border-gray-300 h-c60 rounded-xl  
          relative"
      onClick={handleOnClick}
    >
      <SearchIcon4 />
      <Input2WhereTo/>
    </div>
  );
}
