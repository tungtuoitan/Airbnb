import HeartBtn from "./HeartBtn";
import ShareBtn from "./ShareBtn";
import BackIcon from "./backIcon";


export default function InvisibleBar() {
  
  return (
    <div className="z100 px-c12 h-16 flex items-center absolute top-0 w-full">
      <div className="flex justify-between items-center w-full ">
        <BackIcon />
        <div className=" flex justify-center gap-c10 ">
          <ShareBtn />
          <HeartBtn />
        </div>
      </div>
    </div>
  );
}
