import RoomTitle from "./roomTitle";
import MoreInfo from "./secondText";

export default function TitleContainer() {
  return (
    <div 
      className="px-6 7:pt-6 7:px-10 11:px-20 11:flex 11:justify-center"
    >
      <div className="11:w-c1120   ">
        <RoomTitle />
        <MoreInfo />
      </div>
    </div>
  );
}
