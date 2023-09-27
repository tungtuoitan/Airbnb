import HeartBtn from "./HeartBtn";
import ShareBtn from "./ShareBtn";
import BackIcon from "./backIcon";
import BackIcon2 from "./backIcon2";
import HeartBtn2B from "./heartBtn2b";
import ShareBtn2 from "./shareBtn2";


export default function WhiteTopBar() {
  
  return (
    <div className="z100 bg-white px-c12 h-16 flex items-center sticky top-0 w-full">
      <div className="flex justify-between items-center w-full ">
        <BackIcon2 />
        <div className=" flex justify-center gap-c10 ">
          <ShareBtn2 />
          <HeartBtn2B />
        </div>
      </div>
    </div> 
  );
}
