import Icon8 from "./icon8";
import { useDispatch, useSelector } from "react-redux";
import InboxPopUp from "./inboxPopUp";
import InboxTitle from "./inboxTitle";
import Bar1Right from "./bar1Right";

export default function InboxBar1() {
  return (
    <div className={`pt-12 7:pt-8 flex justify-between items-center`}>
      <InboxTitle />
      <Bar1Right />
    </div>
  );
}
