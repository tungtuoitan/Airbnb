import InboxBar1 from "./inboxBar1";
import InboxBar2 from "./inboxBar2";
import InboxPopUp from "./inboxPopUp";
import InputMain from "./inputMain";
import MessContainer from "./messContainer";
import { useDispatch, useSelector } from "react-redux";

export default function InboxLeft() {
  const isMessOn = useSelector((state) => state.inboxSlice.isMessOn);
  return (
    <div
      className={`w-full   h-full relative px-6 || 
    || border-r-c1 border-solid border-gray-300
    ${isMessOn ? "max-w-c388" : ""}`}
    >
      <InboxBar1 />
      <InboxBar2 />
      <InputMain />
    </div>
  );
}
