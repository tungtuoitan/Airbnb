import ItemU1 from "./itemU1";
import { useDispatch,useSelector } from "react-redux";

export default function InboxPopUp() {
 
  const isPopUpOn = useSelector((state) => state.inboxSlice.isPopUpOn);


  return (
    <div
      className={`bg-white || py-2 absolute top-12 right-0  w-60
      || box-shadow-u8 || rounded-2xl text-sm
      ${isPopUpOn ? '':'hidden'}`}
    >
        <ItemU1 content='All conversations'/>
        <ItemU1 content='Archived conversations (0)'/>
        <ItemU1 content='Unread conversations (0)'/>
    </div>
  );
}
