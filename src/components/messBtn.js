import { useDispatch, useSelector } from "react-redux";
import {setIsmessOn} from '../reducer/inboxSlice'

export default function MessBtn() {
  const isMessOn = useSelector((state) => state.inboxSlice.isMessOn);
  const currentChoice = useSelector((state) => state.inboxSlice.currentChoice);

  const dispatch = useDispatch()
  const handleOnClick = ()=>{
    dispatch(setIsmessOn(true))
  }
  return (
    <div
      className={`py-c14 || cursor-pointer 
        ${
          isMessOn
            ? "text-black222 border-b-c2 border-solid border-black222"
            : "text-gray-400"
        }`}
      onClick={handleOnClick}
    >
      {currentChoice === 'All conversations' ? 'Messages'
      :currentChoice ==='Archived conversations (0)'
      ? 'Archived':'Unread'}
    </div>
  );
}
