import { useDispatch,useSelector } from "react-redux";
import { setCurrentChoice } from "../reducer/inboxSlice";

export default function ItemU1({ content }) {
  const dispatch = useDispatch()
  const currentChoice = useSelector((state) => state.inboxSlice.currentChoice);
  const handleOnClick =()=>{
    dispatch(setCurrentChoice(content))
  }
  return (
    <div className={`flex items-center || pl-4 h-10 w-full 
    || text-black222 hover:bg-gray-100 cursor-pointer
    ${currentChoice===content ? 'bg-gray-100':''}`}
      onClick={handleOnClick}
    >
      {content}
    </div>
  );
}
