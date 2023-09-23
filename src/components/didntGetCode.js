export default function DidntGetCode() {
  const handleOnClick=()=>{
    alert('Xin lỗi, máy chủ đang bảo chì, vui lòng thử lại sau!')
  }
  return (
    <p className="text-left mt-4 ">
      <span className="text-gray7 ">Didn't get a code?</span>
      <a
        className="font-bold text-black222 underline || ml-c4 cursor-pointer "
        onClick={handleOnClick}
      >
        More options
      </a>
    </p>
  );
}
