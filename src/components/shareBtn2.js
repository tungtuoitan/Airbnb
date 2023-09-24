import ShareIcon from "./shareIconB";

export default function ShareBtn2() {
  const handleOnClick = ()=>{
    alert('Xin lỗi, hệ thống đang bảo chì.')
  }
    return (
      <div
        className=" w-8 h-8 rounded-full cursor-pointer
              bg-white flex justify-center items-center gap-2  "
              onClick={handleOnClick}
      >
        <ShareIcon/>
      </div>
    );
  }
  