import HeartIcon2 from "./HeartIcon2";
import ShareIcon2 from "./ShareIcon2";
import BackIcon from "./backIcon";

export default function RoomBar() {
  return (
    <div className=" px-c12 h-16 flex items-center absolute top-0 w-full">
      <div className="flex justify-between items-center w-full ">
        <BackIcon />
        <div className=" flex justify-center gap-4 ">
          <ShareIcon2 />
          <HeartIcon2 />
        </div>
      </div>
    </div>
  );
}
