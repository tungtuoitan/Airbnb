import ShareIcon from "./shareIconB";

export default function ShareBtn() {
  const handleOnClick = ()=>{
    alert('Xin lỗi, hệ thống đang bảo chì.')
  }
    return (
      <div
        className=" w-8 h-8 rounded-full 
              bg-white flex justify-center items-center gap-2 box-shadow-u2 "
              onClick={handleOnClick}
      >
        <ShareIcon/>
      </div>
    );
  }
  