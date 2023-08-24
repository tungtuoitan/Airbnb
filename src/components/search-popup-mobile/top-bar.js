import { useSelector, useDispatch } from "react-redux";
import { actionCloseTypingSearchPopUp, actionSearchPopUp } from "../../actions/action";
import TitleSearchPopUp from "./titleSearchPopup";
import BackIcon from "../../icons/backIcon";
import XIcon from "../../icons/xIcon";

export default function TopBar() {
  
  const dispatch = useDispatch();
  
  const isTypingSearchPopUpOpen = useSelector(
    (state) => state.root.isTypingSearchPopUpOpen
  );
  const handleOnClick = ()=>{
    if(isTypingSearchPopUpOpen===false){
      dispatch(actionSearchPopUp());
    }else{
      dispatch(actionCloseTypingSearchPopUp())
    }
  }

  return (
    <div
      className="TOP_BAR      w-full h-c60 
        flex justify-center items-center relative pt-c25 pb-c11 pl-c12"
    >
      <button
        className="ICON     w-8 h-8 rounded-full border-1 border-solid border-gray-400
        flex justify-center items-center absolute left-c20"
        onClick={() => {handleOnClick()
          
        }}
      >
        {isTypingSearchPopUpOpen === true ? (
          <XIcon/>
        ) : (
          
          <BackIcon/>
        )}
      </button>
      <TitleSearchPopUp/>
      
    </div>
  );
}
