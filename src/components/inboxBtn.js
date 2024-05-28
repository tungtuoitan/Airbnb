import { Link } from "react-router-dom";
import InboxIcon from "./inboxIcon";
export default function InboxBtn() {
  const path = window.location.pathname.replace("/Airbnb", "")
  return (
    <Link to="/inbox" className=" flex items-center flex-col gap-c3 || mt-c12 mb-2 w-1/5">
      <InboxIcon />
      <span className={`${path==='/inbox'? 'text-black222 font-semibold':''}`}>Inbox</span>
    </Link>
  );
}
