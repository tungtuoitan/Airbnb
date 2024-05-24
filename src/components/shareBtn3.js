import ShareIcon2 from "./shareIcon2";
import ShareIcon from "./shareIconB";

export default function ShareBtn3() {
  const handleOnClick = ()=>{
    alert('Xin lỗi, hệ thống đang bảo chì.')
  }
    return (
      <div
        className=" w-8 h-8 rounded-full cursor-pointer
              bg-black flex justify-center items-center gap-2  "
              onClick={handleOnClick}
      >
        <ShareIcon2/>
      </div>
    );
  }
  