
import HeartBtn from "./HeartBtn";
import ShareBtn from "./ShareBtn";
import BackIcon from "./backIcon";
import BackIcon2 from "./backIcon2";
import CloseBtn from "./closeBtn";
import Counting from "./counting";
import HeartBtn2C from "./headerBtn2c";
import HeartBtn2B from "./heartBtn2b";
import ShareBtn2 from "./shareBtn2";
import ShareBtn3 from "./shareBtn3";


export default function BlackTopBar() {
  
  return (
    <div className="black-top-bar z100 bg-black  h-16 
     flex items-center absolute top-0 w-full px-c10 7:px-10">
      <div className="flex justify-between items-center w-full ">
        <CloseBtn />
        <Counting/>
        <div className=" flex justify-center gap-c10 ">
          <ShareBtn3 />
          <HeartBtn2C />
        </div>
      </div>
    </div> 
  );
}
