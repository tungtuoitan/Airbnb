export default function BlueText({ content }) {
  const handleOnClick = () => {
    alert("Xin lỗi, máy chủ đang bảo chì, vui lòng thử lại sau!");
  };
  return (
    <a className="text-blue-700 underline text-extrabold || cursor-pointer"
    onClick={handleOnClick}>
      {content}
    </a>
  );
}
