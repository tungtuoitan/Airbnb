import GrayLine from "./grayLine";
import TopPart from "./topPart";
import BottomPart from "./bottomPart";
import {useSelector} from 'react-redux'


export default function PhoneSection() {
  const isFinishOpen = useSelector(state=>state.loginSlice.isFinishOpen)
  return (
    <div className={`
    ${isFinishOpen ? '':'relative'}

    `}>
      <div className=" border-l-c1 border-t-c1 border-r-c1 border-solid || 
      border-gray-400 rounded-t-md || cursor-pointer ">
        <TopPart />
      </div>
      <GrayLine />
      <div className="relative top-c-3 ">
        <BottomPart />
      </div>
    </div>
  );
}
