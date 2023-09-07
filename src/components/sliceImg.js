import RoomBar from "./roomBar";
import RoomTitle from "./roomTitle";
import MoreInfo from "./secondText";

export default function SliceImg() {
  return (
    <div className="mb-6 relative">
      <RoomBar/>
      <div className="max-h-xs ">
        <img src="./images/homes/a1.jpg" />
      </div>
      <div className="px-6 pt-5">
        <RoomTitle />
        <MoreInfo />
      </div>
    </div>
  );
}
