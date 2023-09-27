import MessBtn from "./messBtn";
import NotiBtn from "./notiBtn";

export default function InboxBar2() {
  return (
    <div
      className="BAR2 ||  flex justify-start gap-c20 
    || text-c14 font-semibold border-b-c1 border-solid border-gray-300"
    >
      <MessBtn/>
      <NotiBtn/>
    </div>
  );
}
