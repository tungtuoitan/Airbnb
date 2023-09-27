import HeartBtnB from "./heartBtnB";
import HeartIcon from "./heartIcon";
import ShareBtnB from "./shareBtnB";
import ShareIcon from "./shareIconB";

export default function BtnsOnRight() {
  return (
    <div className="hidden 7:flex gap-4 text-sm pr-4 cursor-pointer ">
      <ShareBtnB />
      <HeartBtnB />
    </div>
  );
}
