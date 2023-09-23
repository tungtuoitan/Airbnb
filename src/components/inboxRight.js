import { useDispatch,useSelector } from "react-redux";

export default function InboxRight() {
  const isMessOn = useSelector(state=>state.inboxSlice.isMessOn)
  return (
    <div className={`hidden   h-full w-full
    ${isMessOn ? '7:block':''}`}>
      <div className="border-b-c1 border-solid border-gray-300 || w-full h-c72"></div>
    </div>
  );
}
